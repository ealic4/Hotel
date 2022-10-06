function OpenWindowLogin(){
    document.getElementById("cijelilogin").style.display = "flex";
}
function CloseLogin(){
    document.getElementById("cijelilogin").style.display = "none";
}

function OpenWindowRegistration(){
    document.getElementById("cijelaregistracija").style.display = "flex";
}
function CloseRegistration(){
    document.getElementById("cijelaregistracija").style.display = "none";
}
function OpenWindowReservation(){
    document.getElementById("cijelarezervacija").style.display = "flex";
}
function CloseReservation(){
    document.getElementById("cijelarezervacija").style.display = "none";
}

function openFunction(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


function obrisi(){
    confirm("Da li ste sigurni da želite obrisati rezervaciju");
  
}
