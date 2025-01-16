import { MoreHorizontal, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

export function Post() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="Author"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="font-semibold">Jessica Kates</h4>
              <p className="text-sm text-gray-600">Senior Recruiting Manager</p>
              <p className="text-xs text-gray-500">4h</p>
            </div>
          </div>
          <button className="h-8 w-8 hover:bg-gray-100 rounded-full flex items-center justify-center">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        
        <p className="mt-4">Exciting News! 🎉</p>
      </div>

      <div className="px-4 py-2 border-t flex justify-between">
        <button className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded">
          <ThumbsUp className="w-5 h-5" />
          <span>Like</span>
        </button>
        <button className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded">
          <MessageSquare className="w-5 h-5" />
          <span>Comment</span>
        </button>
        <button className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded">
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}