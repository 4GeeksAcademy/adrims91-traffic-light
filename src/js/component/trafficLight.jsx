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
		if (selectedColor){
			setColor([...color, {name, class: className}])
			setSelectedColor(false)
		}
	}

	return (
		<>
		<div className="d-flex flex-column align-items-center">
			<div style={{height: '100px', width: '20px'}} className="d-flex flex-column align-items-center bg-dark mt-2">
			</div>
			<div className="d-flex flex-column align-items-center bg-dark border">
			{color.map((item) => (
				<button key={item.name}
				style={{height: '100px', width: '100px'}}
				className={`border rounded-5 ${item.class} ${selectedColor === item.name ? 'active' : ''}`}
				onClick={() => handleColorClick(item.name)}
				></button>
			))}
		</div>
		<button className="btn btn-primary mt-5" onClick={() => addColors('Purple', 'purple-button')}>
			New Color
		</button>
		</div>
		</>
	);
};


export default TrafficLight;

{/* <button 
style={{height: '5rem', width: '5rem'}} 
className={`border rounded-5 bg-danger ${color === "red" ? 'active' : ''}`}
onClick={() => handleColorClick('red')}>
</button>
<button 
style={{height: '5rem', width: '5rem'}} 
className={`border rounded-5 bg-warning ${color === 'orange' ? 'active' : ''}`}
onClick={() => handleColorClick('orange')}>

</button>
<button 
style={{height: '5rem', width: '5rem'}} 
className={`border rounded-5 bg-success ${color === 'green' ? 'active' : ''}`}
onClick={() => handleColorClick('green')}>

</button> */}