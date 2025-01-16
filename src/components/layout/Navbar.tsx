import { Search } from 'lucide-react';
import { NavItem } from './NavItem';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 text-[#0a66c2]" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
            />
          </svg>
          <div className="flex items-center bg-[#eef3f8] px-4 py-2 rounded">
            <Search className="w-4 h-4 text-gray-600" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none ml-2"
            />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <NavItem icon="home" label="Home" active />
          <NavItem icon="users" label="My Network" badge="35" />
          <NavItem icon="briefcase" label="Jobs" />
          <NavItem icon="message-square" label="Messaging" badge="1" />
          <NavItem icon="bell" label="Notifications" badge="24" />
          <NavItem icon="user" label="Me" isProfile />
        </div>
      </div>
    </nav>
  );
}