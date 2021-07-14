import React, { useState } from "react";

//create your first component
export function Home() {
	const [btnClass, setBtnClass] = useState("");
	const [btnClassYellow, setBtnClassYellow] = useState("");
	const [btnClassGreen, setBtnClassGreen] = useState("");

	//Red
	const handleClick = () => {
		setBtnClass("selected"), setBtnClassYellow(""), setBtnClassGreen("");
	};
	//Yellow
	const handleClickYellow = () => {
		setBtnClass(""), setBtnClassYellow("selected"), setBtnClassGreen("");
	};
	//Green
	const handleClickGreen = () => {
		setBtnClass(""), setBtnClassYellow(""), setBtnClassGreen("selected");
	};
	return (
		<div className="traffic">
			<h1>Traffic light with React</h1>
			<div className="container">
				<button
					className={`lightred ${btnClass}`}
					onClick={() => {
						handleClick();
					}}
				/>
				<br />
				<button
					className={`lightyellow ${btnClassYellow}`}
					onClick={() => {
						handleClickYellow();
					}}
				/>
				<br />
				<button
					className={`lightgreen ${btnClassGreen}`}
					onClick={() => {
						handleClickGreen();
					}}
				/>
			</div>
		</div>
	);
}
