const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;

const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progressbar-wrapper");

const percentage = [90, 80, 75, 65, 65, 60];

window.addEventListener("scroll", () => {
	mainFn();
});

const mainFn = () => {
	if (window.pageYOffset >= navbarOffsetTop) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}

	sections.forEach((section, i) => {
		if (window.pageYOffset >= section.offsetTop - 15) {
			navLink.forEach((navLink) => {
				navLink.classList.remove("change");
			});
			navLink[i].classList.add("change");
		}
	});

	if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
		document.querySelectorAll(".progress-percentage").forEach((el, i) => {
			el.style.width = `${percentage[i]}%`;
			el.previousElementSibling.firstElementChild.textContent = percentage[i];
		});
	}
};

mainFn();

window.addEventListener("resize", () => {
	window.location.reload();
});
