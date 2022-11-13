const modeButton = document.getElementById("btncss");



function btn1() {
    if (document.body.style.backgroundColor == 'black') {
        document.body.style.backgroundColor = 'white';
        modeButton.style.backgroundColor = 'black';
        modeButton.style.color = 'white';
        modeButton.innerHTML = "Dark Mode";
    }
    else {
        document.body.style.backgroundColor = 'black';
        modeButton.style.backgroundColor = 'white';
        modeButton.style.color = 'black';
        modeButton.innerHTML = "Light Mode";
    }
}

const moonButton = document.getElementById("moon")

function moonBtn() {
    if (document.body.style.backgroundColor == 'black') {
        document.body.style.backgroundColor = 'white';
        moonButton.innerHTML = '<i class="fa-regular fa-moon"></i>';
        moonButton.style.backgroundColor = 'white'
        moonButton.style.color = 'black';


    }

    else {
        document.body.style.backgroundColor = 'black';
        moonButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
        moonButton.style.backgroundColor = 'black';
        moonButton.style.color = 'white';

    }





}

const d = new Date();
if(d.getHours()>=6 && d.getHours()<=18){
    
    
    document.getElementById("lightBulb").style.filter = "grayscale(0)";

}
else{
    document.getElementById("lightBulb").style.filter = "grayscale(100%)";
}


let radius=prompt("Dairenin Radiusunu Daxil Edin")
let area=console.log("Dairenin Sahesi:"+" "+(Math.pow(radius,2)*Math.PI));



