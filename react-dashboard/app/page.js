import TaskCard from "./components/TaskCard";
import NewProfileCard from "./components/NewProfileCard";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="bg-primary w-[20%]">
        <NewProfileCard />
      </div>

      <div className="w-full">
        <div className="h-[7%]"></div>
        <div className="bg-nav h-[86%]"></div>
        <div className="h-[7%]"></div>
      </div>
    </main>
  );
}
