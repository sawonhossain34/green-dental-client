import banner1 from '../../../assets/image/banner/image-banner-1.jpg';
import banner2 from '../../../assets/image/banner/image-banner-2.jpg';
import banner3 from '../../../assets/image/banner/image-banner-3.jpg';
import banner4 from '../../../assets/image/banner/image-banner-4.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white pl-12 space-y-7 w-1/2 '>
                        <h2 className='text-6xl font-bold'>Browse 3637 incredible Dental Banner</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad pariatur laborum dolorum nulla repellat.</p>
                        <button className="btn btn-active btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Lastest Project</button>
                    </div>
                </div>
                <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white pl-12 space-y-7 w-1/2 '>
                        <h2 className='text-6xl font-bold'>Browse 3637 incredible Dental Banner</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad pariatur laborum dolorum nulla repellat.</p>
                        <button className="btn btn-active btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Lastest Project</button>
                    </div>
                </div>
                <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white pl-12 space-y-7 w-1/2 '>
                        <h2 className='text-6xl font-bold'>Browse 3637 incredible Dental Banner</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad pariatur laborum dolorum nulla repellat.</p>
                        <button className="btn btn-active btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Lastest Project</button>
                    </div>
                </div>
                <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white pl-12 space-y-7 w-1/2 '>
                        <h2 className='text-6xl font-bold'>Browse 3637 incredible Dental Banner</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad pariatur laborum dolorum nulla repellat.</p>
                        <button className="btn btn-active btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Lastest Project</button>
                    </div>
                </div>
                <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;