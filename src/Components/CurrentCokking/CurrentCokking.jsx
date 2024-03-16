
const CurrentCokking = () => {
    return (
        <div>
            <table className="table">
                <thead className="font-bold text-black">
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>

                    </tr>
                </thead>
                <tbody id="seatTableBody">
                    <tr>
                        <td></td>
                        <td>Total Time = </td>
                        <td>Total Calories = </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default CurrentCokking;