// function change(){
//     if(document.documentElement.scrollTop){
//         document.getElementById("header-up").style.backgroundColor="white";
//         document.getElementById("header-up-a").style.color="black";
//         document.getElementById("header-up").style.position="fixed";
//         document.getElementById("header-up").style.top="2px";

//     }
//     else{
//         document.getElementById("header-up").style.backgroundColor="";
//         document.getElementById("header-up-a").style.color="";
//         document.getElementById("header-up").style.position="";
//         document.getElementById("header-up").style.top="";
        
//     }
// 



// window.onscroll = function() {
//     change();
// };

// function change() {
//     if (document.documentElement.scrollTop > 5) {
//         document.getElementById("header-up").style.backgroundColor = "white";
//         document.getElementById("header-up-a").style.color = "black";
//         document.getElementById("header-up").style.position = "fixed";
//         document.getElementById("header-up").style.top = "10px"; // Added 'px' unit for top position
//     } else {
//         document.getElementById("header-up").style.backgroundColor = "";
//         document.getElementById("header-up-a").style.color = "";
//         document.getElementById("header-up").style.position = ""; // Reset to default if necessary
//         document.getElementById("header-up").style.top = ""; // Reset to default if necessary
//     }
// }

// ............,,.........upper-is scroll part,,,,,,,,,,,,,
function openham(){
    ham = document.getElementById("hambox");
    ham.style.width = "100%";
    ham.style.position = "fixed";
    

}
function closeham(){
    ham = document.getElementById("hambox");
    ham.style.width = "0";
    
}

function showHide(){
    check = document.getElementById("down").classList.contains("fa-angle-down");
    if (check==true){
        document.getElementById("down").classList.remove("fa-angle-down");
        document.getElementById("down").classList.add("fa-angle-up");
        document.getElementById("open").style.display="block";
    }
    else{
        document.getElementById("down").classList.remove("fa-angle-up");
        document.getElementById("down").classList.add("fa-angle-down");
        document.getElementById("open").style.display="none";
    }
}

function openclose(){
    check = document.getElementById("down2").classList.contains("fa-angle-down");
    if (check==true){
        document.getElementById("down2").classList.remove("fa-angle-down");
        document.getElementById("down2").classList.add("fa-angle-up");
        document.getElementById("open2").style.display="block";
    }
    else{
        document.getElementById("down2").classList.remove("fa-angle-up");
        document.getElementById("down2").classList.add("fa-angle-down");
        document.getElementById("open2").style.display="none";
    }
}

function onoff(){
    check = document.getElementById("down3").classList.contains("fa-angle-down");
    if (check==true){
        document.getElementById("down3").classList.remove("fa-angle-down");
        document.getElementById("down3").classList.add("fa-angle-up");
        document.getElementById("open3").style.display="block";
    }
    else{
        document.getElementById("down3").classList.remove("fa-angle-up");
        document.getElementById("down3").classList.add("fa-angle-down");
        document.getElementById("open3").style.display="none";
    }
}

function closeopen(){
    check = document.getElementById("down4").classList.contains("fa-angle-down");
    if (check==true){
        document.getElementById("down4").classList.remove("fa-angle-down");
        document.getElementById("down4").classList.add("fa-angle-up");
        document.getElementById("open4").style.display="block";
    }
    else{
        document.getElementById("down4").classList.remove("fa-angle-up");
        document.getElementById("down4").classList.add("fa-angle-down");
        document.getElementById("open4").style.display="none";
    }
}
function help(){
    check = document.getElementById("down5").classList.contains("fa-angle-down");
    if (check==true){
        document.getElementById("down5").classList.remove("fa-angle-down");
        document.getElementById("down5").classList.add("fa-angle-up");
        document.getElementById("open5").style.display="block";
    }
    else{
        document.getElementById("down5").classList.remove("fa-angle-up");
        document.getElementById("down5").classList.add("fa-angle-down");
        document.getElementById("open5").style.display="none";
    }
}
// ..............zoom......out..in.,,,,,,,
function zoom(){
    document.getElementById("dallas-button").style.fontSize = "30px";
    document.getElementById("dallas-button").style.padding = "10px 200px";    
}

