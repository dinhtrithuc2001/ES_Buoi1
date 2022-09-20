const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];

const renderHTMLl = () => {
    let content = "";
    for(let i = 0; i < colorList.length; i++){
        content += `<button class="color-button ${colorList[i]}" onclick="changeColor('${colorList[i]}')"></button>`
    }
    document.getElementById("colorContainer").innerHTML = content;
}

renderHTMLl();

const changeColor = (color) => {
    renderHTMLl();
    document.getElementById("house").className = "house "+color;
    document.getElementsByClassName("color-button "+color)[0].classList.add('active');
}