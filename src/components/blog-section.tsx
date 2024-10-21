import Link from "next/link"

export default function Blog(){
    return(
        <section className="flex space-x-10 px-10 my-10 pt-10">
            <div className="blog-2 space-y-1 text-center">
                <img src="blog2.png" alt="table" />
                <p className="text-gray-400">16 Oct,2024 / by areeba aijaz</p>
                <p className="text-xl font-bold pb-3">Your office should only have<br/> natural materials.</p>
                <Link href="/" className="text-gray-400 underline">read more</Link>
            </div>

            <div className="blog-1 space-y-1 text-center">
                <img src="blog1.png" alt="table" />
                <p className="text-gray-400">16 Oct,2024 / by areeba aijaz</p>
                <p className="text-xl font-bold pb-3">Your office should only have<br/> natural materials.</p>
                <Link href="/" className="text-gray-400 underline">read more</Link>
            </div>

        </section>
    )
}


