
const Description = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center my-20 p-6 md:px-28" >
                <h1 className="text-3xl sm:text-4xl font-semibold mb-2 " >Generate AI Images</h1>
                <p className="text-gray-500 mb-8" >Turn Your imagination into Visuals</p>
                <div className=" md:flex  gap-4 " >
                    <img src="/images/demo.jpeg "  className="w-80 xl:w-96 rounded-lg " alt="error" />

                    <div className="" >
                        <h2 className="text-2xl" > Introducing the AI-powered Text to Image Generator</h2>
                        <p className="  mt-3 font-extralight text-xl" >
                            Our text-to-image generator turns your imagination into stunning visuals with just a few words. Whether you’re a creator, student, designer, or someone who loves experimenting, our AI makes artwork fast, unique, and effortless. </p>  
                            <p className="  mt-3 font-extralight text-xl"  >Describe a scene, a character, or a dream and watch it transform into beautiful images instantly. No skills needed — just creativity. Explore endless styles, unlimited ideas, and bring your stories to life with the power of AI.  </p> 
                    </div>
                </div>
            </div>
        </>
    )
};

export default Description;
