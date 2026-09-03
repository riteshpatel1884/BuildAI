// Replace this with your doc's actual embed URL:
// - "Anyone with the link can view" sharing → https://docs.google.com/document/d/YOUR_FILE_ID/preview
// - Published to web            → https://docs.google.com/document/d/e/YOUR_PUBLISHED_ID/pub?embedded=true
const DOC_EMBED_URL = 'https://docs.google.com/document/d/1u9M4G-Vn0VTTriemO--EsX03m9swiWK0BgwYWwHTrP4/edit?usp=sharing';

export default function DeepAgentDocsPage() {
  return (
    <iframe
      src={DOC_EMBED_URL}
      title="Deep Agent notes"
      className="h-[calc(100vh-6rem)] w-full rounded-xl border border-zinc-200 dark:border-white/10"
      allow="autoplay"
    />
  );
}