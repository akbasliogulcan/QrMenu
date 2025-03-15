//datayı elemanalara renderlamak için yani arayüznden JS e çekmek için.
// Html'den Js'e çekilecek elemanları bir obje ile yönetmek için
// Bu kod, HTML sayfasındaki id="menu-list" olan öğeyi JavaScript ile seçip bir nesneye (object) atamaktadır.
// 🔹 document.querySelector("#menu-list")
// HTML içindeki id="menu-list" olan öğeyi seçer.
// querySelector() ile #menu-list CSS seçici gibi kullanılır.
// Eğer öğe bulunamazsa null döner.
// 🔹 const elements = { menuList: ... }
// Seçilen öğe (menu-list) bir nesne (elements) içine atanır.
// Daha sonra kolayca erişmek için bir anahtar (menuList) atanmıştır.
// Bu sayede öğeye elements.menuList ile ulaşılabilir.

const elements = {
  menuList: document.querySelector("#menu-list"),
  inputs: document.querySelectorAll("input"),
  detailPage: document.querySelector("#outlet"),    //<div id="outlet" class="container my-5 d-flex flex-column gap-5 px-5">

}

// elements.menuList.innerHTML = cardsHtml;

// Arayüze menu cartları render edecek fonksiyon  
const renderCard = (data) => {
  // Bu fonksiyona dışarıdan verilen datayı dön ve her data için bir Html oluştur.
  const cardsHtml = data.map(
    (menu) => `<a href='/detail.html?id = ${menu.id} class= "d-flex flex-column flex-md-row text-dark gap-3" id="card">
                <img class="rounded img-fluid shadow" src="${menu.img}" alt="card-image"/>
                <div>
                  <div class="d-flex justify-content-between">
                    <h5>${menu.title}</h5>
                    <p class="fw-bold text-success">${(menu.price * 40).toFixed(2)}₺</p>
                  </div>
                  <p class="lead">
                 ${menu.desc}
                  </p>
                </div>
              </a>`
  )
    .join(" ");

  // Oluşturulan bu html'i arayüze aktar
  //   Bu satır, oluşturulan HTML kartlarını (cardsHtml), menuList adlı HTML elementinin içine ekler.
  // Yani, menuList içinde menü öğelerini gösterir.
  elements.menuList.innerHTML = cardsHtml;
};

//aşağıdaki fonsiyon id si verilen ürünü alıp detay sayfasına render eder.
// Bu fonksiyon, verilen ürün ve outlet bilgilerine göre detay sayfasını render eder.

//product=id
const renderDetailPage = (product, outlet) => {
  // console.log(product);
  // Fonksiyona dışarıdan verilen outlet değerinin içeriğini oluştur
  outlet.innerHTML = `  <div class="d-flex justify-content-between">
                              
                              <a href="./index.html">
                                        <img src="./images/home.png" width="35px" alt="home-icon">
                              </a>
                            
        <p>anasayfa / ${product.category} / ${product.title}</p>
                    </div>
                    
                    <h1 class="text-center">Süzme Pankek</h1>
                   
                    <img src="${product.img}" style="max-height: 400px;" class="rounded object-fit-cover shadow"
                              alt="product-image">
                   
                    <h4>Ürünün Kategorisi: <span class="text-success">${product.category}</span></h4>

 <h4>Ürünün Fiyatı: <span class="text-success">${(product.price * 50).toFixed(2)} ₺</span></h4>

                    <p class="lead">
                              ${product.desc}
                    </p>`;

};


//not found saysafası render etmek için
const renderNotFoundPage = (outlet) => {

  outlet.innerHTML = `

  <div class="main_wrapper">
   <div class="main">
     <div class="antenna">
       <div class="antenna_shadow"></div>
       <div class="a1"></div>
       <div class="a1d"></div>
       <div class="a2"></div>
       <div class="a2d"></div>
       <div class="a_base"></div>
     </div>
     <div class="tv">
       <div class="cruve">
         <svg
           class="curve_svg"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           viewBox="0 0 189.929 189.929"
           xml:space="preserve"
         >
           <path
             d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
         C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
           ></path>
         </svg>
       </div>
       <div class="display_div">
         <div class="screen_out">
           <div class="screen_out1">
             <div class="screen">
               <span class="notfound_text"> NOT FOUND</span>
             </div>
             <div class="screenM">
               <span class="notfound_text"> NOT FOUND</span>
             </div>
           </div>
         </div>
       </div>
       <div class="lines">
         <div class="line1"></div>
         <div class="line2"></div>
         <div class="line3"></div>
       </div>
       <div class="buttons_div">
         <div class="b1"><div></div></div>
         <div class="b2"></div>
         <div class="speakers">
           <div class="g1">
             <div class="g11"></div>
             <div class="g12"></div>
             <div class="g13"></div>
           </div>
           <div class="g"></div>
           <div class="g"></div>
         </div>
       </div>
     </div>
     <div class="bottom">
       <div class="base1"></div>
       <div class="base2"></div>
       <div class="base3"></div>
     </div>
       <a href='../style/index.html' class='not-founded-link'>Ana Sayfaya Git</a>
   </div>
   <div class="text_404">
     <div class="text_4041">4</div>
     <div class="text_4042">0</div>
     <div class="text_4043">4</div>
   </div>
 
 </div>  
 `;




};

// Bu kod, verilen menü verilerini alarak, her bir menü öğesi için HTML kartları oluşturur ve bunları "menu-list" adlı bir HTML elementine ekler.
export { elements, renderCard, renderDetailPage, renderNotFoundPage };