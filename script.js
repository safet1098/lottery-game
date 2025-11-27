let playbtn = document.getElementById("playbtn");
let result = document.getElementById("display_result");
let result_num = document.getElementById("result_num");
let clickSound = new Audio("button-305770.mp3");

let gifts = ["laptop", "$25,000", "Mobile Phone", "Cycle", "Scooty", "Car"];
playbtn.addEventListener("click", function() {
    clickSound.currentTime = 0; 
    clickSound.play();

    let dice = Math.round(Math.random() * 5) + 1;
    result_num.textContent = dice;
    result.innerHTML = `You rolled  ${dice} , Hurray!! You won <span class="span_gift"> ${gifts[dice - 1]}</span>`;

});
    console.log(Math.floor((Math.random()*6)+1));


