
const Wantcook = ({ wantCook }) => {
    console.log(wantCook);
    const [recipe_name, preparing_time, calories] = wantCook
    // console.log(recipe_name, preparing_time, calories);
    return (
        <div>
            <h1>Want to cook:</h1>
            <table className="table">
                <thead>
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
                            <td><button className="btn btn-success">Preparing</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Wantcook;