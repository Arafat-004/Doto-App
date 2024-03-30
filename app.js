const userInput = document.querySelector(`.input`);

const addBtn = document.querySelector(`.add`);

const liParent = document.querySelector(`.parent_of_li`);

addBtn.addEventListener(`click`, function (event) {
  const inputValue = userInput.value;

  if (inputValue) {
    const i = document.createElement(`i`);
    i.setAttribute(`class`, `fa-solid fa-trash-can icon`);
    const button = document.createElement(`button`);
    button.setAttribute(`class`, `remove_btn`);
    button.appendChild(i);

    const newLi = document.createElement(`li`);
    newLi.setAttribute(`class`, `item`);
    newLi.textContent = inputValue;

    newLi.appendChild(button);
    liParent.appendChild(newLi);

    userInput.value = ` `;
  } else {
    alert(`Tha Try Again...`);
  }
});

userInput.addEventListener(`keypress`, function (event) {
  const inputValue = userInput.value;
  if (inputValue) {
    if (event.key === `Enter` || event.keyCode === 13) {
      const i = document.createElement(`i`);
      i.setAttribute(`class`, `fa-solid fa-trash-can icon`);

      const button = document.createElement(`button`);
      button.setAttribute(`class`, `remove_btn`);

      button.appendChild(i);

      const newLi = document.createElement(`li`);
      newLi.setAttribute(`class`, `item`);
      newLi.textContent = inputValue;

      newLi.appendChild(button);

      liParent.appendChild(newLi);

      userInput.value = ``;
    }
  } else {
    userInput.value = `💖`;
  }
});

liParent.addEventListener(`click`, function (event) {
  let targetedElement = event.target;
  if (
    targetedElement.classList.contains(`icon`) ||
    targetedElement.classList.contains(`remove_btn`)
  ) {
    const targetedLi = event.target.closest(`li`);

    targetedLi.remove();
  }
});