function zoomout(){
    document.getElementById("dallas-button").style.fontSize = "0px";
    document.getElementById("dallas-button").style.padding = "0";    
}
// ............privilage-slidesss......,,,,,,,,,,,,
function slide0(){
    document.getElementById("privilage-club").style.display="block";
    document.getElementById("club").style.borderBottom="solid";
    document.getElementById("club").style.color="#8E2157";

    document.getElementById("awards-club").style.display="none";
    document.getElementById("awards").style.borderBottom="none";
    document.getElementById("awards").style.borderBottomColor=" black";

    document.getElementById("mobile-club").style.display="none";
    document.getElementById("app").style.borderBottom="none";
    document.getElementById("app").style.color="black";

    document.getElementById("student-club").style.display="none";
    document.getElementById("std").style.borderBottom="none";
    document.getElementById("std").style.borderBottomColor=" black";
}

function slide1(){
    document.getElementById("awards-club").style.display="block";
    document.getElementById("awards").style.borderBottom="solid";
    document.getElementById("awards").style.borderBottomColor=" #8E2157";

    document.getElementById("privilage-club").style.display="none";
    document.getElementById("club").style.borderBottom="none";
    document.getElementById("club").style.color="black";

    document.getElementById("mobile-club").style.display="none";
    document.getElementById("app").style.borderBottom="none";
    document.getElementById("app").style.color="black";

    document.getElementById("student-club").style.display="none";
    document.getElementById("std").style.borderBottom="none";
    document.getElementById("std").style.borderBottomColor=" black";


}
function slide2(){
    document.getElementById("mobile-club").style.display="block";
    document.getElementById("app").style.borderBottom="solid";
    document.getElementById("app").style.borderBottomColor=" #8E2157";

    document.getElementById("awards-club").style.display="none";
    document.getElementById("awards").style.borderBottom="none";
    document.getElementById("awards").style.color="black";

    document.getElementById("privilage-club").style.display="none";
    document.getElementById("club").style.borderBottom="none";
    document.getElementById("club").style.color="black";

    document.getElementById("student-club").style.display="none";
    document.getElementById("std").style.borderBottom="none";
    document.getElementById("std").style.borderBottomColor=" black";
}
function slide3(){
    document.getElementById("student-club").style.display="block";
    document.getElementById("std").style.borderBottom="solid";
    document.getElementById("std").style.borderBottomColor=" #8E2157";

    document.getElementById("mobile-club").style.display="none";
    document.getElementById("app").style.borderBottom="none";
    document.getElementById("app").style.color="black";

    document.getElementById("awards-club").style.display="none";
    document.getElementById("awards").style.borderBottom="none";
    document.getElementById("awards").style.color="black";

    document.getElementById("privilage-club").style.display="none";
    document.getElementById("club").style.borderBottom="none";
    document.getElementById("club").style.color="black";
}

//....................... timer-function ...................................
left_time =70 ;
function time_remaining(){
    if (left_time>0){
        left_time--;
        days = Math.floor(left_time/86400);
        hr = Math.floor((left_time%86400)/3600);
        min = Math.floor((left_time%3600)/60);
        sec = left_time%60;

        if (days > 0) {
            document.getElementById("timer").innerHTML = days + "d " + hr + "h " + min + "m " + sec + "s";
        } else if (hr > 0) {
            document.getElementById("timer").innerHTML = hr + "h " + min + "m " + sec + "s";
        } else if (min > 0) {
            document.getElementById("timer").innerHTML = min + "m " + sec + "s";
        } else {
            document.getElementById("timer").innerHTML = sec + "s";
        }

        document.getElementById("timer").style.fontSize = "30px";
    } else {
        document.getElementById("timer").innerHTML = "Time's Up!";
        setTimeout(function() {
            // window.location.href = "sir.html";
        }, 5000);
    }
}

time_remaining();
setInterval(time_remaining,1000);
// .....................Timer-END.........................

// ...............media-queries,,,part,,,,,,

function dot1(){
    document.getElementById("package-1-media").style.marginLeft="0px";
}
function dot2(){
    document.getElementById("package-1-media").style.marginLeft="-350px";
}
function dot3(){
    document.getElementById("package-1-media").style.marginLeft="-650px";
}