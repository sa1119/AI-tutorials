import { Button } from '@/components/ui/button';
import { BookmarkIcon, Users } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-[225px] space-y-4">
      <div className="bg-white rounded-lg shadow">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
            alt="Cover"
            className="w-full h-14 object-cover rounded-t-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="Profile"
            className="absolute left-4 -bottom-6 w-16 h-16 rounded-full border-2 border-white"
          />
        </div>
        <div className="pt-8 p-4">
          <h2 className="font-semibold">Shiva Ayalasomayajula</h2>
          <p className="text-sm text-gray-600 mt-1">
            Sr. Manager IT Project Management / Agile Scrum of Scrums Leader
          </p>
          <p className="text-sm text-gray-600 mt-1">San Diego, California</p>
          
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Profile viewers</span>
              <span className="text-blue-600 font-semibold">53</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-2">Accelerate your career with Premium</h3>
        <Button variant="outline" className="w-full">
          Retry for $0
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 hover:bg-gray-100 cursor-pointer">
          <div className="flex items-center gap-2">
            <BookmarkIcon className="w-5 h-5" />
            <span>Saved items</span>
          </div>
        </div>
        <div className="p-4 hover:bg-gray-100 cursor-pointer border-t">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>Groups</span>
          </div>
        </div>
      </div>
    </aside>
  );
}