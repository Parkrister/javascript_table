let obj = [
        {Name: "Cat", Color: "Black", Weight: 6},
        {Name: "Dog", Color: "White", Weight: 13},
        {Name: "Fish", Color: "Blue", Weight: 0.2},
];

function buildTable(data) {
	let str = `<tr>`;

	for (let name of Object.keys(data[0])){
		str += `<th>${name}</th>`;
	}
	str += `</tr>`;

	for (let row of data) {
		str += `<tr>`;
		for (let val of Object.values(row))
			str += `<td>${val}</td>`;

		str += `</tr>`;
	}
	let table = document.createElement("table");
	table.innerHTML = str;
	
	return table;
}

document.body.append(buildTable(obj))