
import ProfileCard from "./components/ProfileCard";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="bg-primary w-[20%]">
        <div>
          <ProfileCard />
          
          <TaskList/>

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
