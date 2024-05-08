//your JS code here. If required.
const promise1 = () => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("promise1 resolved")
		},3000)
	})
}

const promise2 = () => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("promise2 resolved")
		},1000)
	})
}

const promise3 = () => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("promise3 resolved")
		},2000)
	})
}

Promise.all([promise1(),promise2(),promise3()]).then((result)=>{
	outputTable.innerHTML = `
    <tr><td>${results[0].name}</td><td>1 sec</td></tr>
    <tr><td>${results[1].name}</td><td>2 sec</td></tr>
    <tr><td>${results[2].name}</td><td>3 sec</td></tr>
  `;
})