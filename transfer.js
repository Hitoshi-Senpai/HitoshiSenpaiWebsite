const userName = document.getElementById("userName");
const pass = document.getElementById("pass");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const opacityDiv = document.getElementById("opacityID");

function resetField(){
    userName.value = "";
    pass.value = "";
}

btn2.addEventListener('click',function(){
    resetField();
});

btn1.addEventListener('click', function(){

    if(pass.value == "el psy kongroo"){
        window.open("HtmlPages/mainPage.html");
    }
    else{
        opacityDiv.style.display="block";
        setTimeout(function(){
            opacityDiv.style.display="none";
        }, 1500);
    }
});