//url lere ayırmak için burayı kullanıyoruz
// Çok sayfalı uygulamalarda bir sayfa birden çok eleman için ortak ise bu sayfa dinamik şekilde render edilir.
// Bunu yaparken ilk olarak url'e bir parametre geçilir.Sonrasında bu parametre url'den alınarak sayfa içeriğinin renderlanması sağlanır.
// Javascript URLSearchParams classı sayesinde url'deki arama parametrelerini alıp kullanabiliriz.

import fetchMenu from "./api.js";
import { elements, renderDetailPage, renderNotFoundPage } from "./ui.js";

// Tarayıcının window.location.search özelliği, URL'in sorgu dizisini (query string) döndürür.
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));    //string olan id yi integer a çeviriyoruz
// const id = +params.get("id");    //string olan id yi integer a çeviriyoruz yukarıdakiyle aynı koda denk geliyor.
// Bu kod, URL'den id parametresini alır ve bu id'yi bir değişkene atar.

document.addEventListener("DOMContentLoaded", async () => {
          // Api'dan menü elemanlarını al
          const data = await fetchMenu();

          // Detay sayfasında renderlanacak ürünü bul
          const product = data.find((item) => item.id === id);




          // Eğer ürün  varsa renderDetailPage fonksiyonunu çalıştır ama yoksa renderNotFoundPage fonksiyonunu çalıştır

          if (!product) {
                    renderNotFoundPage(elements.detailPage);
          } else {
                    renderDetailPage(product, elements.detailPage);
          }
});
