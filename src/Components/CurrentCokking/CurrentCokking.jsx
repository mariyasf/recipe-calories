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
        <div>
            <h1 className="font-bold">Current Cokking: {currentCokking.length}</h1>
            <table className="table">
                <thead className="font-bold text-black">
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>

                    </tr>
                </thead>
                <tbody id="seatTableBody">
                    {
                        currentCokking.map(recipe => (
                            // const time=time+totalT
                            < tr key={recipe.recipe_id} >
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time}</td>
                                <td>{recipe.calories}</td>
                            </tr>
                        ))
                    }
                    <tr className="font-bold">
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