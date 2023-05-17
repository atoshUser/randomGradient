const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const elP = document.querySelector("#textGradient");
const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];

const getGradient = () => {
    let value = "#";
    for (let i = 0; i < 6; i++) {
        let v;
        v = Math.trunc(Math.random() * values.length);
        value += values[v];
    }
    return value;
};

const setGradient = () => {
    let value1 = getGradient();
    let value2 = getGradient();
    let numDeg = Math.trunc(Math.random() * 360);
    let result = `linear-gradient(${numDeg}deg, ${value1}, ${value2})`;
    body.style.background = result;
    elP.textContent = result;
};

btn.addEventListener("click", setGradient);
