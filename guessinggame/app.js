/*var a=2
let b="2"
const c=true
*/
var submitbutton = document.getElementById("submit")
console.log(submitbutton)

var message = document.getElementById("message")
console.log(message)

var lives = document.getElementById("lives")
var text;
var initiallives = 10;
var guessnumber = Math.round(Math.random() * 100)
console.log(guessnumber)

submitbutton.onclick = () => {
    //console.log("onclick works")
    let userinput = document.getElementById("numinput").value
    initiallives--;
    //console.log(userinput)
    if (userinput == guessnumber)
    //console.log("you won")
        location.href = "./win.html"
    else if (initiallives == 0) {
        //console.log("you lost")
        location.href = "./lost.html"
    } else if (userinput > guessnumber) {
        text = `Your guess is live too high ${initiallives} are left.`
    } else if (userinput < guessnumber) {
        text = `Your guess is live too low ${initiallives} are left. `
    }

    message.style.display = "inherit"
    message.innerHTML = text
    lives.innerHTML = initiallives
}