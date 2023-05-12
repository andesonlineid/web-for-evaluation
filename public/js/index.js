// Get html / selector / id of html element
// let registButton = document.querySelector('.btn-regist');
let bodyElement = document.body;

// Create element for pop up Ads
let popupContainer = document.createElement('section');
let popupAds = document.createElement('section');
let adsContent = document.createElement('img');
let closeButton = document.createElement('button');



popupContainer.setAttribute('id','popup-ads-container');
popupAds.setAttribute('class','popup-ads');
adsContent.setAttribute('src','http://localhost/procedural-web/public/img/popup-ads.jpg');
adsContent.setAttribute('title','ads-image');
adsContent.setAttribute('alt','ads-image');
adsContent.setAttribute('class','img-ads-content');
closeButton.setAttribute('class','btn-close-ads');
closeButton.innerHTML = '<h1>X<h1>';

// append ads content
popupContainer.appendChild(popupAds);
popupAds.appendChild(adsContent);
popupAds.appendChild(closeButton);

// run event

window.onload = bodyElement.appendChild(popupContainer);

closeButton.addEventListener('mouseover', event => {

    closeButton.style.backgroundColor = 'rgb(255, 59, 59)';
    closeButton.style.color = 'rgb(255, 255, 255)';
    closeButton.style.transition = 'all ease-in-out 0.4s';

});

closeButton.addEventListener('mouseleave',function() {
    closeButton.style.backgroundColor = 'rgb(255, 255, 255)';
    closeButton.style.color = 'black';
    closeButton.style.transition = 'all ease-in-out 0.4s';
})

closeButton.addEventListener('click', () => {
    popupContainer.style.transition = 'all ease-in-out 0.4s';
    bodyElement.removeChild(popupContainer);
})

// registButton.addEventListener('click',(event) => {
    
//     window.open('../../App/');

//     event.preventDefault();
// });