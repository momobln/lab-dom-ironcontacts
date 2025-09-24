/* HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...


  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...*/



// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// Helpers
function wireRowEvents(tr) {
  // Delete
  const delBtn = tr.querySelector(".btn-delete");
  if (delBtn) delBtn.addEventListener("click", () => tr.remove());

  // Like: btn-like  selected
  const likeBtn = tr.querySelector(".btn-like");
  if (likeBtn) likeBtn.addEventListener("click", () => likeBtn.classList.toggle("selected"));
}

function buildRow(contact) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><img src="${contact.pictureUrl}" /></td>
    <td>${contact.name}</td>
    <td>${Number(contact.popularity).toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
  `;
  wireRowEvents(tr);
  return tr;
}

// ===== ITERATION 0 | Example Row 
const randomIndex = Math.floor(Math.random() * contacts.length);
const randomContact = contacts.splice(randomIndex, 1)[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td><img src="${randomContact.pictureUrl}" /></td>
  <td>${randomContact.name}</td>
  <td>${randomContact.popularity.toFixed(2)}</td>
  <td><button class="btn-delete">Delete</button></td>
  <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
`;
tableBody.appendChild(exampleRow);
wireRowEvents(exampleRow);

// ===== ITERATION 1 | Display first 3 contacts using splice =====
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach(c => tableBody.appendChild(buildRow(c)));

// ===== ITERATION 2 & 3 wireRowEvents =====

// ===== BONUS: ITERATION 4 | Add Random Contact =====
if (buttonAddRandom) {
  buttonAddRandom.addEventListener("click", () => {
    if (!cntacts.length) return; // 
    const idx = Math.floor(Math.random() * contacts.length);
    const contact = contacts.splice(idx, 1)[0];
    tableBody.appendChild(buildRow(contact));
  });
}
