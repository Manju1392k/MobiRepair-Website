
let Menu_Icons = document.getElementById("Menu_icon");

let Menu_Screen = document.getElementById("menu");

Menu_Icons.addEventListener('click', function() {
    if (Menu_Screen.style.height == '0rem'){
        Menu_Screen.style.height = '25rem';
    }else{
        Menu_Screen.style.height = '0rem';
    }
})