import { useEffect, useState } from "react";
// import Iteams from "../Iteams/Iteams";

import Wantcook from "../Wantcook/Wantcook";
import Iteam from "../Iteam/Iteam";
import './iteams.css'
import CurrentCokking from "../CurrentCokking/CurrentCokking";

const Recipes = () => {
    const [iteams, setIteams] = useState([]);
    const [wantCook, setWantCook] = useState([]);
    const [currentCokking, setCurrentCokking] = useState([]);

    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data => setIteams(data))
        // .then(console.log(iteams));
    }, []);

    const handleSetWantCook = (cookIteam) => {
        // console.log('Remove: ', cookIteam, iteamID);
        const newCook = [...wantCook, { ...cookIteam, id: Date.now() }];
        setWantCook(newCook);
    }

    const handlePrepareButton = (iteamID) => {
        console.log('remove', iteamID);
        const remainingRecipies = wantCook.filter(cookIteam => cookIteam.id != iteamID);

        const recipe = wantCook.find(cookIteam => cookIteam.id === iteamID);
        // console.log(recipe);
        const preparedRecipe = [...currentCokking, recipe]

        setWantCook(remainingRecipies)
        setCurrentCokking(preparedRecipe);
    }

    // console.log(iteams);
    return (
        <div className="container mx-auto">
            <section className="space-y-5 text-center mt-16">
                <h1 className="text-5xl font-bold">Our Recipes</h1>
                <p className="lg:w-[900px] mx-auto">
                    Dive into our curated collection of tantalizing dishes, thoughtfully crafted to cater to diverse tastes and dietary preferences.
                    From quick and easy weeknight meals to impressive gourmet creations, each recipe is meticulously developed and accompanied by clear instructions and vibrant imagery, ensuring a seamless cooking experience for both novice and seasoned chefs alike.
                </p>
            </section>

            <div className="lg:flex gap-10 mt-10">
                <div className="">
                    <div className="iteam-container grid grid-cols-2 gap-4">
                        {
                            iteams.map((iteam, index) =>
                                <Iteam
                                    key={index}
                                    iteam={iteam}
                                    handleSetWantCook={handleSetWantCook} />)
                        }
                    </div >
                </div>


                <div className="mt-10 lg:mt-0">
                    <h1 className="font-bold">Want to cook: {wantCook.length}</h1>
                    <Wantcook
                        handlePrepareButton={handlePrepareButton}
                        wantCook={wantCook}></Wantcook>


                    <br />
                    <br />
                    <br />
                    <CurrentCokking currentCokking={currentCokking}></CurrentCokking>
                </div>
            </div>
        </div >
    );
};

export default Recipes;