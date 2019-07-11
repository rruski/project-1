let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    const btnReset = document.createElement("button");
    const ul = document.createElement("ul");
    const btnNew = document.createElement("button");

    btn.textContent = "Dodaj 10 elementów listy";
    btnReset.textContent = "Wyczyść";
    btnNew.textContent = "Nowy tekst";

    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    document.body.appendChild(ul);
    document.body.appendChild(btnNew);

    btnNew.addEventListener("click", addDiv);
    btn.addEventListener("click", createLiElements);
    btnReset.addEventListener("click", cleanList);

}

const addDiv = () => {
    console.log("Dodaj DIV");
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.style.width = 50 + "px";
    div.style.height = 50 + "px";
    div.style.position = "fixed";
    div.style.left = 50 + "%";
    div.style.top = 50 + "%";
    div.style.transform = "translateX(-50%,-50%)";
    div.style.display = "block";
    div.style.backgroundColor = "green";

}

const createLiElements = () => {

    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        console.log("ZMIANA");

        document.querySelector("ul").appendChild(li);

    }
}

const cleanList = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}

init()