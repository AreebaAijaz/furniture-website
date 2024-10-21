const menuItems=[
    {
        image:"pot.png",
        title:"Pot",
        link:"/",
        price:"$28.99",
        id:1
    },
    {
        image:"lamp.png",
        title:"Lamp",
        link:"/",
        price:"$39.99",
        id:2
    },
    {
        image:"chair.png",
        title:"Chair",
        link:"/",
        price:"$69.99",
        id:1
    }
]

export default function MenuDemo(){
    return(
        <div className="space-y-4">
        <div className=" text-center">
            <h1 className="text-3xl font-bold uppercase pt-10 text-gray-800">Products of the week</h1>
            <p className="w-1/3 mx-auto mb-10 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. iste quae! Autoc iusto ea possimus commodi placeat, alias veritatis voluptatum repudiandae. Quaerat, nihil.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {menuItems.map((menu, index)=>(
        <div
            key={menu.id}
            className={`text-center ${index===0? 'ml-8' : ''} ${index===2? 'mr-8' : ''}`} 
        >
                <img src={menu.image} alt="menu" 
                 className="w-full max-w-[405x] h-auto mb-4"></img>
                <p className="font-bold">{menu.title} </p>
                <p className="text-gray-500">{menu.price}</p>
        </div>
            ))}
        </div>
        </div>

    )
}
