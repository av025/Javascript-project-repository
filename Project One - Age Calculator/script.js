const buttonElement = document.getElementById("button");
const userInput = document.getElementById("birthdate-input");
const resultedElement = document.getElementById("calculated-age-result")

function calculateAge() {
    const userAgeValue = userInput.value;
    if(userAgeValue === "") {
        alert("Please enter your Birthdate");
    }else {
        const userAge = getAge(userAgeValue)
        resultedElement.innerText = `You are  ${userAge} ${userAge <=10?"year":"years"} old`
    }
}

function getAge(userAgeValue) {
    const currentDate = new Date(); // These Date() was constructor in javascript
    const birthYear = new Date(userAgeValue);
    let age = currentDate.getFullYear() - birthYear.getFullYear();
    const month = currentDate.getMonth() - birthYear.getMonth();
    if(month <0 || (month === 0 && currentDate.getDate < birthDate.getDate)){
        age--;
    }

    return age
}

buttonElement.addEventListener("click",calculateAge)