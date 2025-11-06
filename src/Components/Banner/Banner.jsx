import BannerIMG from "../../assets/banner.jpg";


const Banner = () => {
    return (
        <div className="relative h-[50px] w-[85%]">
            <div className="absolute z-10 h-[700%] w-[65%] -top-32 left-[20%] md:w-[70%] md:left-[18%] lg:-top-44 lg:left-[7%] lg:h-[970%] lg:w-[92%]">
                <figure>
                    <img className="absolute h-full w-full md:h-[450px] md:w-full lg:h-full lg:w-full rounded-2xl" src={BannerIMG} alt="" />
                </figure>
            </div>
            <div className="absolute rounded-t-2xl border-2 border-white left-[16%] -top-36 h-[360%] w-[73%] md:w-[77%] md:left-[14%] lg:left-[5%] lg:-top-48 bg-purple-400 lg:h-[242px] lg:w-[96%]">
                <div className="z-10">

                </div>
            </div>
        </div>
    );
};

export default Banner;