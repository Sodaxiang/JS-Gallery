var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i=1;i<=5;i++){
  var newImage = document.createElement('img');
  var imgSrc="./images/pic"+i+".jpg";
  newImage.setAttribute('src', imgSrc);
  thumbBar.appendChild(newImage);
}

thumbBar.onclick=function(e){
 	  var clickImageSrc=e.target.getAttribute("src");
     displayedImage.setAttribute("src",clickImageSrc);
   }

/* Wiring up the Darken/Lighten button */
//alert(btn.textContent);
btn.onclick=function(){
	if(btn.textContent==="Darken"){
		// alert("Lighten");
		btn.textContent="Lighten";
		overlay.style.backgroundColor="rgba(0,0,0,0.5)";
	}else if(btn.textContent==="Lighten"){
		btn.textContent="Darken";
		overlay.style.backgroundColor="rgba(0,0,0,0)";
	}
}


