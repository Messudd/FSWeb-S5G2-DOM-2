import './less/index.less';

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
const header_h1 = document.querySelector('h1');
function alertUse() {
  alert(`Basliga tiklandi :)`);
}
header_h1.addEventListener('click', alertUse);
// Kodlar buraya gelecek!

const linkler = document.querySelectorAll('.main-navigation .nav a');
const head_nav = document.querySelector('.main-navigation');

head_nav.addEventListener('click', function () {
  head_nav.style.cssText =
    'background-color:darkred;color:#ffff !important;border:1px solid transparent';
  linkler.forEach((link) => {
    link.style.cssText = 'color: #ffff !important';
    link.addEventListener('mouseover', (event) => {
      event.target.style.cssText =
        'text-decoration: underline; color: #ffff !important; transform: scale(1.2)';
    });
    link.addEventListener('mouseout', (event) => {
      event.target.style.cssText =
        'text-decoration: none; color: #ffff !important; transform: scale(1)';
    });
  });
});

linkler.forEach((link) => {
  link.addEventListener('mouseover', () => {
    link.style.cssText = 'text-decoration: underline; transform : scale(1.2)';
  });
  link.addEventListener('mouseout', () => {
    link.style.cssText = 'text-decoration: none';
  });
});

function zoom(event, element) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  element.style.cssText = `transform: scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.intro h2');
el.addEventListener('wheel', (event) => zoom(event, el));
// el.onwheel = zoom;

window.addEventListener('load', (event) => {
  console.log('Butun icerik yulendi ...');
});

const imgList = document.querySelectorAll('img');

imgList.forEach((img) => {
  img.addEventListener(
    'mouseover',
    (event) => {
      event.target.style.cssText = 'transform : scale(1.2)';
      img.addEventListener('wheel', (event) => zoom(event, img));
    },
    { once: true }
  );
  img.addEventListener('mouseout', (event) => {
    event.target.style.cssText = 'transform : scale(1)';
  });
});
