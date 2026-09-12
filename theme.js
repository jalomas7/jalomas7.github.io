// Apply the initial theme before the stylesheet or React can paint the page.
(function () {
  var theme = 'light';
  var saved;
  try { saved = window.localStorage.getItem('theme'); } catch (_) {}
  if (saved === 'light' || saved === 'dark') {
    theme = saved;
  } else {
    try {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark';
    } catch (_) {}
  }
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#111923' : '#f7f8fa';
}());
