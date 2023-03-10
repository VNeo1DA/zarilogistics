//hamburger menu function
function hamburger(){
	let menu = document.getElementById("menu-links");
	let logo = document.getElementById("zar-logo");
	if(menu.style.display === "block" && logo.style.display === "none"){
		menu.style.display = "none";
		logo.style.display = "block";
	}else{
		menu.style.display = "block";
		logo.style.display = "none";		
	}
}