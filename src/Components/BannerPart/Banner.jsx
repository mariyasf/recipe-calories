import './Banner.css'

const Banner = () => {
    return (
        <div>

            <section
                className="bg-banner  mt-10 py-20 mx-auto">
                <div className="space-y-10 mx-4 lg:mx-10 lg:ml-16 ">
                    <h1
                        className="mx-auto text-white font-bold text-4xl lg:text-6xl lg:w-[850px]">
                        Discover an exceptional cooking class tailored for you!
                    </h1>
                    <p className="text-white mx-auto lg:px-12 text-center">
                        Embark on a culinary adventure with a personalized cooking class experience designed just for you. Uncover unique recipes, refine your skills, and indulge in the joy of creating delicious dishes in a setting crafted to meet your preferences and interests.
                    </p>

                    <div className='flex gap-2 justify-center'>
                        <button className="btn btn-success lg:w-[150px]">Explore Now</button>
                        <button className="btn btn-success text-white btn-outline lg:w-[150px]">Our Feedback</button>

                    </div>
                </div>

            </section>
        </div>
    );
};

export default Banner;