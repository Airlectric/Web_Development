(function () {
"use strict"
    const myImg =['p1.jpg','p2.jpg','p3.jpg','p4.jpg','p5.jpg','p6.jpg','p7.jpg','p8.jpg','p9.jpg','p10.jpg']
  
  let fImg = 0;
  
  document.querySelector('#next').onclick=  nextImg;
  
  function nextImg(){
      fImg++;
  if(fImg > myImg.length-1){fImg=0} document.querySelector('#myimage').src= myImg[fImg]
  }
  
  document.querySelector('#previous').onclick= prePhoto;
  function prePhoto(){
      fImg--;
   if(fImg < 0) {fImg = myImg.length-1} document.querySelector('#myimage').src =myImg[fImg];
  }
})();
