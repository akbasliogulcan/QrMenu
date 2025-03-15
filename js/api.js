// Bu kod, bir JavaScript fonksiyonunun fetch API'sini kullanarak bir JSON dosyasından veri çekmesini sağlıyor. Şimdi adım adım açıklayalım:
// -fetchMenu adlı bir asenkron fonksiyon tanımlanıyor.
// -async ifadesi, fonksiyonun içinde await kullanılmasına izin verir.
// -fetch("../style/db.json") komutu ile belirtilen JSON dosyasına (API gibi düşünülebilir) bir HTTP isteği gönderiliyor.
//- await ifadesi, bu isteğin tamamlanmasını bekler ve sonucu res değişkenine atar.
// -res.json() metodu, gelen JSON formatındaki veriyi JavaScript nesnesine çevirir.
// -await ile JSON verisinin tamamen yüklenmesi beklenir ve data değişkenine atanır.
// -JSON dosyasında bulunan menu adlı veriyi döndürür.
// -fetchMenu fonksiyonu dışa aktarılıyor (export ediliyor).
// -Böylece başka dosyalarda import fetchMenu from "./dosyaAdi" şeklinde kullanılabilir.


const fetchMenu = async () => {
          // Api'a istek at
          // JavaScript'te fetch, ağ (network) üzerinden veri almak için kullanılan yerleşik bir fonksiyondur.
          //  await fetch, bu isteğin tamamlanmasını bekleyerek asenkron (async) işlemi senkron gibi yazmamıza olanak tanır.
          const res = await fetch("../style/db.json");

          // Api'dan gelen cevapı json formatına çevir
          const data = await res.json();
          // res.json();, Fetch API tarafından döndürülen HTTP yanıtını (response) JSON formatına çevirmek için kullanılan bir JavaScript metodudur.

          // Data içerisindeki menu 'yü bu fonksiyon çağırıldığında return et
          // api dan gelen veriye data dedik ve içinden menu yu çekiyoruz .
          return data.menu;
};

// Burada export default fetchMenu;, fetchMenu fonksiyonunu başka bir dosyada çağırabilmemize olanak tanır.
export default fetchMenu;