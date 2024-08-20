import ProfileCard from "./components/ProfileCard";
import TaskList from "./components/TaskList";
import Hub from "./components/Hub";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <main className="flex h-screen">
      <Hub/>

      <Dashboard/>
    </main>
  );
}
