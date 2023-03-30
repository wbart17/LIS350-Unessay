// select image element
const img = document.getElementById('images');

let toggle = true;
img.addEventListener('click', function(){
  
  toggle = !toggle;
  if(toggle){
    img.src = 'img\\Unessay Layer 1.jpeg';
  }else{
    img.src = 'img\\Unessay Layer 2.jpeg';
  }
})
