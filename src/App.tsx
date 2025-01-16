import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { NewsFeed } from './components/feed/NewsFeed';
import { News } from './components/widgets/News';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-[225px_1fr_300px] gap-6 pt-[56px]">
        <Sidebar />
        <NewsFeed />
        <div className="space-y-4">
          <News />
        </div>
      </div>
    </div>
  );
}