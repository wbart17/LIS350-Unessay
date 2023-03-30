// select image element
const img = document.getElementById('images');

let toggle = true;
img.addEventListener('click', function(){
  
  toggle = !toggle;
  if(toggle){
    images.src = 'images\\Unessay Layer 1.jpg';
  }else{
    images.src = 'images\\Unessay Layer 2.jpg';
    images.src = 'images\\Unessay Layer 3.jpg';
  }
})
