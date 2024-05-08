//your JS code here. If required.
let outputTable = document.getElementById("output")
outputTable.innerHTML = "<b>Loading...</b>"

const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise1 resolved")
        }, 3000)
    })
}

const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise2 resolved")
        }, 1000)
    })
}

const promise3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise3 resolved")
        }, 2000)
    })
}

const resolveAll = () => {
    Promise.all([promise1(), promise2(), promise3()]).then((result) => {
        outputTable.innerHTML = ""
        result.map((promis, index) => {
            outputTable.innerHTML += `
            <tr><td>${promis}</td><td>${index + 1} sec</td></tr>
            `
        })
    })
}

resolveAll()