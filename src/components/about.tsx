import Link from "next/link"

export default function About(){
    return(
        <section>
          <main className="flex ">
        <div className="logo-section text-2xl font-extrabold pt-5 pl-14 ">
          <p>soudemy</p>
        </div>
        <div className="menus-section text-xl font-bold flex gap-x-8 mt-6 ml-20">
          <Link href="/">Home</Link>
          <Link href="./shop">Shop</Link>
          <Link href="./about">About us</Link>
          <Link href="./blog">Blog</Link>
        </div>
        <div className="menu-icons flex gap-x-10 p-6 ml-96 pl-48 h-[70px]">
          <img src="search-normal.png" alt="search" className="filter grayscale brightness-50"/>
          <img src="bag-2.png" alt="bag" className="filter grayscale "/>
          <img src="menu.png" alt="menu" className="filter grayscale brightness-50"/>
             </div>
           </main>

           <div className="relative flex justify-center items-center ">
            <img src="hero.png" alt="sofa"
            className="p-14 h-[650px] w-full"
            />
            <p className="absolute text-white text-4xl">About us</p>
           </div>
        </section>
    )
}