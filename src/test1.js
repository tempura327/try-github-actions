// this file is used to test CodeQL

let number = 1;
const numberGreaterThan100 = 101;

const addToNumber = (n) => {
  return number += n;
}

// 有side effect
const foo = (n) => {
  let num = 0;

  num = n;
  numberGreaterThan100 += n;
}

const noteInput = document.querySelector('#note-input');
const sumbitButton = document.querySelector('#sumbit-button');


// 有被XSS的風險
const submitForm = async (value) => {
  await fetch('https://www.this-is-fake-url', {
    body: JSON.stringify(value),
    headers: {
      "content-type": "application/json",
    },
    method: "POST", 
  }).then((response) => {
    return response.json();
  })
}

sumbitButton.addEventListener('click', () => {
  console.log('noteInput.value is: ', noteInput.value);
  submitForm(noteInput.value);
})