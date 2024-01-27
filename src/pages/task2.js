 
import React, { useState } from "react";
 
const Greater = () => {
    const [number, setNumber] = useState(0);
    const [previousValue, setPreviousValue] =
        useState(null);
 
    return (
        <div
            style={{
                textAlign: "center",
                alignItems: "center",
                margin: "auto",
            }}
        >
            
            <h3>
                React Example to excess previous state in
                Funtional components
            </h3>
            <h4>number: {number}</h4>
            <h4>previous number: {previousValue}</h4>
            <button
                onClick={() =>
                    setNumber((previous) => {
                        setPreviousValue(previous);
                        return previous + 1;
                    })
                }
            >
                increment
            </button>

            <hr></hr>
        </div>
    );
};
 
export default Greater;