

fetch('js/journal.json')
    .then(function(data) { return data.json()})
    .then(function(data) { 
        journals = data;

        journals.forEach(function (journal) {
        document.querySelector('.journalHome__secondary').innerHTML += 
            `
            <li>
                <img src="${journal.image}" class= "journalHome__secondary--img" alt="journal image">
                <p class="journalHome__secondary--footer">${journal.footer}</p>
                <h3 class="journalHome__secondary--title">${journal.h3}</h3>
                <p class="journalHome__secondary--text">${journal.text}</p>
                <a href="">Read more...</a>
                
            </li>
            `;
        }
    )})


