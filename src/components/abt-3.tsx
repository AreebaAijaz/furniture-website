export default function About3(){
    return(
        <section>
            <div>
                <img src="Rectangle 48 (1).png" alt="decorative home" 
                className="p-14"
                />
            </div>

            <main>
                <div className="container my-10 flex justify-between">
                    <div className="left-side mx-32 space-y-5 ">
                        <h1 className="text-4xl font-bold">Functionality <br/>meets perfection</h1>
                        <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Reprehenderit eveniet placeat, optio neque similique dignissimos<br/> eius harum exercitationem, fugiat deserunt quas? Nobis cupiditate<br/> numquam et tempora amet? Itaque.</p>
                    </div> 
                    <div className="right-side  space-y-7">
                        <div className="space-y-4">
                            <div className="flex justify-between text-xl font-bold">
                                <p>Creativity</p>
                                <p>72%</p>
                            </div>
                            <div className="w-[500px] bg-gray-200 h-1 rounded-lg">   
                                <div className="bg-gray-800 h-1 rounded-lg" style={{width:'72%'}}></div>    
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between text-xl font-bold">
                                <p>Advertising</p>
                                <p>84%</p>
                            </div>
                            <div className="w-[500px] bg-gray-200 h-1 rounded-lg">   
                                <div className="bg-gray-800 h-1 rounded-lg" style={{width:'84%'}}></div>    
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between text-xl font-bold">
                                <p>Design</p>
                                <p>72%</p>
                            </div>
                            <div className="w-[500px] bg-gray-200 h-1 rounded-lg">   
                                <div className="bg-gray-800 h-1 rounded-lg" style={{width:'72%'}}></div>    
                            </div>
                        </div>

                    </div>                                       
                </div>
            </main>
        </section>
    )
}