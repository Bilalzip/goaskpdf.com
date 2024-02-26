import Homecomp from "@/components/Homecomp";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <main className="main flex flex-col bg-gradient-to-r from-slate-900 to-slate-700">
    <Navbar/>
    <Homecomp/>
</main>
  );
}
