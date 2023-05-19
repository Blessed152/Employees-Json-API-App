const form = document.querySelector('.table-data')

function getProfiles(Romini, Neil, Tom){
	const formInput  = document.querySelector('#name');
	formInput.addEventListener('input', e => {
	e.preventDefault()
	const searchName = e.target.value;
let employeeData
	if(searchName === 'Romini'){
		Found()
		employeeData = createTable(Romini)
		document.querySelector('table').innerHTML = employeeData;
		
	} else if(searchName === 'Neil'){
		Found()
		employeeData = createTable(Neil)
		document.querySelector('table').innerHTML = employeeData;
		
	}else if(searchName === 'Tom'){
		Found()
		employeeData = createTable(Tom)
		document.querySelector('table').innerHTML = employeeData;
		
	} else if(searchName === ''){
		hideForm = document.querySelector('#data > table > tbody')
		notFound(hideForm)
	}
	});
	

}


function createTable(searchName){/*Create the table based on search input*/
	return`<tr class = "table-rows">
		<td>User Id</td>
		<td>${searchName.userId}</td>
	</tr>
	<tr class = "table-rows">
		<td>Job Title</td>
		<td>${searchName.jobTitleName}</td>
	</tr>
	<tr class = "table-rows">
		<td>First Name</td>
		<td>${searchName.firstName}</td>
	</tr>
	<tr class = "table-rows">
		<td>Last Name</td>
		<td>${searchName.lastName}</td>
	</tr>
	<tr class = "table-rows">
		<td>Preferred Full Name</td>
		<td>${searchName.preferredFullName}</td>
	</tr>
	<tr class = "table-rows">
		<td>Employee Code</td>
		<td>${searchName.employeeCode}</td>
	</tr>
	<tr class = "table-rows">
		<td>Region</td>
		<td>${searchName.region}</td>
	</tr>
	<tr class = "table-rows">
		<td>Phone Number</td>
		<td>${searchName.phoneNumber}</td>
	</tr>
	<tr class = "table-rows">
		<td>Email</td>
		<td>${searchName.emailAddress}</td>
	</tr>`;
}


function notFound(hideForm ){
let text = `<p id = "notification"> Sorry the name you entered does not exists on our system. <span>Try Romini, Neil, or Tom</span>`
document.querySelector('#message').innerHTML = text;

setTimeout(function (){
	document.querySelector('#message').innerHTML = '';
},2000)
}

function Found(){
	text = `<p id = "notification"> Retrieved employee history</p>`
	document.querySelector('#message').innerHTML = text;

}