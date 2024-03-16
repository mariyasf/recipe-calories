
const Wantcook = ({ wantCook, handlePrepareButton }) => {
    console.log(wantCook);

    return (
        <div className=" border-[#c1c0c0] border-2">

            <table className="table">
                <thead className="font-bold text-black">
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="seatTableBody">
                    {wantCook.map((recipe, index) => (
                        <tr key={index}>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time}</td>
                            <td>{recipe.calories}</td>
                            <td><button onClick={() => handlePrepareButton(recipe.id)} className="btn btn-success">Preparing</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Wantcook;