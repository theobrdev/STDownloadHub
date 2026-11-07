/* Seleção de idioma: English / Português (Brasil)
   - O texto em inglês fica no próprio HTML.
   - Para traduzir um elemento, coloque data-i18n="chave" nele e
     adicione a tradução em translations.pt abaixo (aceita HTML).
   - Os links "(about it)" (classe .about) são tratados à parte. */
(function () {
  var STORAGE_KEY = 'stLang';

  var translations = {
    pt: {
      'intro': 'Bem-vindo ao Slendytubbies Download Hub (ST Download Hub)! Aqui, você encontrará o lugar (não) oficial para baixar todos os jogos e fangames de Slendytubbies, com informações tiradas diretamente da wiki. Downloads aqui:',
      'cat-st1': 'Categoria Slendytubbies 1',
      'cat-st2': 'Categoria Slendytubbies 2',
      'cat-2d': 'Categoria Slendytubbies 2D',
      'cat-other': 'Outros Jogos',
      'lost1': 'Infelizmente, V1.0, V1.1 e V2.5 são mídia perdida (lost media)',
      'lost2': 'Infelizmente, V1.6 Legacy Coming Soon, V1.0.1, V1.1 e V1.2 são mídia perdida (lost media)'
    }
  };

  var aboutText = { en: '(about it)', pt: '(sobre)' };
  var htmlLang = { en: 'en', pt: 'pt-BR' };
  var languages = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português (Brasil)' }
  ];

  function getSaved() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return (v === 'en' || v === 'pt') ? v : 'en';
    } catch (e) {
      return 'en';
    }
  }

  function save(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  var i18nEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  i18nEls.forEach(function (el) { el.setAttribute('data-en', el.innerHTML); });

  var buttons = [];

  function apply(lang) {
    i18nEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var pt = translations.pt[key];
      el.innerHTML = (lang === 'pt' && pt) ? pt : el.getAttribute('data-en');
    });

    Array.prototype.forEach.call(document.querySelectorAll('.about'), function (el) {
      el.textContent = aboutText[lang];
    });

    document.documentElement.lang = htmlLang[lang];
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  function buildSelector() {
    var box = document.createElement('div');
    box.className = 'lang-switch';
    box.setAttribute('role', 'group');
    box.setAttribute('aria-label', 'Language / Idioma');

    languages.forEach(function (l) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = l.label;
      b.setAttribute('data-lang', l.code);
      b.addEventListener('click', function () {
        save(l.code);
        apply(l.code);
      });
      buttons.push(b);
      box.appendChild(b);
    });

    document.body.appendChild(box);
  }

  buildSelector();
  apply(getSaved());
})();