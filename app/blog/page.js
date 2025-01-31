"use client";
import { useEffect, useState } from 'react';

export default function Page() {
  const [rssItems, setRssItems] = useState([]);
  console.log(rssItems);
  useEffect(() => {
    async function fetchRSS() {
      const res = await fetch('/api/rss');
      const data = await res.json();
      setRssItems(data);
    }
    
    fetchRSS().then(r => r);
  }, []);
  
  return (
    <div className="max-w-full mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Dev Blog</h1>
      <div className="flex space-x-6">
        {/* First Block (70% of the screen width) */}
        <div className="flex-7 p-4 w-7/10">
          <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
          <p className="text-sm text-gray-700">
            Here you can add some extra content like advertisements, news, or
            links.
          </p>
        </div>
        
        {/* Second Block (30% of the screen width) */}
        <div className="flex-3 p-4 border rounded-lg shadow-md w-3/10 bg-gray-50">
          <h3 className="text-3xl font-bold text-gray-400 text-center mb-6">Feed</h3>
          <ul className="space-y-6">
            {rssItems.map((item, index) => (
              <li key={index}
                  className="p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
                <a href={item.link} target="_blank" rel="noopener noreferrer"
                   className="text-xl font-semibold text-gray-600 hover:text-gray-800 mb-2">
                  {item.title}
                </a>
                <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{new Date(item.pubDate).toLocaleDateString()}</span>
                  <span className="text-gray-400">{new Date(item.pubDate).toLocaleTimeString()}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
