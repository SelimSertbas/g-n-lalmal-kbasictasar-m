const hayirButonu = document.getElementById('hayirButonu');
const evetButonu = document.getElementById('evetButonu');
const popup = document.getElementById('popup');
const popupKapat = document.getElementById('popupKapat');

hayirButonu.addEventListener('click', () => {
    const buttonRect = hayirButonu.getBoundingClientRect();

    // Sayfanın genişliği ve yüksekliği (viewport)
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;

    // Butonun genişliği ve yüksekliği
    const buttonWidth = buttonRect.width;
    const buttonHeight = buttonRect.height;

    // Butonun gidebileceği maksimum X ve Y koordinatları (taşmayı engellemek için)
    const maxX = pageWidth - buttonWidth;
    const maxY = pageHeight - buttonHeight;

    // Rastgele X ve Y koordinatları oluştur
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Butonu yeni rastgele konuma taşı
    hayirButonu.style.position = 'absolute';
    hayirButonu.style.left = `${randomX}px`;
    hayirButonu.style.top = `${randomY}px`;
});

evetButonu.addEventListener('click', () => {
    popup.style.display = 'flex';
});

popupKapat.addEventListener('click', () => {
    popup.style.display = 'none';
});