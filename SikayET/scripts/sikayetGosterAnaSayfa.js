let silDom = document.querySelectorAll(".sil")
let sikayetlerDiv = document.querySelector(".sikayetler")
let cevaplanmaDurumu = false

let localItems = JSON.parse(localStorage.getItem("tumSikayetlerLocal"))

if (localItems == null) {
    let sikayetler = []
    let sikayetData1 = {
        isim: "Betül Kırçıl",
        firma: "Fibabanka",
        baslik: "Fibabanka Hesap Kapatmaması Sürekli Ertelemesi",
        icerik: "Hesabımı kapatmak için mobil şubeye giriş yaptım 4448888'i aramanız gerekiyor uyarısı ile karşılaştım 4448888'i aradım kapatmak istiyorum hesabımı diye söyledim beni 20 dakika ya yakin beklettiler üstüne bana hesabınızı kapatamıyoruz dediler ben neden kapatmıyorsunuz dediğimde sistemde sıkıntı var dediler bu nasıl bankacılık şikayetim hesabımı kapatın., Sürekli Fibabanka anahtarı alın diyor yahu telefonumuzda NFC özelliği yok diyoruz mecbur diyor hesabımı kapatmak istiyoruz acil,",
        cevaplandi: cevaplanmaDurumu ,
        tarih: "17/12/2022  pazar",
    }

    let sikayetData2 = {
        isim: "Mustafa",
        firma: "Akbank",
        baslik: "Akbank Müşteri Temsilcisi",
        icerik: "Akbank müşteri temsilcisi tarafından aranıp kredi kartı başvurusunda bulunursam 10000 TL 0 faizli nakit avans çekebileceğim söylendi. Tüm işlemleri yaptıktan sonrada 1.36 faizle kullanabilirsiniz kusura bakmayın dediler. Bu bankanın sözüne İtimat etmek size kalmış.",
        cevaplandi: cevaplanmaDurumu ,
    }

    let sikayetData3 = {
        isim: "Muhammed",
        firma: "Akbank",
        baslik: "Akbank Yeni Ve Eski Müşteri Farkı",
        icerik: "Uzun zamandır Akbank müşterisiyim. Kullanmış olduğum süre boyunca gayet aktif ve yüksek limitlerle kredi kartını kullandım fakat şu an yeni müşterilere özel 0 faizle taksitli nakit avans vb... Bizlere tanımlanmıyor. Bunun tarafıma tanımlanmasını eğer tanımlanmıyorsa da kredi kartımın iptalini rica ediyorum. Başka bankalarla devam edeceğim",
        cevaplandi: cevaplanmaDurumu ,
        tarih: "17/12/2022  pazar",

    }

    let sikayetData4 = {
        isim: "Gökhan",
        firma: "QNB Finansbank",
        baslik: "QNB Limit Kullanımı",
        icerik: "QNB Finansbank acil limit kullanımı, kartımın bir bölümünü kısıtlamakta, hastane masrafları vs durumlar benim kullanım alanlarımın dışında kalıyor, 5255 ile biten kartımdan kaldırılmasını ve günlük limitime eklenmesini istiyorum, bu konuda yardım talep ediyorum.",
        cevaplandi: cevaplanmaDurumu ,
        tarih: "17/12/2022  pazar",

    }

    let sikayetData5 = {
        isim: "Yunus",
        firma: "Lav",
        baslik: "Lav Saklama Kabı Kapaklarının Kırılması",
        icerik: "Lav saklama kaplarının kapakları kırılmadı. Esnek görünüşlüler ama belli bir süre çok çabuk kırılıyorlar. Kahvaltılık olarak çok kullanışlı olmalarına rağmen kapaklarının bu kadar kırılması beni çok hayal kırıklığına uğrattı. İnternette sadece kapak satışı da yok sanırım.",
        cevaplandi: cevaplanmaDurumu ,
        tarih: "17/12/2022  pazar",

    }

    let sikayetData6 = {
        isim: "Büşra",
        firma: "Wpmagaza.com",
        baslik: "Wpmagaza.com Hizmet Alamadık Para Ödedik",
        icerik: "Wpmagaza.com adlı site sabahtan akşama kadar uğraştırdılar kurulumu yapacağım dediler yapmadılar akşama kadar oyaladılar kurulumda yapmadılar kanser ettiler akşama kadar. Aleni şekilde müşteriyle dalga geçiyorlar böyle hizmet olamaz!",
        cevaplandi: cevaplanmaDurumu ,
        tarih: "17/12/2022  pazar",

    }

    let sikayetData7 = {
        isim: "Fatma",
        firma: "VakıfBank, Ziraat Bankası",
        baslik: "VakıfBank Ve Ziraat Bankası Ortak ATM",
        icerik: `Osmaniye devlet Hastanesi ek hizmet binasının önünde VakıfBank ATM... 14.09.2022 tarihinde saat yaklaşık 17:15 civarında para yatırmak için VakıfBank ortak ATM de Ziraat Bankası ® hesabıma para yatırıyordum. Elimde tam 1400₺ vardı parayı birkaç defa yatırmak istedim fakat yatıramadım sonra bir deneme daha yaptığım da paranın 1000₺ sini ATM ye yattı elimde 400₺ kalmıştı "para eklemek ister misiniz. Butonuna"basip para yi yatırmak istedim. 400₺ yi ekledim. Bu esnada elektrik gitti o gün bugündür hiçbir netice alamadım..."`,
        cevaplandi: cevaplanmaDurumu ,
        tarih: "17/12/2022  pazar",

    }

    let sikayetData8 = {
        isim: "Müslüm Gürses",
        firma: "Pazarlama Mobil",
        baslik: "Pazarama Mobil Siparişim Kargoya Verilmedi. Paul Kenzie Markalı Ürün",
        icerik: "İş bankasının Pazarama mobil uygulamasından paul kenzie ® markasından 15 aralıkta siparişini verdiğim ürünler bugün 26 Aralık olmasına rağmen henüz kargoya verilmedi. 11 gün boyunca kargoya verilmemesinin nasıl bir açıklaması olabilir? Uygulama üzerinden talep ve şikayet oluşturdum ancak yanıt yok. Müşteri hizmetlerini aradığımda ise asla telefon açılmıyor herhangi bir muhatap bulamıyorum.",
        cevaplandi: cevaplanmaDurumu ,
        tarih: "17/12/2022  pazar",

    }

    let sikayetData9 = {
        isim: "Alper",
        firma: "Bakırçay Üniversitesi",
        baslik: "Bilgisayar Mühendisliği Bölümünde Mobil Dersi Olmaması",
        icerik: "Mobil dersi artık bilgisayar mühendisliği öğrencilerine verilmeli, mobil şart bu devirde. Betül diye biri var sınıfta aşırı mağdur olduğunu söylüyor.",
        cevaplandi: cevaplanmaDurumu ,
        tarih: "17/12/2022  pazar",

    }

    let sikayetData10 = {
        isim: "Dilara",
        firma: "Ziraat Bankası",
        baslik: "Ziraat Bankası Bankkart Genç Başvuru",
        icerik: "KYK bursu için başvurdum fakat hiçbir türlü alamıyorum 4747ye yazmama rağmen geri dönüş alamadım. Ekstra ilgisiz bir banka şubelerine gittim sadece 2 şubede açıldığını söyledi ve orası da çok uzak. Kimliğe burs yatıyor zaten ama gene de böyle bir firma böyle bir şey yapmamalı.",
        cevaplandi: cevaplanmaDurumu ,
        tarih: "17/12/2022  pazar",

    }

    let sikayetData11 = {
        isim: "Abdurrahman",
        firma: "Ziraat Bankası",
        baslik: "Ziraat Bankası Bloke",
        icerik: "Ziraat Bankası yasal olmadığı halde KYK bursumun yattığı hesabıma sürekli bloke koyuyor. Blokeyi kaldırmak için ise sürekli burs paramın yarısını kendilerine verip, kredi borcumu yapılandırmam söyleniyor. Devletin verdiği kredi, burs, yardım hiçbir şekilde bloke veya haciz işlemi göremez. Şubem Gaziantep'te ben ise farklı şehirdeyim. En yakın şubeden gidip Gaziantep şubesi müdürünün numarasını aldım, ama telefonumu açmadan engelledi. Ne yapmaya çalışıyorsunuz ya?",
        cevaplandi: cevaplanmaDurumu ,
        tarih: "17/12/2022  pazar",

    }

    let sikayetData12 = {
        isim: "Damla",
        firma: "Aile ve Sosyal Hizmetler Bakanlığı",
        baslik: "Aile ve Sosyal Hizmetler Bakanlığı Aile Destek Programı Desteği Para Yatmadı",
        icerik: "Ben de Aile Destek Programından yardım aldım Üstelik e-devlette de kabul edildi olarak gözüküyor. Yetkili yerleri de aradım fakat kabul edildi Onaylanmış olarak gözüküyor ama hesapta para yoktu Ben para yatırılmadı neden diye sordum bunda bizim de bildiğimiz yok dediler ve bayramdan önce yatacağını söylediler Ama hala yatmadı.",
        cevaplandi: cevaplanmaDurumu ,
        tarih: "17/12/2022  pazar",

    }

    let sikayetData13 = {
        isim: "Mert",
        firma: "Nüfus ve Vatandaşlık İşleri",
        baslik: "Nüfus ve Vatandaşlık İşleri Pasaport Neredesin...",
        icerik: "05/12/2022 tarihinde pasaport için başvuruda bulundum halen basım öncesi kontrol aşamasındadır deniliyor pasaportun gelmesi gerekiyor şimdiden uçak bileti aldım vize işlemleri için pasaportun en geç 27-12-2022 tarihinde elimde olması gerekiyor. Yardıma muhtacız...",
        cevaplandi: cevaplanmaDurumu ,
        tarih: "17/12/2022  pazar",

    }

    let sikayetData14 = {
        isim: "Yasemin",
        firma: "Vodafone",
        baslik: "Vodafone Siparişin Ulaşmaması Bilgi Verilmemesi",
        icerik: "Aralık 16 da yenilenmiş cihaz siparişi vermiş bulunmaktayız. Teslim tarihi 18 20 Aralık olmasına rağmen hala sipariş hazırlanıyor yazıyor müşteri hizmetleri ne ulaşmamız minimum 20 dakikayı bulmakta şayet ulaşabilirsek de herhangi bir bilgi verememektedir ve bilgi eksikliği olduğu çok acık sadece benim de uygulama üzerinden gördüğüm siparişiniz hazırlanıyor. Kısmını bana aktarıyor ve net bir bilgi verememekteler şimdi ön ödeme yapılır yapılmaz onaylanan cihaz nasıl olur da 1 haftadır kargoya verilemez mağduriyetimin bir an önce giderilmesini cihazın ivedilikle teslim edilmesini talep ediyorum",
        cevaplandi: cevaplanmaDurumu ,
        tarih: "17/12/2022  pazar",
    }

    let sikayetData15 = {
        isim: "Betül",
        firma: "Vakıfbank",
        baslik: "2bin Altı Borçları Tasfiyesi VakıfBank Uymuyor",
        icerik: "Son çıkan kanun gereği 2 bin altı borçlar tavsiye kararı almasına rağmen VakıfBank bu maddeye uymuyor özellikle devlete ait borçlar öncelik olmasına müşteri hizmetleri aradığım zaman ana borcumuz 600 TL Mevla olmasına rağmen faizi birlikte 1147 TL faiz uygulanıyor. Ben bir an önce ya tasfiye kanununa uymalı ya da sadece ana para hariç faizin silinmesini istiyorum. Lütfen gereken cevap gelmediği takdirde BDDK ® şikayet edeceğim",
        cevaplandi: cevaplanmaDurumu ,
        tarih: "17/12/2022  pazar",
    }



    sikayetler.push(
        sikayetData1,
        sikayetData2,
        sikayetData3,
        sikayetData4,
        sikayetData5,
        sikayetData6,
        sikayetData7,
        sikayetData8,
        sikayetData9,
        sikayetData10,
        sikayetData11,
        sikayetData12,
        sikayetData13,
        sikayetData14,
        sikayetData15,
    )


    localStorage.setItem("tumSikayetlerLocal", JSON.stringify(sikayetler))
} else {
    sikayetler = localItems
}



