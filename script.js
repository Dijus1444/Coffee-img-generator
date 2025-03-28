const button = document.createElement("button");
button.innerText = "generate photo";

const image = document.createElement("img");
const container = document.getElementById("container");
container.appendChild(button);

button.addEventListener("click", async () => {
    const result=await fetch("https://coffee.alexflipnote.dev/random.json")
    const data=await  result.json();
    console.log(data.file);

    image.src = data.file;
    image.alt = "Coffee_Photo";
    container.appendChild(image);
});