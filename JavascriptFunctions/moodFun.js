document.addEventListener('DOMContentLoaded', function(){
    var sunBtn = this.getElementById('sunBtn');
    var moonBtn = this.getElementById('moonBtn');
    var websiteColor = this.documentElement.style;

    // const mood = 1;

    
    // class counterMood {
    //     static mood = 1;
    // }
    // var temp;

    // savePreviosMood();
    var mood = 1;

    function savePreviosMood(){
        // console.log("done!");

        // var storeValue = (localStorage.getItem(counterMood));
        // storeValue = Number(storeValue);

        if(mood % 2 == 0){
            websiteColor.setProperty('--mainColor', '#e1ddeb');
            websiteColor.setProperty('--secondColor', '#3a3153');
            websiteColor.setProperty('--modeColor', 'black');
            websiteColor.setProperty('--footerColor', '#b1aebb');
            websiteColor.setProperty('--headerMenuColor', '#918983');
            websiteColor.setProperty('--menuColor', '#e6ddd6');
            websiteColor.setProperty('--listBtn', 'yellow');
            websiteColor.setProperty('--listBtnAfterEf', '#b1aebb');
            websiteColor.setProperty('--slidebtn', '#b1aebb');
            moonBtn.style.display ="block";
            sunBtn.style.display ="none";
        }else{
            websiteColor.setProperty('--mainColor', '#024950');
            websiteColor.setProperty('--secondColor', '#003135');
            websiteColor.setProperty('--modeColor', 'white');
            websiteColor.setProperty('--footerColor', '#0FA4AF');
            websiteColor.setProperty('--headerMenuColor', '#693224');
            websiteColor.setProperty('--menuColor', '#964734');
            websiteColor.setProperty('--listBtn', 'white');
            websiteColor.setProperty('--listBtnAfterEf', 'yellow');
            websiteColor.setProperty('--slidebtn', 'black');
            sunBtn.style.display ="block";
            moonBtn.style.display ="none";
        }
        // mood++;
    }


    sunBtn.addEventListener('click', function(){
        // temp = Number(counterMood.mood);
        // temp++;
        // temp = temp + "";
        // localStorage.setItem(counterMood.mood, temp);
        mood++;
        savePreviosMood();
    });

    moonBtn.addEventListener('click', function(){
        // temp = Number(counterMood.mood);
        // temp++;
        // temp = temp + "";
        // localStorage.setItem(counterMood.mood, temp);
        mood++;
        savePreviosMood();
    });

});