
const btns = document.querySelectorAll(".filter_btn");
const storeProducts = document.querySelectorAll(".prodn");
let head = document.getElementsByClassName("prod_head");
for(i=0; i< btns.length; i++){
	btns[i].addEventListener("click",(e) =>{
		e.preventDefault();
		const filter = e.target.dataset.filter;
		var x = e.target.innerText;
		for(z=0;z<btns.length; z++)
			btns[z].classList.remove("active");
	e.target.classList.add("active");
		document.getElementById("head").innerText = x;
		storeProducts.forEach((product) =>{
			if(filter == "all"){
				product.style.display = "flex"
			}else{
				if(product.classList.contains(filter)){
				product.style.display = "flex"
				}else{
				product.style.display = "none"
				}
			}
		})
	})
}
let back = document.querySelector(".back");
let bar = document.querySelector(".bar");
function nav2(){    
        bar.classList.remove('active');
}
function nav(){
        bar.classList.toggle('active');
}
$(".main_carousel").flickity({
 cellAlign: 'left',
 wrapAround: true,
 freeScroll: true
});