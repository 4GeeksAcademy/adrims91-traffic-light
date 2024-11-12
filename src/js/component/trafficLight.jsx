import React, { useState } from "react";


//include images into your bundle


//create your first component
const TrafficLight = () => {

	const [color, setColor] = useState([
		{name: 'red', class: 'bg-danger'},
		{name: 'yellow', class: 'bg-warning'},
		{name: 'green', class: 'bg-success'}
	]);

	const [selectedColor, setSelectedColor] = useState(null)
	
	const handleColorClick = (color) => {
		setSelectedColor(color)
	}

	const addColors = (name, className) => {
			setColor([...color, {name, class: className}])	
	}

	return (
		<>
		<div className="d-flex flex-column align-items-center">
			<div style={{height: '100px', width: '20px'}} className="d-flex flex-column align-items-center bg-dark mt-2">
			</div>
			<div className="d-flex flex-column align-items-center bg-dark border p-1">
			{color.map((item,index) => (
				<button key={index}
				style={{height: '100px', width: '100px'}}
				className={`border rounded-5 m-1 ${item.class} ${selectedColor === item.name ? 'active' : ''}`}
				onClick={() => handleColorClick(item.name)}
				></button>
			))}
		</div>
		<button className="btn btn-primary mt-5" onClick={() => addColors('Purple', 'purple-button')}>
			Color Purple
		</button>
		</div>
		</>
	);
};


export default TrafficLight;
