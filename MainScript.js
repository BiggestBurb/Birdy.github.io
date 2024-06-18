window.addEventListener('scroll', function() {
  var content = document.getElementById('content');
  content.style.opacity = 1 - window.pageYOffset / 500;
});


var titles = [
  "I ate a crayon",
  "Very Educational Content",
  "Carrot Cake Is Good",
  "I Bad At Math",
  "Birds Best Animal",
  "Math Is Evil",
  "I G0od At Engrish",
  "I Bad At Math",
  "😉",
  "Skittles Yummy",
  "I like stew",
  "Be Nice",
  "Bookmark the site!",
  "I Ran With Scissors, And Lived!",
  "I ran out of ideas",
  "Mario Bros 3 Is Peak",
  "Carrots Can't Fly",
  "Cream Soda Is Awesome",
  "Birds Are Best Animal",
  "THE ONE PIECE IS REALLLLLLL"
];

var frames = [
    '/favicon/Frame1.gif',
    '/favicon/frame2.gif',
    '/favicon/frame3.gif',
    '/favicon/frame4.gif',
    '/favicon/frame5.gif',
    '/favicon/frame6.gif',
    '/favicon/frame7.gif',
    '/favicon/frame8.gif'
]; 

var frameIndex = 0;
var faviconElement = document.getElementById('favicon');

function changeFavicon() {
    faviconElement.href = frames[frameIndex];
    frameIndex = (frameIndex + 1) % frames.length;
}

setInterval(changeFavicon, 220);


document.addEventListener('DOMContentLoaded', function() {

  var element = document.querySelector('.transition-element');
  element.classList.add('initial-state');

  setTimeout(function() {
    element.classList.add('target-state');
  }, 100);
});

const quotes = [
  "That Burb",
  "THE BIGGEST BURB",
  "That BURB",
  "What That Burb Birdy Been Up To?",
  "The Biggest BURB",
  "Birdy Type Of Person Who Would Say Bye Bye Boo Boo Bear To His Boss",
  "Im Birdy THAT Burb Its Just What I Am",
  "Yo Birdy Been A Lazy Mf",
  "Yo When The Last Time Birdy Left His Room?"
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
window.onload = function() {
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = getRandomQuote();
};