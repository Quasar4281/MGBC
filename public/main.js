const mainDiv = document.querySelector("#main");
const butSearch = document.querySelector("#search_button");

console.log("running...");
butSearch.addEventListener("click", loadApis);

async function loadApis(name) {
    const inpSearch = document.querySelector("#search_bar").value;

    const response = await fetch(`http://localhost:8000/${inpSearch}`);
    const data = await response.json();

    console.log(data);
}

/*
function uniqRandNum(len, iter) {
    let arrNum = [];
    for (let i = 0; len > i; i++) {
        arrNum.push(i);
    }

    let randArrNum = [];
    for (let i = 1; iter + 1 > i; i++) {
        let randomValue = Math.floor(Math.random() * (len - i));
        randArrNum.push(arrNum[randomValue]);
        arrNum[randomValue] = arrNum[len - i];
    }

    return randArrNum;
} */