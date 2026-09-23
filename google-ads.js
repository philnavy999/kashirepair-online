window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'AW-18468324066');

function gtag_report_conversion(url) {
  var redirected = false;
  var callback = function () {
    if (!redirected && typeof url !== 'undefined') {
      redirected = true;
      window.location.href = url;
    }
  };
  gtag('event', 'conversion', {
    send_to: 'AW-18468324066/KumKCKrYjYIdEOKFseZE',
    value: 1.0,
    currency: 'INR',
    event_callback: callback
  });
  window.setTimeout(callback, 1500);
  return false;
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href="https://wa.link/kashi"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      gtag_report_conversion(link.href);
    });
  });
});
