const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('active'));

document.querySelectorAll('#nav a').forEach(link=>{
  link.addEventListener('click',()=>nav.classList.remove('active'));
});

const topBtn=document.getElementById('topBtn');
window.addEventListener('scroll',()=>{
  topBtn.style.display=window.scrollY>300?'block':'none';
});

topBtn.addEventListener('click',()=>{
  window.scrollTo({top:0,behavior:'smooth'});
});

document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  alert('Thank you! Your message has been received.');
  e.target.reset();
});
