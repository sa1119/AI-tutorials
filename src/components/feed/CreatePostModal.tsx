import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Image, Video, FileText, Globe2, X } from 'lucide-react';
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreatePostModal({ isOpen, onClose }: CreatePostModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[552px] p-0">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">Create a post</DialogTitle>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" />
            </Avatar>
            <div>
              <h3 className="font-semibold">Shiva Ayalasomayajula</h3>
              <Button
                variant="outline"
                size="sm"
                className="mt-1 h-7 text-sm font-normal"
              >
                <Globe2 className="w-4 h-4 mr-1" />
                Anyone
              </Button>
            </div>
          </div>

          <textarea
            placeholder="What do you want to talk about?"
            className="w-full mt-4 min-h-[120px] resize-none border-none outline-none placeholder:text-gray-500 text-lg"
            aria-label="Post content"
          />

          <div className="flex items-center gap-2 mt-4">
            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Add image">
              <Image className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Add video">
              <Video className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Add document">
              <FileText className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="p-4 border-t">
          <Button className="w-full bg-[#0a66c2] hover:bg-[#004182]">
            Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}