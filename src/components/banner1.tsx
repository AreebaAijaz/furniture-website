import react from 'react'

const bgStyle = {
    backgroundImage: "url('./banner.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
};


export default function Banner1(){
    return(
       <section className="my-10">
       <div
        style={bgStyle}
        className="h-72 w-full flex flex-col justify-center items-end pt-6"
      >
        <p className='text-white w-1/3 mr-20'>Lorem ipsum, dolor sit amet consectetur  elit. Itaqu tempor dolorum, iure tempore! Aperiam nihil necessitatibus magnam placeat nostrum id voluptas. Suscipit debitis in soluta rerum?</p><br/>
        <button className=' text-white px-10 py-3 border border-white mr-60 -mt-3'>View More</button>
      </div>
       </section>
    )
}