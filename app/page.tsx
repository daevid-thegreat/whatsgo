import Image from 'next/image'
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-14 py-4 bg-[#A5FFF4]">
      <div className={'text-center items-center h-screen'}>
      <Navbar />
          <div className={'mt-[10%]'}>
        <h1 className={'text-6xl font-extrabold font-lexend text-[#1F4144] my-6'}>
          Send that message
          <br/>
          <span className={'text-black'}> NOW!!!</span>
        </h1>
        <span className={'font-jetbrains text-xl items-center text-center my-6'}>
            Instant messaging * real-time updates *  secured
          </span>
        <div className={'my-8'}>
          <Link href="/signup"
                className={'bg-[#5DB3B8] px-3 py-3.5 border-l-2 border-t-2 border-r-4 border-b-4 border-black text-[20px] hover:border-white text-white font-bold'}>
            Get Started
          </Link>
        </div>
          </div>
      </div>
    </main>
  )
}
