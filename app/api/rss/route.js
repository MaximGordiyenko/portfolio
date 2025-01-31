import RSSParser from 'rss-parser';

export async function GET() {
  const parser = new RSSParser();
  const feed = await parser.parseURL('https://blog.logrocket.com/tag/react/feed/');
  
  // Map the items to the desired structure
  const formattedItems = feed.items.map(item => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    description: item.contentSnippet,
  }));
  
  return new Response(JSON.stringify(formattedItems), {
    headers: { 'Content-Type': 'application/json' },
  });
}
