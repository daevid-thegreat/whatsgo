import Image from 'next/image'
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
      <>
          <main className="px-14 pt-4 bg-[#A5FFF4]">
              <div className={'text-center items-center h-screen'}>
                  <Navbar/>
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
              <div className={'flex items-center justify-between px-24 my-8'}>
                  <Image src={'/b1.png'} alt={'WhatsGo'} width={410} height={455}/>
                  <div>
                      <h1 className={'font-lexend text-5xl font-extrabold my-6'}>Your identity is yours</h1>
                      <p className={'font-jetbrains text-xl underline underline-offset-2 my-3'}>PS: We take your privacy
                          seriously</p>
                  </div>
              </div>

              <div className={'flex items-center justify-between px-24 my-8'}>
                  <div>
                      <h1 className={'font-lexend text-5xl font-extrabold my-6'}>Globally Available!</h1>
                      <p className={'font-jetbrains text-xl my-3'}>Whether you are In Nigeria, Netherlands, Australia,
                          Germany or Canada,
                          it doesn’t matter,
                          You can message anyone.
                          seriously</p>
                  </div>
                  <Image src={'/b2.png'} alt={'WhatsGo'} width={564} height={367.81}/>
              </div>

              <div className={'flex items-center justify-between px-24 mt-8 pb-8'}>
                  <Image src={'/b3.png'} alt={'WhatsGo'} width={369} height={369}/>
                  <div>
                      <h1 className={'font-lexend text-5xl font-extrabold my-6'}>We work with father time</h1>
                      <p className={'font-jetbrains text-xl my-3'}>Send and receive messages really fast</p>
                  </div>
              </div>
          </main>
          <footer className={'bg-white border-2 border-black flex justify-between px-20 py-14'}>
              <div>
                  <Image src={'/logo.png'} alt={'WHatsGo'} width={224} height={96}/>
              </div>

              <div>
                  <h1 className={'my-2.5 font-lexend font-extrabold text-lg'}>OpenSource</h1>
                  <div className={'flex flex-col space-y-3.5 text-xs font-jetbrains'}>
                      <Link target={'_blank'} href={'https://www.figma.com/file/CAytzqPSwM0fbDn2lr1zAf/WhatsGo?type=design&node-id=0%3A1&mode=design&t=AOxNjt3RkXTsQppZ-1'}>Figma Design</Link>
                      <Link target={'_blank'} href={'https://github.com/daevid-thegreat/whatsgo'}>GitHub NextJS</Link>
                      <Link target={'_blank'} href={'https://github.com/daevid-thegreat/WhatsGo-API-'}>GitHub Golang</Link>
                  </div>
              </div>

              <div>
                  <h1 className={'my-2.5 font-lexend font-extrabold text-lg text-end'}>Built By</h1>
                  <div className={'flex flex-col space-y-3.5 text-xs font-jetbrains text-end'}>
                      <Link target={'_blank'} href={'https://daevidthegreat.com/'}>Daevid The Great</Link>
                      <Link target={'_blank'} href={'http://linkedin.com/in/daevidthegreat/'}>LinkedIn</Link>
                      <Link target={'_blank'} href={'https://twitter.com/Daevid_Thegreat'}>Twitter</Link>
                  </div>
              </div>


          </footer>
      </>
  )
}
