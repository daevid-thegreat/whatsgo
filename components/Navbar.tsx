'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import {ArrowDown2, HambergerMenu} from "iconsax-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <nav className="text-black font-lexend">
            <div className="flex justify-between items-center">
                <div>
                    <a href="/" className="text-2xl font-bold">
                        <Image src={'/whatsgo.png'} alt={'WhatsGo'} width={140} height={55}/>
                    </a>
                </div>
                <div className={'md:hidden flex'}>
                    <a href="/" className=" hover:text-white">Technologies</a>
                    <a href="https://daevidthegreat.com/" target={'_blank'} className="font-bold ml-4 hover:text-white">Daevid
                        The Great</a>
                </div>

                <div className={'md:hidden flex'}>
                    <Link href="/signup"
                          className={'bg-[#5DB3B8] px-3 py-3.5 border-l-2 border-t-2 border-r-4 border-b-4 border-black text-[20px] hover:border-white text-white font-bold'}>
                        Get Started
                    </Link>
                </div>

                <div className={`hidden md:flex justify-end`}>
                    <HambergerMenu size="32" color="#082B15" className={`${isMobileMenuOpen ? 'hidden' : 'flex'}`}
                                   onClick={
                                       () => setIsMobileMenuOpen(!isMobileMenuOpen)
                                   }/>
                    <ArrowDown2 size="32" color="#082B15" className={`${isMobileMenuOpen ? 'flex' : 'hidden'}`}
                                onClick={
                                    () => setIsMobileMenuOpen(!isMobileMenuOpen)
                                }/>
                </div>
            </div>
            <div
                className={`items-center mt-10 justify-between hidden  ${isMobileMenuOpen ? 'md:flex md:flex-col' : 'hidden'}`}>
                <div className={'flex flex-col space-y-2.5'}>
                    <a href="/" className=" hover:text-white">Technologies</a>
                    <a href="https://daevidthegreat.com/" target={'_blank'}
                       className="font-bold ml-4 hover:text-white">Daevid
                        The Great</a>
                </div>

                <div className={'mt-6'}>
                    <Link href="/signup"
                          className={'bg-[#5DB3B8] px-3 py-3.5 border-l-2 border-t-2 border-r-4 border-b-4 border-black text-[20px] hover:border-white text-white font-bold'}>
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    )
}
