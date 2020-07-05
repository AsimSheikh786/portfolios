var extent = document.getElementById('nav');
var tog = document.getElementById('tog');
var tog2 = document.getElementById('tog2');
var search = document.getElementById('search');

function navBar(){
    tog.className = "toggle2";
    tog2.className = "toggle";
    extent.className = "nav2";
    search.className = "search"
}

function navBar2(){
    tog.className = "toggle";
    tog2.className = "toggle2";
    extent.className = "nav";
    search.className = "search2"
}

var health1 = document.getElementById('health');
var show = document.getElementById('show');
var dontShow = document.getElementById('dontShow');

function health(){
    health1.className = "slideOn";
    show.className = "dontShow";
    dontShow.className = "show";
    fashion1.className = "slideOff";
    baby1.className = "slideOff";
}

function hide1(){
    health1.className = "slideOff";
    show.className = "show";
    dontShow.className = "dontShow"
}

var fashion1 = document.getElementById('fashion');
var show1 = document.getElementById('show1');
var dontShow1 = document.getElementById('dontShow1');

function fashion(){
    fashion1.className = "slideOn"
    show1.className = "dontShow1";
    dontShow1.className = "show1";
    health1.className = "slideOff";
    baby1.className = "slideOff";
}

function hide2(){
    fashion1.className = "slideOff";
    show1.className = "show1";
    dontShow1.className = "dontShow1"
}

var baby1 = document.getElementById('baby');
var show2 = document.getElementById('show2');
var dontShow2 = document.getElementById('dontShow2');

function baby(){
    baby1.className = "slideOn"
    show2.className = "dontShow2";
    dontShow2.className = "show2";
    health1.className = "slideOff";
    fashion1.className = "slideOff";
}

function hide3(){
    baby1.className = "slideOff";
    show2.className = "show2";
    dontShow2.className = "dontShow2"
}