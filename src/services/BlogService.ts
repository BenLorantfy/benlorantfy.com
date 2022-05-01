import { Client } from "@notionhq/client";
import { NotionBlocksMarkdownParser } from "@benlorantfy/notion-blocks-markdown-parser";
import { Block } from "@benlorantfy/notion-types";
import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import { config } from "../config";
import probe from 'probe-image-size';

export class BlogService {
    notion = new Client({
        auth: process.env.NOTION_KEY,
    })
    parser = NotionBlocksMarkdownParser.getInstance({
        // https://www.reddit.com/r/Notion/comments/axaqij/uploaded_files_seem_accessible_to_anyone_without/
        imageAsFigure: false,

        // Adds the image size to the end of the markdown output
        addImageSizeToAltText: true,

        // Gets the image size based on the url using probe-image-size
        getImageSize: (url) => probe(url)
    });

    async getPageMarkdown(pageSlug: keyof typeof config.articles): Promise<string> {
        const pageId = config.articles[pageSlug].cmsID;
        if (!pageId) {
            throw new Error("Could not find page with this slug");
        }

        const blocks = await this.getBlocks(pageId);
        const markdown = await this.parser.parse(blocks);
        return markdown;
    }

    async getBlocks(blockId: string): Promise<Array<Block>> {
        const response = await this.notion.blocks.children.list({
            block_id: blockId,
            page_size: 200,
        });

        if (!this.areBlocks(response.results)) {
            throw new Error("Response from notion was not expected");
        }

        for (let result of response.results) {
            if (result.has_children) {
                (result as any)[result.type].children = await this.getBlocks(result.id);
            }
        }

        return response.results;
    }

    areBlocks(blocks: ListBlockChildrenResponse["results"]): blocks is Array<Block>  {
        return Array.isArray(blocks);
    }
}
