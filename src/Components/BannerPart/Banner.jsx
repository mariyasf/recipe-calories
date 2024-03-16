import './Banner.css'

const Banner = () => {
    return (
        <div>

            <section
                className="bg-banner  mt-10 py-20 mx-auto">
                <div className="space-y-10 mx-10 ml-16 ">
                    <h1
                        className="text-white font-bold text-6xl">
                        Discover an exceptional cooking class tailored for you!
                    </h1>
                    <p className="text-white mx-auto px-12 text-center">
                        Embark on a culinary adventure with a personalized cooking class experience designed just for you. Uncover unique recipes, refine your skills, and indulge in the joy of creating delicious dishes in a setting crafted to meet your preferences and interests.
                    </p>

                    <div className='flex gap-2 justify-center'>
                        <button className="btn btn-success w-[150px]">Search</button>
                        <button className="btn btn-success btn-outline w-[150px]">Search</button>

                    </div>
                </div>

            </section>
        </div>
    );
};

export default Banner;