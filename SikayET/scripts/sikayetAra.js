

// DOMS
let searchInput = document.querySelector("#search-input");

let sikayetİcerik = document.querySelectorAll(".sikayet-icerik")

let sikayetCard = document.querySelectorAll(".sikayet-card")



// KEYUP
searchInput.addEventListener("keyup", searcBar);

function searcBar() {

      console.log(searchInput.value)

      let searchData = searchInput.value.toUpperCase()

      for (i = 0; i < sikayetCard.length; i++) {
            if (sikayetİcerik[i].innerHTML.toUpperCase().indexOf(searchData) > -1) {
                  //varsa
                  sikayetCard[i].style.display = "";
            } else {
                  //yoksa
                  sikayetCard[i].style.display = "none";
            }
      }

}








// let sikayetCek = JSON.parse(localStorage.getItem("sikayet"))

// console.log(sikayetCek)


// document.querySelector(".sikayetler").innerHTML += `
// <div class="sikayet-card">
// <div class="sikayet-title">
//     <div class="sikayetci-bilgi">
//         <img src="./pictures/pp.png">
//         <div class="sikayetci-ad">
//             <h6> ${} </h6>
//             <p>01.02.2002</p>
//         </div>
//     </div>
//     <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
//             aria-expanded="false">
//             İşlemler
//         </a>
//         <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Sil</a></li>
//             <li>
//                 <hr class="dropdown-divider">
//             </li>
//             <li><a class="dropdown-item" href="#">Değiştir</a></li>
//         </ul>
//     </li>
// </div>
// <div class="sikayet-icerik">
//     Üniversite öğrencilerinin burs arayışından faydalanıyorlar. e.burs.org diye bir site vardı burs sitesi
//     diye başvurdum benden bilgilerim alındı sonra hemen burs çıktı Papara hesabı aç denildi hayır deyince
//     aradılar istemiyorum dedim
//     Ama ellerinde bilgilerim var eğer ki kullanılır ise bilgim dışındadır Papara hesabım da yoktur şu an
//     piyasada resmen bursla ilişkisiz bir sürü site var ve sizin bilginizi istiyor hangisi gerçek hangisi
//     yalan karışmış durumda
// </div>
// <a class="yorum-link" href="#">Cevapla <img class="ok-ikon" src="./pictures/cevapla.png"></a>
// </div>`


