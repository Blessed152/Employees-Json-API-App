class GETDATA {
	ini (data){
		return new Promise ((resolve, reject) => {
			fetch(data)
			.then(res => resolve(res.json()))
			.catch(erro => reject(erro))
		})
	}
}

const employees = new GETDATA()
employees.ini('./json/text.json')
.then(profile => showContent(profile))

function showContent(profile){
for(let x in profile.Employees){
	//Profiles of people //
	const Romini = profile.Employees[0]
	const Neil = profile.Employees[1]
	const Tom = profile.Employees[2]
	getProfiles(Romini, Neil, Tom)
}};
