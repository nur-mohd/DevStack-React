import BannerLogo from '../assets/banner-stack.png'
const Banner = () => {
    return (
    <div className='flex justify-between items-center container mx-auto'>
        <div className='w-1/2 space-y-2'>
            <h1>
                <span className='text-[#0f172a] font-bold text-3xl'>Build Your Ideal</span><br/> 
                <span className='bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent font-bold text-4xl'>Development Stack</span>
            </h1>

            <p>
                Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className='flex gap-2'>
                <button className='bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-md p-2 cursor-pointer'>Explore Technologies</button>
                <button className='border border-gray-200 rounded-md p-1 cursor-pointer'>Learn More</button>
            </div>
        </div>
        <div>
            <img src={BannerLogo} alt="Banner-img" />
        </div>
    </div>
    );
};

export default Banner;