import { title } from "process"

const Blogs=[
    {
        id:1,
        date:"Oct 22,2024",
        title:`Paint your office in natural colors only.`,
        link:"Read more",
        image:"Rectangle 43.png"
    },
    {
        id:2,
        date:"Oct 22,2024",
        title:"Paint your office in natural colors only.",
        link:"Read more",
        image:"Rectangle 49.png"
    },
    {
        id:3,
        date:"Oct 22,2024",
        title:"Paint your office in natural colors only.",
        link:"Read more",
        image:"Rectangle 50.png"
    }
]


export default function AboutBlog(){
    return(
        <section className="mx-14 my-32 space-y-20">
            <h1 className="text-xl font-bold">Latest Blog Posts</h1>
            <div className="flex justify-between gap-x-8">
            {Blogs.map((Blog)=>(
                <div className="space-y-3 text-center">
                <img src={Blog.image}/>
                <p className="text-gray-400">{Blog.date}</p>
                <p className="text-gray-800 font-bold px-16">{Blog.title}</p>
                <p className="text-gray-800 underline">{Blog.link}</p>
                </div>
            ))}
            </div>
        </section>
    )
}