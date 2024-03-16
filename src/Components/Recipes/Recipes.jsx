import { useEffect, useState } from "react";
// import Iteams from "../Iteams/Iteams";

import Wantcook from "../Wantcook/Wantcook";
import Iteam from "../Iteam/Iteam";
import './iteams.css'

const Recipes = () => {
    const [iteams, setIteams] = useState([]);
    const [wantCook, setWantCook] = useState([]);

    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data => setIteams(data))
        // .then(console.log(iteams));
    }, []);

    const handleSetWantCook = (cookIteam) => {
        // console.log(cookIteam);
        const newCook = [...wantCook, cookIteam];
        setWantCook(newCook);
    }

    // console.log(iteams);
    return (
        <div>
            <section className="space-y-5 text-center mt-16">
                <h1 className="text-5xl font-bold">Our Recipes</h1>
                <p className="w-[900px] mx-auto">
                    Dive into our curated collection of tantalizing dishes, thoughtfully crafted to cater to diverse tastes and dietary preferences.
                    From quick and easy weeknight meals to impressive gourmet creations, each recipe is meticulously developed and accompanied by clear instructions and vibrant imagery, ensuring a seamless cooking experience for both novice and seasoned chefs alike.
                </p>
            </section>

            <div className="flex gap-2 mt-10">
                <div className="flex-1">
                    <div className="iteam-container">
                        {
                            iteams.map(iteam =>
                                <Iteam
                                    key={iteam.recipe_id}
                                    iteam={iteam}
                                    handleSetWantCook={handleSetWantCook} />)



                        }
                        {/* {console.log(iteams)} */}
                    </div >
                    {/* <Iteams iteams={iteams} setWantCook={setWantCook} /> */}
                    {/* {console.log(iteams)} */}
                </div>


                <div className="flex-1">
                    <h2>wantCook: {wantCook.length}</h2>
                    <Wantcook wantCook={wantCook}></Wantcook>
                </div>
            </div>
        </div>
    );
};

export default Recipes;