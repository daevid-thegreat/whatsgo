import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="text-black font-lexend">
            <div className="flex justify-between items-center">
                <div>
                    <a href="/" className="text-2xl font-bold">
                        <Image src={'/whatsgo.png'} alt={'WhatsGo'} width={140} height={55} />
                    </a>
                </div>
            <div>
                <a href="/" className=" hover:text-white">Technologies</a>
                <a href="https://daevidthegreat.com/" target={'_blank'} className="font-bold ml-4 hover:text-white">Daevid The Great</a>
            </div>

                <div>
                    <Link href="/signup" className={'bg-[#5DB3B8] px-3 py-3.5 border-l-2 border-t-2 border-r-4 border-b-4 border-black text-[20px] hover:border-white text-white font-bold'}>
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    )
}
