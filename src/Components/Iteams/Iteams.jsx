import { useEffect, useState } from "react";
import Iteam from "../Iteam/Iteam";
import './iteams.css'

const Iteams = ({ iteams, setWantCook }) => {


    return (
        <div className="iteam-container">
            {
                iteams.map((iteam, index) => {
                    return (<Iteam
                        key={Date.now()}
                        iteam={iteam}
                        setWantCook={setWantCook}
                        index={index}
                    />)

                })

            }
            {console.log(iteams)}
        </div >
    );
};

export default Iteams;