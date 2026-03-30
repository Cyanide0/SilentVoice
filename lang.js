/**
 * lang.js — Ishara AI · Shared Language Toggle
 * Saves the user's language choice to localStorage and restores it on every page.
 */
(function () {
  var STORAGE_KEY  = 'ishara-lang';
  var DEFAULT_LANG = 'ar';

  var html    = document.documentElement;
  var pillAr  = document.getElementById('pillAr');
  var pillEn  = document.getElementById('pillEn');
  var toggle  = document.getElementById('langToggle');
  var titleEl = document.querySelector('title');

  function applyLang(lang) {
    html.lang = lang;
    html.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    if (pillAr) pillAr.classList.toggle('active', lang === 'ar');
    if (pillEn) pillEn.classList.toggle('active', lang === 'en');
    if (titleEl) {
      var label = titleEl.getAttribute('data-' + lang);
      if (label) document.title = label;
    }
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = html.lang === 'ar' ? 'en' : 'ar';
      document.body.classList.add('lang-switching');
      setTimeout(function () {
        applyLang(next);
        localStorage.setItem(STORAGE_KEY, next);
        document.body.classList.remove('lang-switching');
      }, 180);
    });
  }

  applyLang(localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG);
})();
