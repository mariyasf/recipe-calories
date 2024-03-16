import { useEffect, useState } from "react";

const CurrentCokking = ({ currentCokking }) => {
    const [totalTime, setTotalTime] = useState(0);
    useEffect(() => {
        let time = 0;
        currentCokking.forEach(recipe => {
            time += parseInt(recipe.preparing_time);
        });
        setTotalTime(time);
    }, [currentCokking])

    const [totalCalories, settotalCalories] = useState(0);
    useEffect(() => {
        let calories = 0;
        currentCokking.forEach(recipe => {
            calories += parseInt(recipe.calories);
        });
        settotalCalories(calories);
    }, [currentCokking])


    return (
        <div className="">
            <h1 className="font-bold">Current Cokking: {currentCokking.length}</h1>
            <table className="mt-4 table overflow-x-auto bg-base-300">
                <thead className="font-bold text-black">
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>

                    </tr>
                </thead>
                <tbody id="seatTableBody">
                    {
                        currentCokking.map((recipe, index) => (

                            < tr key={index} >
                                <td>{index + 1}</td>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time}</td>
                                <td>{recipe.calories}</td>
                            </tr>
                        ))
                    }
                    <tr className="font-bold">
                        <td></td>
                        <td></td>
                        <td>Total Time = {totalTime}</td>
                        <td>Total Calories = {totalCalories}</td>
                    </tr>
                </tbody>

            </table>
        </div >
    );
};

export default CurrentCokking;