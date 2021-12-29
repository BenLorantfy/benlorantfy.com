import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";
import md5 from "md5";


export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );
  
  const eTag = md5(markup);

  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("ETag", eTag);

  const requestETagsString = request.headers.get("If-None-Match");

  if (requestETagsString) {
    const requestETags = requestETagsString.split(" ");
    if (requestETags.includes(eTag)) {
      responseHeaders.set('X-Returned-Empty-Body', 'true');
      return new Response(null, {
        status: 304,
        headers: responseHeaders
      })
    }
  }

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
