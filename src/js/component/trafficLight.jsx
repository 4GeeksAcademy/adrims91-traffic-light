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
	const [inputValue, setInputValue] = useState("")
	const handleColorClick = (color) => {
		setSelectedColor(color)
	}

	
	
	const addColors = (name, className) => {
		const existentColor = color.find(item => item.name === name)
		if (!existentColor) setColor([...color, {name, class: className}])
	}



	const deleteItem = () => {
		if (inputValue.trim() === "") return;
		const newArr = color.filter((e) => e.name !== inputValue.toLowerCase())
		setColor(newArr)
		setInputValue("")
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
		<button className="btn btn-primary mt-5" onClick={() => addColors('purple', 'purple-button')}>
			Add Purple color
		</button>
		</div>
		<div className="d-flex flex-column align-items-center mt-5">
			<input className="mb-3" style={{width: '120px'}} type="text"
			value={inputValue}
			onChange={(e) => setInputValue(e.target.value)}
			/>
			<button className="btn btn-danger" onClick={deleteItem}>Delete Color</button>
			
		</div>
		</>
	);
};


export default TrafficLight;
