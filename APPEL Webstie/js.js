/*-------------------------- loading --------------------------*/

let loader = document.querySelector(".center");
setTimeout(function(){loader.style.display = 'none';}, 4000);

/*-------------------------- about --------------------------*/

let readmore = document.querySelector('.about .content .readmore');
let text = document.querySelector('.about .text');

readmore.addEventListener("click", (e) => {
	text.classList.toggle('show-more');
	if(readmore.innerHTML === 'Read More'){
		readmore.innerHTML = 'Read Less';}
	else{readmore.innerHTML = 'Read More';}})

/*-------------------------- mac --------------------------*/

let preveiws = document.querySelector('.previews');
let viewBox = preveiws.querySelectorAll('.preview');

document.querySelectorAll('.mac .boxs .img-area').forEach(product =>{
  product.onclick = () =>{
    preveiws.style.display = 'flex';
    let dname = product.getAttribute('data-name');
	  
    viewBox.forEach(preview =>{
      let dtarget = preview.getAttribute('data-target');
      if(dname === dtarget){preview.classList.add('active');}})
}})

viewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiws.style.display = 'none';}});

/*-------------------------- whatch --------------------------*/

document.querySelectorAll('.whatch .boxs .box img').forEach(box => {
	box.onclick = () => {
		document.querySelector('.whatch .show').style.display = 'block';
		document.querySelector('.whatch .show img').src = box.getAttribute('src')}})
	
document.querySelector('.whatch .show span').onclick = () => {
	document.querySelector('.whatch .show').style.display = 'none';}

/*-------------------------- stats --------------------------*/

let nums = document.querySelectorAll(".stats .box .num");
let stats = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop - 200) {
    if (!started) {nums.forEach((num) => startCount(num));}
    started = true;}};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {clearInterval(count);}}, 1000 / goal);}

/*-------------------------- contact --------------------------*/

document.querySelector('.contact form .btn').onclick = () => {
		document.querySelector('.contact .show').style.display = 'block';}
	
document.querySelector('.contact .show .pop button').onclick = () => {
	document.querySelector('.contact .show').style.display = 'none';}


