
const averageScore = (...rest) => {
    let average = 0;
    rest.forEach((item) => {
        average += item;
    })
    return average/(rest.length);
}

document.getElementById("btnKhoi1").addEventListener("click",() => {
    let toan = +document.getElementById("inpToan").value;
    let ly = +document.getElementById("inpLy").value;
    let hoa = +document.getElementById("inpHoa").value;

    document.getElementById("tbKhoi1").innerHTML = averageScore(toan, ly, hoa);
})

document.getElementById("btnKhoi2").addEventListener("click",() => {
    let van = +document.getElementById("inpVan").value;
    let su = +document.getElementById("inpSu").value;
    let dia = +document.getElementById("inpDia").value;
    let english = +document.getElementById("inpEnglish").value;

    document.getElementById("tbKhoi2").innerHTML = averageScore(van, su, dia, english);
})