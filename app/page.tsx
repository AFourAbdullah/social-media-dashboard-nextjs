import Image from "next/image";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sidebar />
      <h2 className="bg-black text-white text-2xl">Hello</h2>
    </main>
  );
}
