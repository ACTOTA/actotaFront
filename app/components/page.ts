'use client';
import { useEffect } from "react";
import Button from "./figma/Button";
import Field from "./figma/Field";
import Checkbox from "./figma/Checkbox";
import FavButton from "./figma/FavButton";


const Components = () => {


	useEffect(() => {
		console.log("Hello, World!");
	}, []);

	return (
		Checkbox({ children: "Checkbox" })
	)

}

export default Components;
