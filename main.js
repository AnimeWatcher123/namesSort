const cards = document.getElementById('names');
const inames = document.getElementById('inames');

// Gets user input
let names = prompt("Enter names with space separated: ");
names = names.split(" ");  // this will turn input into an array which you can iterate over

for (let i = 0; i < names.length; i++) {
    const e = document.createElement('div');
    e.classList.add('card');
    e.innerText = names[i] + "\nIndex: "+ i.toString();
    inames.appendChild(e);
}

let sortedNames = names.sort(); // stores the sorted names array
console.log(sortedNames);


for (let i = 0; i < sortedNames.length; i++) {
    const e = document.createElement('div');
    e.classList.add('card');
    e.innerText = sortedNames[i] + "\nIndex: "+ i.toString();
    cards.appendChild(e);
}