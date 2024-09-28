// ========================= Завдання 1 ===========================

// const bodyColor = document.querySelector('#body-color');
// const inputBodyColorRed = document.querySelector('#red-body-color');
// const inputBodyColorWhite = document.querySelector('#white-body-color');
// const inputBodyColorGreen = document.querySelector('#green-body-color');

// inputBodyColorRed.addEventListener('click', () => {
//     bodyColor.classList.add('red-color');
// })

// inputBodyColorWhite.addEventListener('click', () => {
//     bodyColor.classList.add('white-color');
// })

// inputBodyColorGreen.addEventListener('click', () => {
//     bodyColor.classList.add('green-color');
// })


// ========================= Завдання 2 ===============================

// const name1 = document.querySelector('#name');
// const lastName = document.querySelector('#last-name');
// const email = document.querySelector('#email');
// const buttonChangh = document.querySelector('#button-changh');

// buttonChangh.addEventListener('click', () => {

//     const userInput = name1.value;
//     const userLastNameInput = lastName.value;
//     const userEmailInput = email.value
//     alert(`${userInput} ${userLastNameInput} ${userEmailInput}`);

// })


// ========================= Завдання 3 ============================

const btnChangh = document.querySelector('#btn-changh');
const photoChangh = document.querySelector('#photo');

btnChangh.addEventListener('click', () => {
    photoChangh.classList.toggle('photo-none');
})



