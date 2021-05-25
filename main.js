const formElement = document.querySelector("#add-students-form");
const studentsListElement = document.querySelector("#Students-list");

formElement.addEventListener("submit" , event => {
    event.preventDefault();

    const nameInputElement = document.querySelector("#NameInput");
    const lastNameInputElement = document.querySelector("#LastNameInput");
    const interestElement = document.querySelector("#Interest");

    const studentsItemElement = document.createElement("li");
    studentsItemElement.classList.add("mb-2")

    const buttonElement = document.createElement("button");
    buttonElement.classList.add("btn" , "btn-danger" , "h-100");
    buttonElement.textContent = "Delete";

    buttonElement.addEventListener("click" , event => {
        studentsItemElement.remove();
    })

    const subwrapperDivElement = document.createElement("div");
    subwrapperDivElement.appendChild(buttonElement);

    const pNameElement = document.createElement("p")
    pNameElement.classList.add("h2");
    pNameElement.textContent = nameInputElement.value + " " + lastNameInputElement.value;

    const InterestPElement = document.createElement("p");
    InterestPElement.classList.add("h4");
    InterestPElement.textContent = interestElement.value;

    const wrapperDivElement = document.createElement("div");
    wrapperDivElement.appendChild(pNameElement);
    wrapperDivElement.appendChild(InterestPElement);

    const cardBodyElement = document.createElement("div");
    cardBodyElement.classList.add("card-body" , "d-flex" , "justify-content-between");
    cardBodyElement.appendChild(wrapperDivElement);
    cardBodyElement.appendChild(subwrapperDivElement);

    const cardElement = document.createElement("div");
    cardElement.classList.add("card")
    cardElement.appendChild(cardBodyElement);

    studentsItemElement.appendChild(cardElement);

    studentsListElement.prepend(studentsItemElement);

    formElement.reset();


})