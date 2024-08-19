import TaskCard from "./components/TaskCard";
import ProfileCard from "./components/ProfileCard";
import NavList from "./components/NavList";
import { useUserDetails } from "./hooks/useUserDetails";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="bg-primary w-[20%]">
        <div>
          <ProfileCard />
          
          <NavList/>

        </div>
      </div>

      <div className="w-full">
        <div className="h-[7%]"></div>
        <div className="bg-nav h-[86%]"></div>
        <div className="h-[7%]"></div>
      </div>
    </main>
  );
}
