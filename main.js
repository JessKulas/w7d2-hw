fetch('./employees.json')
    .then((res) => res.json())
    .then((data) => {
        displayPeople(data.employees)
    })

let peopleEl = document.getElementById('people')

function displayPeople(data) {
    let peopleHTML = ''

    console.log(data)
    console.log(data[2])

    displayFeaturedPerson(data[2])

        for (let person of data) {
            peopleHTML += `
            <div class="card mb-2">
                <div class="card-body">
                    <h2 class="card-text">${person.name}</h2>
                    <p class="card-text">${person.jobTitle}</p>
                </div>
            </div>
            `
        }

        peopleEl.innerHTML = peopleHTML

        let peopleEls = document.querySelectorAll('#people .card')

        for (let i = 0; i < peopleEls.length; i++) {
            peopleEls[i].addEventListener('click', (event) => {
                let personInfo = data[i]
                displayFeaturedPerson(personInfo)
            })
        }
}

function displayFeaturedPerson(person) {
    let featuredPersonEl = document.getElementById('featured-person')

    let skillsHTML = ''

    for (let skill in person.skills) {
        skillsHTML += `
        <li>${skill}: ${person.skills[skill]}</li>
        `
    }

    let personHTML = `
    <h2>${person.name}</h2>
    <p>Title: ${person.title}</p>
    <h3>Skills:</h3>
    <ul>
        ${skillsHTML}
    <ul>
    `
    featuredPersonEl.innerHTML = personHTML
}
// Index into object in JS
// 1) Kind of like Python dictionaries: myObject[myKey]
// 2) Kind of like Python objects: my_object.my_property
// in JS: myObject.myKey