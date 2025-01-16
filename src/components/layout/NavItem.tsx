import { Home, Users, Briefcase, MessageSquare, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItemProps {
  icon: string;
  label: string;
  badge?: string;
  active?: boolean;
  isProfile?: boolean;
}

export function NavItem({ icon, label, badge, active, isProfile }: NavItemProps) {
  const IconComponent = {
    home: Home,
    users: Users,
    briefcase: Briefcase,
    'message-square': MessageSquare,
    bell: Bell,
    user: User,
  }[icon];

  return (
    <div className={cn(
      'flex flex-col items-center cursor-pointer',
      active && 'border-b-2 border-black'
    )}>
      <div className="relative">
        {IconComponent && <IconComponent className="w-6 h-6 text-gray-600" />}
        {badge && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {badge}
          </span>
        )}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
}