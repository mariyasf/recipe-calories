
const Wantcook = ({ wantCook, handlePrepareButton }) => {
    console.log(wantCook);

    return (
        <div>

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
                    {wantCook.map(recipe => (
                        <tr key={recipe.recipe_id}>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time}</td>
                            <td>{recipe.calories}</td>
                            <td><button onClick={() => handlePrepareButton(recipe.recipe_id)} className="btn btn-success">Preparing</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Wantcook;