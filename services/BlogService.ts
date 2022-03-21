import { Client } from "@notionhq/client";
import { NotionBlocksMarkdownParser } from "@benlorantfy/notion-blocks-markdown-parser";
import { Block } from "@benlorantfy/notion-types";
import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

export class BlogService {
    notion = new Client({
        auth: process.env.NOTION_KEY,
    })
    parser = NotionBlocksMarkdownParser.getInstance();

    mapPageIdsToSlugs: { [key: string]: string|undefined } = {
        "the-no-nonsense-styling-method": "cc50b4aa8c9b4fd8bd6253820bccf454"
    }

    async getPageMarkdown(pageSlug: string): Promise<string> {
        const pageId = this.mapPageIdsToSlugs[pageSlug];
        if (!pageId) {
            throw new Error("Could not find page with this slug");
        }

        const blocks = await this.getBlocks(pageId);

        const markdown = this.parser.parse(blocks);
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