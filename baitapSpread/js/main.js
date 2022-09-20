let text = document.getElementsByClassName("heading")[0].innerHTML;

const hoverMe = () => {
    let textHover = [...text];

    let content = "";

    textHover.forEach((letter) => {
        content += `<span>
            ${letter}
        </span>`
    })
    document.getElementsByClassName("heading")[0].innerHTML = content;
}

hoverMe();