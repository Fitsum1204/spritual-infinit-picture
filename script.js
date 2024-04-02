const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let ready = false;
let imagesLoaded = 0;
let totalImages =0;



let imgArray = new Array(50);
for (i=0;i<50;i++){
   imgArray[i]=new Image();
    imgArray[i].src="./Spritual/"+(i+1)+".jpg";
    console.log(imgArray[i]);
}

function imageLoaded() {
    
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready =true;
        loader.hidden = true;
        
    }
}
// display photos
function displayPhots() {
    imagesLoaded =0;
    totalImages =imgArray.length;
    imgArray.forEach((phots ,i)=> {

        const img = document.createElement('img');
        img.setAttribute('src',`./Spritual/${i+1}.jpg`);
        img.addEventListener('load' , imageLoaded);
        imageContainer.appendChild(img);
    });

window.addEventListener('scroll' , () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight -100  && ready){
        ready = false;
        displayPhots();
        console.log("whhh")
    }
});
    
}

displayPhots();
