function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'tr',   // Orijinal sayfa dili
    includedLanguages: 'de', // Hedef diller: Almanca
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

function translatePage() {
  const frame = document.querySelector('.goog-te-banner-frame');
  if (frame) {
    frame.style.display = 'none';
  }
  const skiptranslate = document.querySelector('.skiptranslate');
  if (skiptranslate) {
    skiptranslate.style.display = 'none';
  }
}

window.onload = function () {
  setTimeout(function () {
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'https://translate.google.com/translate?sl=tr&tl=de&u=' + encodeURIComponent(window.location.href);
    document.body.appendChild(iframe);
  }, 500);
}