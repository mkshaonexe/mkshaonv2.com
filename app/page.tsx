import ProfileCard from '@/components/home/ProfileCard';
import RightSidebar from '@/components/home/RightSidebar';
import Feed from '@/components/home/Feed';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[1440px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative items-start">

        {/* Left Sidebar - Profile (Sticky) */}
        <div className="hidden md:block md:col-span-3 lg:col-span-3 sticky top-24">
          <ProfileCard />
        </div>

        {/* Center - Feed */}
        <div className="col-span-1 md:col-span-9 lg:col-span-6 space-y-6">
          {/* Mobile Profile Card */}
          <div className="md:hidden">
            <ProfileCard />
          </div>
          <Feed />
        </div>

        {/* Right Sidebar (Sticky) */}
        <div className="col-span-1 md:col-span-12 lg:col-span-3 sticky top-24">
          <RightSidebar />
        </div>

      </div>
    </div>
  );
}
