import Footer from "@/components/footer"
import Pagination from "@/components/pagination"
import Link from "next/link"

export default function BlogPage(){
    return(
        <section>
            <div className="navbar">
                <div className="flex justify-between mt-2 w-full">
                    <div className="logo-section text-2xl font-extrabold pt-5 pl-14 ">
                        <p>soudemy</p>
                    </div>
                    <div className="menus-section text-xl font-bold flex gap-x-8 mt-6 mr-auto ml-20">
                        <Link href="/">Home</Link>
                        <Link href="./shop">Shop</Link>
                        <Link href="./about">About us</Link>
                        <Link href="./blog">Blog</Link>
                    </div>
                    <div className="menu-icons flex gap-x-10 p-6 mr-8 h-[70px]">
                        <img src="search-normal.png" alt="search" className="filter grayscale brightness-50"/>
                        <img src="bag-2.png" alt="bag" className="filter grayscale "/>
                        <img src="menu.png" alt="menu" className="filter grayscale brightness-50"/>
                    </div>
                </div>

                <div>
                    <p className="text-gray-600 mx-14 my-7">shop/ blog</p>
                </div>
            </div>

            <main className="flex pl-14">
                <div className="left-side">
                    <div className="sofa-1 space-y-5">
                        <img src="Rectangle 47.png" alt="sofa" className="py-3" />
                        <div className="flex items-center space-x-4 text-gray-400">
                            <p>October 22, 2024</p>
                            <span className="border-l border-gray-400 h-5 mx-4"></span> {/* Vertical Line */}
                            <p>Newest, sofa and modern chair</p>
                            <span className="border-l border-gray-400 h-5 mx-4"></span> {/* Vertical Line */}
                            <p>by areeba aijaz</p>
                            <span className="border-l border-gray-400 h-5 mx-4"></span> {/* Vertical Line */}
                            <div className="flex items-center space-x-2">
                                <img src="heart.png" alt="heart icon" className="w-4 h-4" />
                                <p>5</p>
                            </div>
                            <span className="border-l border-gray-400 h-5 mx-4"></span> {/* Vertical Line */}
                            <div className="flex items-center space-x-2">
                                <img src="message.png" alt="message icon" className="w-4 h-4" />
                                <p>3</p>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold">New modern sofa is here</h1>
                        <p className="text-gray-400 pr-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt esse incidunt et ullam non? Vel minus animi corrupti excepturi, ut quod officia nobis voluptatibus provident officiis necessitatibus adipisci nam.</p>
                        <button className="text-gray-800 underline">Read more</button>
                    </div>

                    <div className="sofa-2 space-y-5 my-5">
                        <img src="Rectangle 56.png" alt="sofa" className="py-3" />
                        <div className="flex items-center space-x-4 text-gray-400">
                            <p>October 22, 2024</p>
                            <span className="border-l border-gray-400 h-5 mx-4"></span> {/* Vertical Line */}
                            <p>Newest, sofa and modern chair</p>
                            <span className="border-l border-gray-400 h-5 mx-4"></span> {/* Vertical Line */}
                            <p>by areeba aijaz</p>
                            <span className="border-l border-gray-400 h-5 mx-4"></span> {/* Vertical Line */}
                            <div className="flex items-center space-x-2">
                                <img src="heart.png" alt="heart icon" className="w-4 h-4" />
                                <p>5</p>
                            </div>
                            <span className="border-l border-gray-400 h-5 mx-4"></span> {/* Vertical Line */}
                            <div className="flex items-center space-x-2">
                                <img src="message.png" alt="message icon" className="w-4 h-4" />
                                <p>3</p>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold">New modern sofa is here</h1>
                        <p className="text-gray-400 pr-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt esse incidunt et ullam non? Vel minus animi corrupti excepturi, ut quod officia nobis voluptatibus provident officiis necessitatibus adipisci nam.</p>
                        <button className="text-gray-800 underline">Read more</button>
                    </div>

                    <div className="sofa-3 space-y-5 my-5">
                        <img src="Rectangle 57.png" alt="sofa" className="py-3" />
                        <div className="flex items-center space-x-4 text-gray-400">
                            <p>October 22, 2024</p>
                            <span className="border-l border-gray-400 h-5 mx-4"></span> {/* Vertical Line */}
                            <p>Newest, sofa and modern chair</p>
                            <span className="border-l border-gray-400 h-5 mx-4"></span> {/* Vertical Line */}
                            <p>by areeba aijaz</p>
                            <span className="border-l border-gray-400 h-5 mx-4"></span> {/* Vertical Line */}
                            <div className="flex items-center space-x-2">
                                <img src="heart.png" alt="heart icon" className="w-4 h-4" />
                                <p>5</p>
                            </div>
                            <span className="border-l border-gray-400 h-5 mx-4"></span> {/* Vertical Line */}
                            <div className="flex items-center space-x-2">
                                <img src="message.png" alt="message icon" className="w-4 h-4" />
                                <p>3</p>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold">New modern sofa is here</h1>
                        <p className="text-gray-400 pr-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt esse incidunt et ullam non? Vel minus animi corrupti excepturi, ut quod officia nobis voluptatibus provident officiis necessitatibus adipisci nam.</p>
                        <button className="text-gray-800 underline">Read more</button>
                    </div>

                </div>

                <div className="right-side space-y-12 flex-col justify-center items-center mr-10">
                    <div className="space-y-7 mb-8">
                        <div className="search-btn relative flex justify-between items-center pt-12 pb-6 mt-[-34px]">
                            <input
                                className="border border-gray-400 w-72 px-6 p-3 pl-2"
                                type="text"
                                placeholder="Search.."
                            />
                            <img
                                className="absolute right-4 filter grayscale brightness-50"
                                src="search-normal.png"
                            />
                        </div>
                        <div></div>
                        <h1 className="text-2xl font-bold">Blog Posts</h1>
                        <img src="Rectangle 48.png" />
                        <p className="text-gray-400">Stay tuned to read our latest blogs on<br/> best furniture which will help you in<br/> decorating your home and office for having your desired zone. </p>         
                    
                      <h1 className="text-xl font-bold pt-6">Category</h1>
                        <ul className="text-gray-500 space-y-6">
                            <li>Ceiling (25)</li>
                            <li>Floor (25)</li>
                            <li>Led (25)</li>
                            <li>Modern (25)</li>
                            <li>Retro (25)</li>
                            <li>Wood (25)</li>
                        </ul>
                    </div>

                    <div className="space-y-7">
                        <h1 className="text-xl font-bold">Recent  Posts</h1>
                        <ul className="text-gray-500 space-y-6">
                            <li>Best modern sofas</li>
                            <li>How to maintain your home (25)</li>
                            <li>Take care of soudemy sofa (25)</li>
                            <li>Decent colors of sofa (25)</li>
                        </ul>
                        <br />
                        <div />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">Tags</h1>
                   <span className="flex gap-x-4 text-gray-400 underline"><Link href="/">sofa</Link>
                        <Link href="/">clean</Link></span>
                    </div>
                </div>
            </main>
            <Pagination />
            <Footer />

        </section>
    )
}
