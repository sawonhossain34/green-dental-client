import parts from '../../../assets/image/about/parts.jpg';
import person from '../../../assets/image/about/person1.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white " />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h1 className="text-center text-2xl text-yellow-500 font-bold">About Us</h1>
                    <h2 className='text-5xl font-bold'>Global Care Hospital is uniquely located on the central hub.</h2>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;