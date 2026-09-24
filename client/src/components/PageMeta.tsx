/**
 * Operational Signal Desk metadata controller: each route keeps one canonical
 * URL, unique title, unique description, and a stable crawlable identity.
 */
import { createContext, useContext, useEffect, type ReactNode } from "react";

export type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

type PageMetaCollectorProps = {
  children: ReactNode;
  collect?: (metadata: PageMetadata) => void;
};

const PageMetaCollectorContext = createContext<PageMetaCollectorProps["collect"]>(undefined);

export function PageMetaCollector({ children, collect }: PageMetaCollectorProps) {
  return (
    <PageMetaCollectorContext.Provider value={collect}>
      {children}
    </PageMetaCollectorContext.Provider>
  );
}

export default function PageMeta({ title, description, path }: PageMetadata) {
  const collect = useContext(PageMetaCollectorContext);

  if (collect) collect({ title, description, path });

  useEffect(() => {
    document.title = title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = description;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = `https://helloglo.com${path}`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [title, description, path]);

  return null;
}
