
import './iteam.css'

const Iteam = ({ iteam, handleSetWantCook }) => {
    // console.log(iteam);
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = iteam;
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full' src={recipe_image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <hr />
                    <h3>Ingredients: {ingredients.length}</h3>
                    {
                        ingredients.map((ingre, index) => (
                            <li key={`${iteam.recipe_id}_${index}`}>{ingre}</li>
                        ))
                    }
                    <hr />
                    <div className='flex gap-5'>
                        <p>{preparing_time}</p>
                        <p>{calories}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => {
                            // console.log(index);
                            // setWantCook(!index)
                            handleSetWantCook(iteam)
                        }}>Cook</button>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Iteam;