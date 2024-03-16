import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import './iteam.css'

const Iteam = ({ iteam, handleSetWantCook }) => {
    // console.log(iteam);
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = iteam;
    return (
        <div >
            <div className="card lg:w-96 bg-base-100 shadow-xl text-left border-[#c1c0c0] border-2">
                <figure><img className='w-full h-[200px]' src={recipe_image} alt="" /></figure>

                <div>
                    <h2 className="pt-4 card-title">{recipe_name}</h2>
                    <p className='py-4 border-b-2 border-black'>{short_description}</p>

                    <h3 className='py-4 font-bold'>Ingredients: {ingredients.length}</h3>
                    <div className='pl-4 pb-4 border-b-2 border-black'>
                        {
                            ingredients.map((ingre, index) => (
                                <li key={`${iteam.recipe_id}_${index}`}>{ingre}</li>
                            ))
                        }
                    </div>
                    <div className='flex gap-5 py-4 justify-between'>
                        <div className="flex gap-2">
                            <MdOutlineWatchLater />
                            <p>{preparing_time}</p>
                        </div>
                        <div className="flex gap-2">
                            <MdOutlineLocalFireDepartment />
                            <p>{calories}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-success" onClick={() => {
                            handleSetWantCook(iteam)
                        }}>Want to Cook</button>

                    </div>
                </div>
            </div>


        </div >
    );
};

export default Iteam;