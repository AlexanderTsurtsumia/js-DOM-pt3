var li = document.getElementsByTagName('li')
for (let i = 0; i < li.length; i++) {
    const element = li[i];  
    li[i].innerHTML = ( i + 1 );
}
