


       var titles = [
    "I ate a crayon",
    "Very Educational Content",
    "Carrot Cake Is Good",
    "I Bad At Math",
    "Birds>>>Other Animals",
    "Math Is Evil",
    "I G0od At Engrish",
    "I Bad At Math",
    "😉",
    "Walmart>>>Target",
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

function changeTitle() {
    var titleIndex = Math.floor(Math.random() * titles.length);
    document.getElementById("dynamicTitle").innerText = titles[titleIndex];
}

        setInterval(changeTitle, 6000);

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



document.addEventListener('DOMContentLoaded', function () {

  var element = document.querySelector('.transition-element');
  element.classList.add('initial-state');

  setTimeout(function () {
    element.classList.add('target-state');
  }, 100); 
});
