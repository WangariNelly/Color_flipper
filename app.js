const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const color = document.querySelector(".color");

const btn = document.getElementById('btn').addEventListener('click', () =>{
    //get random color flipped
     const random = randomNum();
        console.log(random);
     document.body.style.backgroundColor = colors[random];
     color.textContent = colors[random];
});

//function to create the random number.
const randomNum = function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

