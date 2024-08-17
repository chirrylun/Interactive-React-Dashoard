import TaskCard from "./components/TaskCard";
import NameBar from "./components/NameBar";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="bg-primary w-[20%]">
        <NameBar/>
        
      </div>

      <div className="w-full">
        <div className="h-[7%]"></div>
        <div className="bg-nav h-[86%]"></div>
        <div className="h-[7%]"></div>
      </div>
    </main>
  );
}
