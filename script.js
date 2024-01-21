var div = document.getElementsByClassName('c')
for (let i = 0; i < div.length; i++) {
    const element = div[i];
    div[i].style.height = "200px";
    div[i].style.backgroundColor = "red";
    div[i].style.width = "200px";
    div[i].innerHTML = ( i + 1 );
}