function showHtml() {
    let tumSikayetlerLocal = JSON.parse(localStorage.getItem("tumSikayetlerLocal")).reverse()
    console.log(tumSikayetlerLocal.length)




    let i = 0;
    for (i == 0; i <= 2; i++) {
        let isim = tumSikayetlerLocal[i].isim;
        let baslik = tumSikayetlerLocal[i].baslik;
        let marka = tumSikayetlerLocal[i].firma;
        let icerik = tumSikayetlerLocal[i].icerik;
        let tarih = tumSikayetlerLocal[i].tarih;





        sikayetlerDiv.innerHTML += `
        <div class="sikayet-card">
        <div class="ust-kisim">
            <div class="sikayetci-bilgi">
                <img src="./pictures/pp.png">
                <div class="isim-ve-tarih">
                    <h5 class="sikayetci-ismi">${isim}</h5>
                    <i class="sikayet-tarihi">${tarih} </i>
                </div>
            </div>
            
        </div>

        <div class="sikayet-icerik">
            <div class="baslik-ve-firma mt-4 mb-4">
                <div class="baslik">
                    <h4>${baslik} </h4>
                </div>
                <div class="marka">Şikayet edilen marka: <b>${marka}</b> </div>
            </div>
            <div class="icerik">
            ${icerik}
            </div>
        </div>
    </div>

            `

    }

}

showHtml()

silDom.addEventListener("onclick", deleteItem)

function deleteItem() {

}
