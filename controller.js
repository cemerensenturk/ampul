function playSound(audioName){
    let audio = new Audio(audioName);
    audio.play();
}

function bulb_on(){
    document.getElementById("bulb").width = "150";
    document.getElementById('bulb').src='https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg';
    playSound("lose.mp3");
}
function bulb_off(){
    document.getElementById("bulb").width = "146";
    document.getElementById('bulb').src='https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg';
    //var audio = new Audio('https://drive.google.com/file/d/1v2efsKbSix61LZct6IH1vXrPM0_UL2gR/preview');
    //audio.play();
    playSound("win.mp3");
}