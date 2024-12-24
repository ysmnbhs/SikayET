let sikayetciAdi = document.querySelector("#sikayetciAdi")
let sikayetEdilenFirma = document.querySelector("#sikayet-firma")
let sikayetBasligi = document.querySelector("#sikayetBasligi")
let sikayetİcerigi = document.querySelector("#sikayet-icerik")
let sikayetDom = document.querySelector("#sikayetForm")
let cevaplanmaDurumu = false

let tarihSaat = new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear() + "   saat:" +new Date().getHours() + ":" + new Date().getMinutes() ;





sikayetDom.addEventListener("submit", () => {
      event.preventDefault()
      

      let localItems = JSON.parse(localStorage.getItem("tumSikayetlerLocal"))
      if (localItems === null){
            sikayetler = []
      }else{
            sikayetler = localItems
      }
    

   


let sikayetData = {
      isim: sikayetciAdi.value,
      firma: sikayetEdilenFirma.value,
      baslik: sikayetBasligi.value,
      icerik: sikayetİcerigi.value,
      tarih: tarihSaat,
      cevaplandi:cevaplanmaDurumu,
}


sikayetler.push(sikayetData)


localStorage.setItem("tumSikayetlerLocal", JSON.stringify(sikayetler))




  sikayetciAdi.value = ""
  sikayetEdilenFirma.value = ""
  sikayetBasligi.value = ""
  sikayetİcerigi.value =""

  document.querySelector(".olusturuldu").classList.remove("olusturuldu-gizle")

 


})






