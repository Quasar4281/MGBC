const mainDiv = document.querySelector("#main");

(async function loadApis() {
    const testLen = 22;
    const testRanArr = uniqRandNum(500, testLen);
    for (let j = 0; testLen > j; j++) {
        loadMovie(testRanArr[j]);
    }

    async function loadMovie(id){
        const response = await fetch(`https://api.tvmaze.com/shows/${id}/images`);
        const data = await response.json();
        const testRanArrTwo = uniqRandNum(data.length, data.length);

        for (let i = 0; data.length > i; i++) {
            let div = document.createElement("div");
            div.innerHTML = `<img src="${data[testRanArrTwo[i]].resolutions.original.url}" alt="Movie">`;
            mainDiv.appendChild(div);
        }
        
        console.log(data);
        console.log(mainDiv);
    }
})();

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
}