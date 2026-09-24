import { renderToString } from "react-dom/server";
import App from "./App";
import { PageMetaCollector, type PageMetadata } from "./components/PageMeta";

const DEFAULT_METADATA: PageMetadata = {
  title: "AI-Native Staffing & Recruiting Software | Glo by Lantern",
  description: "Glo is AI-native staffing and recruiting software that turns candidate, job, client, and revenue signals into the next best action.",
  path: "/",
};

export function render(url: string) {
  let metadata = DEFAULT_METADATA;
  const appHtml = renderToString(
    <PageMetaCollector collect={(nextMetadata) => { metadata = nextMetadata; }}>
      <App ssrPath={url} />
    </PageMetaCollector>,
  );

  return { appHtml, metadata };
}
