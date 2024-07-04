import Hero from "@/components/Hero";
import { FaHome } from "react-icons/fa";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full min-h-screen">
  <div className="max-w-7xl w-full">
    <FloatingNav 
    navItems={[
        {name:'Home',link:'/',icon:<FaHome/>}
      ]}
    />
    <Hero />
    
    <Grid/>

    <RecentProjects />
  </div>
</main>

  );
}
