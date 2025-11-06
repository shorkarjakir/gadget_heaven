
const Hero = () => {
    return (
        <div className="bg-[#9538E2] h-[540px] lg:h-[600px] rounded-b-2xl">
            <div className="hero">
                <div className="hero-content mt-0 text-center">
                    <div className="max-w-md">
                        <h1 className="text-[190%] md:text-4xl lg:text-5xl leading-14 text-white font-bold">Upghrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                        <p className="py-5 text-[80%] md:text-[100%] text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                        </p>
                        <a href="#product-list-container"><button className="btn bg-white font-bold text-base rounded-full p-6 text-[#9538E2]">Shop Now</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;