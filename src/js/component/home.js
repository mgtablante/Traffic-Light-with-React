import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
    //const [color, setColor] = useState("red");
    const[btnClass, setBtnClass] = useState(""),
    const[btnClassYellow, setBtnClassYellow] = useState(""),
    const[btnClassGreen, setBtnClassGreen] = useState(""),

    //Red
    const handleClick = () => [
        setBtnClass("selected");
        setBtnClassYellow("");
        setBtnClassGreen("");
    ];
    //Yellow
       const handleClickYellow = () => [
        setBtnClass("");
        setBtnClassYellow("selected");
        setBtnClassGreen("");
    ];
    //Green
       const handleClickGreen = () => [
        setBtnClass("");
        setBtnClassYellow("");
        setBtnClassGreen("selected");
    ];
	return (
		<div>
			<div className="traffic"></div>;<h1>Traffic Light with React</h1>
			<div className="container">
				<span
					className={`lightred ${btnClass}`}/>
                    onClick={handleClick}
                <br />
				<span
					className={`lightyellow ${btnClassYellow}`}/>
                    onClick={handleClickYellow}

				<br />
				<span
					className={`lightgreen ${btnClassGreen}`}/>
                    onClick={handleClickGreen}

			</div>
		</div>
	);
}
