function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  


}
(function () {
	function id(v) {
		return document.getElementById(v);
	}
	function loadbar() {
		var ovrl = id("overlay"),
			stat = id("progstat"),
			svg = id("svgLoader"),
			img = document.images,
			c = 0;
		tot = img.length;

		function imgLoaded() {
			c += 1;
			var perc = (((100 / tot) * c) << 0) + "%";
      
			stat.innerHTML = "Welcome to Yashraj Limkar's Portfolio <br> Loading " + perc;
      

			const totalLength = 2630;
			let displayedLength = (totalLength * (((100 / tot) * c) << 0)) / 100;
			svg.style.strokeDasharray = `${displayedLength} ${totalLength}`;

			if (c === tot) return doneLoading();
		}
		function doneLoading() {
			setTimeout(function () {
				ovrl.classList.add("loaded");
				setTimeout(function () {
					ovrl.style.display = "none";
				}, 1200);
			}, 800);
		}
		for (var i = 0; i < tot; i++) {
			var tImg = new Image();
			tImg.onload = imgLoaded;
			tImg.onerror = imgLoaded;
			tImg.src = img[i].src;
		}
	}
	document.addEventListener("DOMContentLoaded", loadbar, false);
})();

// Function to scroll to the top of the page smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show/hide the button based on scroll position
window.addEventListener('scroll', function() {
  var scrollToTopBtn = document.getElementById('goToTopBtn');
  if (window.scrollY >= 500) { // Adjust the value to control when the button appears
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});



