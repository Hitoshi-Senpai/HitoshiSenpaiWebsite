
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('check');
    var btn = document.getElementById('btn');
    var cancel = document.getElementById('cancel');
    var side = document.getElementById('side');

    btn.addEventListener('click', function () {
        checkbox.checked = true;
        side.style.left = '0'; 
        cancel.style.display = 'block'; 
        btn.style.transform = 'translateX(2vw)';
        btn.style.opacity = '0'; 
        setTimeout(function() {
            btn.style.display = 'none';
        }, 300);
    });

    cancel.addEventListener('click', function () {
        checkbox.checked = false; 
        if(window.innerWidth <= 550){
            side.style.left = '-50vw';
        }
        else{
            side.style.left = '-20vw';
        }
        cancel.style.display = 'none';
        btn.style.display = 'block'; 
        btn.style.transform = 'translateX(0)'; 
        btn.style.opacity = '1';
    });
});


const loadImg = document.getElementById("naruto");
// const opacityDiv = document.getElementById("opacityID");
var width = window.innerWidth;
var pos = -15;
var change = 10;
var limit = 0;

const opacityDiv = document.getElementById("opacityID");
const btn = document.getElementById("newBtnID");

if(width < 1000 && width >= 800){
    change = 5;
    limit = 150;
}

if(width < 800 && width >= 600){
    change = 4;
    limit = 120;
}

if(width < 600 && width > 450){
    change = 3;
    limit = 120;
}

if(width <= 450 && width > 100){
    change = 2.8;
    limit = 50;
}

function animate(){
    if(pos == -15){
        opacityDiv.style.display = 'block';
    }
    if(pos + limit<= width){
        pos += change;
        loadImg.style.left = pos + "px";
        requestAnimationFrame(animate);
    }
    else{
        pos = -15;
        opacityDiv.style.display = 'none';
        loadImg.style.left = pos + 'vw';
    }
}

btn.addEventListener('click',function(){
    console.log(width);
    animate();
});

const updatesBtn = document.getElementById("newBtnID");

updatesBtn.addEventListener('click', function(){
    var time = 3500;
    if(width < 1500 && width >= 1100){
        time = 2500;
    }
    else if(width < 1100 && width >= 800){
        time = 2500;
    }
    else if(width < 800 && width >= 550){
        time = 2500;
    }
    else if(width < 550 && width >= 100){
        time = 2000;
    }

    setTimeout(function(){
        window.location.href = "updates.html";
    }, time);
});

