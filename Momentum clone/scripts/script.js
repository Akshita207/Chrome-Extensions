document.addEventListener('DOMContentLoaded', function(){
	console.log("hi");
	const images = ["img2.jpg"];
	const image = images[Math.floor(Math.random() * images.length)]
	console.log("img");
	document.getElementById("image").setAttribute(
		"src",
		`./images/${image}`
	);

	var focusInput = document.getElementById("focus")
	chrome.storage.sync.get(["focus"], function(result){
		if(result.focus){
			focusInput.value = result.focus
		}
	});

	focusInput.addEventListener('keypress', function(e){
		chrome.storage.sync.set({focus: e.target.value});
	});

}, false);