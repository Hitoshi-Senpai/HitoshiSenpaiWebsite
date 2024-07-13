
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

