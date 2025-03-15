import fetchMenu from "./api.js";
import { elements } from "./ui.js";
import { renderCard } from "./ui.js";


//sayfa yüklendiğinde api'ya istek at ve gelen veriyi dataya ata
// DOMContentLoaded olayı, JavaScript’te belgenin HTML içeriği tamamen yüklendiğinde ve ayrıştırıldığında tetiklenen bir olaydır. 
// Bu, tüm kaynakların (resimler, CSS, harici scriptler) yüklenmesini beklemeden sadece HTML belgesinin tamamlandığında çalışmasını sağlar.
document.addEventListener("DOMContentLoaded", async () => {
          // Apidan veri al
          const data = await fetchMenu();
          // const data = await fetchMenu(); // This will log a Promise object to the console
          // console.log(data);


          // Api'dan gelen veri ile arayüzü dinamik şekilde renderla
          renderCard(data);

          // Inputlara bir olay izleyicisi ekle ve değişen inputun categorisine erişip bu categorideki ürünleri render et

          elements.inputs.forEach((input) => {
                    // querySelectorAll metodu ile elde edilen inputs bir HtmlCollection olduğundan buna direkt addEventListener ekleyemeyiz.Bu sebeple bu HtmlCollection'ı dönüp her bir elemanı ayırdık.
                    input.addEventListener("change", () => {
                              // Seçili input'ın id'sini al
                              const selected = input.id;

                              // console.log(selected);

                              // ! Eğer seçili kategori all ise tüm ürünleri ama bunun dışında bir kategori ise buna ait ürünleri renderla

                              if (selected === "all") {
                                        renderCard(data);
                              } else {
                                        // selected'ye menu elemanlarını dön ve seçili kategoriye sahip elemanları al
                                        //                                         data → İçinde nesneler bulunan bir dizi (array).
                                        // .filter(...) → Dizinin içindeki öğeleri belirli bir koşula göre süzer.
                                        // item.category == selected → category değeri, selected değişkenine eşit olan öğeleri döndürür.
                                        // filtred → Filtrelenmiş öğeleri içeren yeni bir dizi (orijinal data değişmez).

                                        const filtred = data.filter((item) => item.category == selected);

                                        // Filtrelenen elemanları render et
                                        renderCard(filtred);
                              }
                    });
          });


});

// console.log(elements.menuList);
// console.log(elements.inputs);


