export default function ProductCatalogue(){
    return(
        <section>
            <div className="chair space-y-4 flex justify-between items-center ">
                <div className="info space-y-8 ml-32">
                <h1 className=" text-3xl text-gray-800 font-extrabold uppercase pl-16">Stylish Chairs</h1>
                <p className="text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum<br/> necessitatibus eum dolorem sapiente? Nihil earum cumque culpa,<br/> modi temporibus dolores.</p>
                <button className="px-10 py-3 border border-gray-900 ml-28">View more</button>
                </div>
                <div className="imageinfo">
                    <img src="chair2.png" alt="chair" className="p-10 mr-8" />
                </div>
            </div>

            <div className="table-desk space-y-4 flex justify-between items-center mt-7 ">
            <div className="imageinfo">
                    <img src="table2.png" alt="table" className="p-10 ml-8" />
                </div>

                <div className="info space-y-8 mr-32">
                <h1 className=" text-3xl text-gray-800 font-extrabold uppercase pl-44">Table</h1>
                <p className="text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum<br/> necessitatibus eum dolorem sapiente? Nihil earum cumque culpa,<br/> modi temporibus dolores.</p>
                <button className="px-10 py-3 border border-gray-900 ml-36">View more</button>
                </div>
            </div>

            <div className="lamp space-y-4 flex justify-between items-center mt-7 ">
                <div className="info space-y-8 ml-32">
                <h1 className=" text-3xl text-gray-800 font-extrabold uppercase pl-16">Contemporary lamps</h1>
                <p className="text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum<br/> necessitatibus eum dolorem sapiente? Nihil earum cumque culpa,<br/> modi temporibus dolores.</p>
                <button className="px-10 py-3 border border-gray-900 ml-36">View more</button>
                </div>
                <div className="imageinfo">
                    <img src="lamp2.png" alt="chair" className="p-10 mr-8" />
                </div>
            </div>

        </section>
    )
} 