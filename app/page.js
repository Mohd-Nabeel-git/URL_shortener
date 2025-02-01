import Image from "next/image";
import './globals.css'
import Link from "next/link";


export default function Home() {
  return (
    <main  className="font-custom">
      <section className="grid grid-cols-[2fr_1fr] h-[90vh]">
        <div className="bg-blue-100 flex flex-col text-center justify-center px-56">
          <p className="text-2xl font-black py-5">The Fastest URL Shortener in the market is here!</p>
          <p>We emphasize usability more then anything else. Most URL shortener are complicated and always ask you for registration before performing intended tasks. This URL shortener aims to change this.</p>
          <div>
          <Link href="/shorten"><button  className= 'border-blue-300 border-2 rounded-lg bg-blue-300 px-2 m-2'>Try now</button></Link>
          <Link href="/github"><button  className='border-blue-300 border-2 rounded-lg bg-blue-300 px-2'>Github</button></Link>
          </div>
        </div>

        <div className="relative">
          <Image className="mix-blend-darken bg-blue-100" src={"/vector.svg"} fill={true} alt="error loading image" />
        </div>
      </section>
    </main>
  );
}
