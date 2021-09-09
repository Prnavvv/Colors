let y = ["red", "blue", "green", "purple", "violet", "crimson", "brown", "magenta", "white"];
let index = 0;

document.getElementById("button").addEventListener("click", change);

function change(){

    if(index == 9){
        index = 0;
    }

        document.getElementById("screen").style.backgroundColor = y[index];
        index++;

        
       
}