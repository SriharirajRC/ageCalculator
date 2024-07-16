const d = new Date();
document.getElementById("dmkaro").innerHTML = d;


function printDate(){
   
    const d = new Date().getFullYear();

    var selectedDate = document.getElementById('Date').value;

    var sDate= new Date(selectedDate).getFullYear();

    var displayDate= document.getElementById("kaka");

    var diff= d-sDate;

    var temp= "Your age is "+diff;

    document.getElementById("kaka").innerHTML=temp;

}

