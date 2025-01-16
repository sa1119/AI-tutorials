import { Image, Video, FileText } from 'lucide-react';
import { useState } from 'react';
import { CreatePostModal } from './CreatePostModal';

export function CreatePost() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex gap-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500"
          >
            Start a post
          </button>
        </div>
        
        <div className="flex justify-between mt-4">
          <button className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded">
            <Video className="w-5 h-5 text-blue-500" />
            <span>Video</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded">
            <Image className="w-5 h-5 text-green-500" />
            <span>Photo</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-2 hover:bg-gray-100 rounded">
            <FileText className="w-5 h-5 text-orange-500" />
            <span>Write article</span>
          </button>
        </div>
      </div>

      <CreatePostModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}