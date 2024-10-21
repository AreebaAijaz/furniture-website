import Link from "next/link"

export default function Footer(){
    return(
        <section className="h-96">
          <div className="text-gray-200 bg-black text-3xl font-bold flex items-center pt-8 pl-20">
            <p>Soudemy</p>      
          </div>

            <div className=" bg-black flex gap-x-10 space-x-32 justify-between pt-8 pb-20 px-20  w-full">
            <div className=" space-y-5">
                <h1 className=" text-xl font-bold text-gray-200">About Us</h1>
                <p className="text-gray-400 w-10/12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, culpa blanditiis et cumque amet fuga quidem sed! Doloribus, nobis inventore aspernatur ullam repudiandae odit nesciunt obcaecati corrupti adipisci dolorum consectetur.</p>
            </div>
            <div className="w-1/2 space-y-5 pr-5">
                <h1 className="text-xl font-bold text-gray-200">Useful  </h1>
                    <div className="text-gray-400">
                    <p>Table Desk</p>
                    <p>Office Lamps</p>
                    <p>Stylish Chairs</p>
                    <p>Unique Tables</p>
                    <p>Cutlery Items</p>
                    </div>
            </div>
            <div className="w-1/4 space-y-5">
            <h1 className="text-xl font-bold text-gray-200">Follow</h1>
            <div className="text-gray-400">
                    <Link href="www.facebook.com">facebook</Link><br/>
                    <Link href="www.instagram.com">instagram</Link><br/>
                    <Link href="www.twitter.com">twitter</Link><br/>
                    <Link href="www.pinterest.com">pinterest</Link><br/>
                    <Link href="www.youtube.com">youtube</Link><br/>
                </div>
            </div>
            <div className="w-1/4 space-y-5">
                <h1 className="text-xl font-bold text-gray-200">Contact Us</h1>
                <div className="text-gray-400">
                <p>245/M/2 Block، 6, Block 6 P.E.C.H.S., Karachi, Karachi City, Sindh 75400</p>
                <p>areebaaijaz694@gmail.com</p>
                <p>+92 3782019562</p>
                </div>
            </div>
            </div>
        </section>
    )
}