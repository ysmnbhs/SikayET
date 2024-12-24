let cevapForm= document.getElementById("cevapForm")



console.log(cevapForm)

let cevaplaButton0 = document.getElementById("cevapla-button0")
let sikayetCard0 = document.getElementById("sikayet-card0")

// button0
function cevaplandi0(){
      console.log("butona tiklandi")
      sikayetCard0.style.background="rgb(186,182,252)"
}

// button1
let cevaplaButton1 = document.getElementById("cevapla-button1")
let sikayetCard1 = document.getElementById("sikayet-card1")

function cevaplandi1(){
      console.log("butona tiklandi")
      sikayetCard1.style.background="rgb(186,182,252)"
}


// button2
let cevaplaButton2 = document.getElementById("cevapla-button2")
let sikayetCard2 = document.getElementById("sikayet-card2")

function cevaplandi2(){
      console.log("butona tiklandi")
      sikayetCard2.style.background="rgb(186,182,252)"
}


// button3
let cevaplaButton3 = document.getElementById("cevapla-button3")
let sikayetCard3 = document.getElementById("sikayet-card3")

function cevaplandi3(){
      console.log("butona tiklandi")
      sikayetCard3.style.background="rgb(186,182,252)"
}


// button4
let cevaplaButton4 = document.getElementById("cevapla-button4")
let sikayetCard4 = document.getElementById("sikayet-card4")

function cevaplandi4(){
      console.log("butona tiklandi")
      sikayetCard4.style.background="rgb(186,182,252)"
}


// button5
let cevaplaButton5 = document.getElementById("cevapla-button5")
let sikayetCard5 = document.getElementById("sikayet-card5")

function cevaplandi5(){
      console.log("butona tiklandi")
      sikayetCard5.style.background="rgb(186,182,252)"
}


// button6
let cevaplaButton6 = document.getElementById("cevapla-button6")
let sikayetCard6 = document.getElementById("sikayet-card6")

function cevaplandi6(){
      console.log("butona tiklandi")
      sikayetCard6.style.background="rgb(186,182,252)"
}


// button7
let cevaplaButton7 = document.getElementById("cevapla-button7")
let sikayetCard7 = document.getElementById("sikayet-card7")

function cevaplandi7(){
      console.log("butona tiklandi")
      sikayetCard7.style.background="rgb(186,182,252)"
}










let cevaplaButton = document.getElementById("cevap-gonder-button")

cevaplaButton.addEventListener("click" , cevapEkle)

function cevapEkle(){
      console.log("cevapla tiklandii")
      let cevapContent = document.getElementById("cevap").value
      document.querySelector(".markanin-cevabi0").innerHTML = cevapContent
      document.getElementById("firma-cevap").classList.remove("gizlenmis-oge")

}

