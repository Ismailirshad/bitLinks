import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2  h-[91vh]  ">
        <div className=" gap-2 flex flex-col justify-center items-center">
          <p className="poppins font-bold md:text-start text-center md:text-2xl text-xl ">
            The best URL shortener in the Market
          </p>
          <p className="px-30 text-start">
            We are the best strightforward URL shortner in the world. Most of the URL
            shorteners will track you or ask you to give your details
            for login. We understand your needs and hence created this URL shortner
          </p>
          <div className='gap-2 flex'>
            <Link href='shorten'><button className='bg-purple-500 text-white font-bold rounded-xl py-1 px-2'>Try Now</button></Link>
            <Link href='.github'><button className='bg-purple-500 text-white  font-bold rounded-xl py-1 px-2'>GitHub</button></Link>
          </div>
        </div>
        <div className="mix-blend-darken flex justify-start relative">
          <Image src="/url_logo.png"   alt="ice cream image" fill={true} />
        </div>
      </section>
    </main>
  );
}
