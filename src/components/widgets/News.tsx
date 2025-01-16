import { Info } from 'lucide-react';

export function News() {
  const newsItems = [
    {
      title: 'TikTok planning to go dark Sunday',
      time: '3h ago',
      readers: '32,611'
    },
    {
      title: 'Prominent short seller bows out',
      time: '3h ago',
      readers: '2,327'
    },
    {
      title: 'Blue Origin, SpaceX race heating up',
      time: '3h ago',
      readers: '605'
    },
    {
      title: 'Red dye No. 3 banned in food, drink',
      time: '3h ago',
      readers: '29,831'
    },
    {
      title: 'Profits surge at big banks',
      time: '3h ago',
      readers: '26,031'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">LinkedIn News</h2>
          <Info className="w-4 h-4" />
        </div>
        
        <ul className="space-y-4">
          {newsItems.map((item, index) => (
            <li key={index}>
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-xs text-gray-500">
                {item.time} • {item.readers} readers
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}