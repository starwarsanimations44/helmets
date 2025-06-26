// ================================================================================================================= //
//                                                                                                                   //
//                                              Star Wars Animations 44                                              //
//                                                                                                                   //
// ================================================================================================================= //

const pause = 1000; // miliseconds

var sources = [];
var backgroundIsDisplayed = true;

function toggleBackground() {
	"use strict";
	backgroundIsDisplayed = !backgroundIsDisplayed;
	const helmetsBackgrounds = document.getElementsByClassName("imgBackground");
	var backgroundColor = backgroundIsDisplayed ? "transparent" : "#ffffff";
	const buttons = document.getElementsByClassName("button");
	for (var i = 0; i < buttons.length; i++) {buttons[i].style.backgroundColor = backgroundColor;}
	for (var j = 0; j < helmetsBackgrounds.length; j++) {
		if (backgroundIsDisplayed) {
			helmetsBackgrounds[j].src = sources[j];
		} else {
			sources[j] = helmetsBackgrounds[j].src;
			helmetsBackgrounds[j].src = "../common/void.png";
		}
	}
}

const helmets = document.getElementsByClassName("img-random-helmet");
const helmetsSources = [
	"empire/common/coa.png",
	"empire/common/pur.png",
	
	"mandalorians/common/AxeWoves.png",
	"mandalorians/common/BobaFett.png",
	"mandalorians/common/DinDjarin.png",
	"mandalorians/common/JangoFett.png",
	"mandalorians/common/PreVizsla.png",

	"republic/common/arc_I.png",
	"republic/common/arc_II.png",
	"republic/common/arf_I.png",
	"republic/common/arf_II.png",
	"republic/common/bar_II.png",
	"republic/common/Captain_tro_I.png",
	"republic/common/col_I.png",
	"republic/common/col_II.png",
	"republic/common/Commander_tro_I.png",
	"republic/common/eng_I.png",
	"republic/common/eng_II.png",
	"republic/common/Lieutenant_tro_I.png",
	"republic/common/par_II.png",
	"republic/common/pil_I.png",
	"republic/common/pil_IIA.png",
	"republic/common/pil_IIB.png",
	"republic/common/sco_II.png",
	"republic/common/Sergeant_tro_I.png",
	"republic/models/clone-trooper-I.png",
	"republic/models/clone-trooper-II.png"

];

function randomSource() {
	"use strict";
	setInterval(
		function() {
			for (var i = helmets.length - 1; i >= 0; i--) {
				const randomIndex = Math.floor(Math.random() * helmetsSources.length);
				helmets[i].src = helmetsSources[randomIndex];
			}
		},
		pause * 2
	);
}

var languageTitle;

function englishTo(language) {
	"use strict";
	switch (language) {
		case "aurebesh":
			languageTitle = document.getElementById("aurebesh");
			break;
		case "mandoa":
			languageTitle = document.getElementById("mandoa-title");
			break;
	}
	english.style.display = "block";
	languageTitle.style.display = "none";
	setInterval(
		function() {
			if (languageTitle.style.display === "none") {
				languageTitle.style.display = "block";
				english.style.display = "none";
			} else {
				languageTitle.style.display = "none";
				english.style.display = "block";
			}
		},
		pause
	);
}

const urlHtml = "https://validator.w3.org/nu/?doc=https%3A%2F%2Fstarwarsanimations44.github.io%2Fhelmets%2F";
const urlCss = "https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fstarwarsanimations44.github.io%2Fhelmets";
const urlJs = "https://js.js";
const parentPageTitle = window.parent.document.title;
const pages = {
	"Home": "index.html",

	"Empire": "empire/common.html",
	"Paintings – Empire": "empire/paintings.html",

	"Mandalorians": "mandalorians/common.html",
	"Accessories – Mandalorians": "mandalorians/accessories.html",
	"Paintings – Mandalorians": "mandalorians/paintings.html",
	"Units – Mandalorians": "mandalorians/units.html",
		"Nite Owls": "mandalorians/units/nite-owls.html",
		"Super Commando": "mandalorians/units/super-commando.html",

	"Republic": "republic/common.html",
	"Accessories – Republic": "republic/accessories.html",
	"Paintings – Republic": "republic/paintings.html",
	"Units – Republic": "republic/units.html",
		"104th Battalion": "republic/units/battalion-104.html",
		"169th Attack Battalion": "republic/units/battalion-attack-169.html",
		"212th Attack Battalion": "republic/units/battalion-attack-212.html",
		"Horn Company": "republic/units/company-horn.html",
		"Tango Company": "republic/units/company-tango.html",
		"41st Elite Corps": "republic/units/corps-elite-41.html",
		"21st Nova Corps": "republic/units/corps-nova-21.html",
		"91st Mobile Reconnaissance Corps": "republic/units/corps-reconnaissance-mobile-91.html",
		"327th Star Corps": "republic/units/corps-star-327.html",
		"Coruscent Guard": "republic/units/guard-coruscent.html",
		"7th Legion": "republic/units/legion-7.html",
		"501st Legion": "republic/units/legion-501.html",
		"Kamino Security": "republic/units/security-kamino.html"
};

function validation(language) {
	"use strict";
	switch (language) {
		case "html":
			if (parentPageTitle in pages) {window.open(urlHtml + pages[parentPageTitle], "_blank")}
			break;
		case "css":
			window.open(urlCss, "_blank");
			break;
		case "js":
			window.open(urlJs, "_blank");
			break;
	}
}

// ================================================================================================================= //
	// periodic backgrounds
// ================================================================================================================= //

function multiplePeriodicBackgrounds(spanList) {
	for (var i = spanList.length - 1; i >= 0; i--) {
		switch (spanList[i]) {
			case 2:
				periodicBackground2();
				break;
			case 3:
				periodicBackground3();
				break;
			case 4:
				periodicBackground4();
				break;
			case 5:
				periodicBackground5();
				break;
			case 16:
				periodicBackground16();
				break;
		}
	}
}

function periodicBackground2() {
	"use strict";
	var backgrounds = [];
	for (var i = 2; i > 0; i--) {backgrounds.push(document.getElementsByClassName("imgBackground-" + i + "-2"))}
	const length = backgrounds[0].length;
	setInterval(
		function() {
			switch ("block") {
				case backgrounds[0][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[0][i].style.display = "none";
						backgrounds[1][i].style.display = "block";
					}
					break;
				default:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[0][i].style.display = "block";
						backgrounds[1][i].style.display = "none";
					}
					break;
			}
		},
		pause
	);
}

function periodicBackground3() {
	"use strict";
	var backgrounds = [];
	for (var i = 3; i > 0; i--) {backgrounds.push(document.getElementsByClassName("imgBackground-" + i + "-3"))}
	const length = backgrounds[0].length;
	setInterval(
		function() {
			switch ("block") {
				case backgrounds[0][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[0][i].style.display = "none";
						backgrounds[1][i].style.display = "block";
					}
					break;
				case backgrounds[1][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[1][i].style.display = "none";
						backgrounds[2][i].style.display = "block";
					}
					break;
				default:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[0][i].style.display = "block";
						backgrounds[1][i].style.display = "none";
						backgrounds[2][i].style.display = "none";
					}
					break;
			}
		},
		pause
	);
}

function periodicBackground4() {
	"use strict";
	var backgrounds = [];
	for (var i = 4; i > 0; i--) {backgrounds.push(document.getElementsByClassName("imgBackground-" + i + "-4"))}
	const length = backgrounds[0].length;
	setInterval(
		function() {
			switch ("block") {
				case backgrounds[0][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[0][i].style.display = "none";
						backgrounds[1][i].style.display = "block";
					}
					break;
				case backgrounds[1][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[1][i].style.display = "none";
						backgrounds[2][i].style.display = "block";
					}
					break;
				case backgrounds[2][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[2][i].style.display = "none";
						backgrounds[3][i].style.display = "block";
					}
					break;
				default:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[0][i].style.display = "block";
						backgrounds[1][i].style.display = "none";
						backgrounds[2][i].style.display = "none";
						backgrounds[3][i].style.display = "none";
					}
					break;
			}
		},
		pause
	);
}

function periodicBackground5() {
	"use strict";
	var backgrounds = [];
	for (var i = 5; i > 0; i--) {backgrounds.push(document.getElementsByClassName("imgBackground-" + i + "-5"))}
	const length = backgrounds[0].length;
	setInterval(
		function() {
			switch ("block") {
				case backgrounds[0][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[0][i].style.display = "none";
						backgrounds[1][i].style.display = "block";
					}
					break;
				case backgrounds[1][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[1][i].style.display = "none";
						backgrounds[2][i].style.display = "block";
					}
					break;
				case backgrounds[2][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[2][i].style.display = "none";
						backgrounds[3][i].style.display = "block";
					}
					break;
				case backgrounds[3][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[3][i].style.display = "none";
						backgrounds[4][i].style.display = "block";
					}
					break;
				default:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[0][i].style.display = "block";
						backgrounds[1][i].style.display = "none";
						backgrounds[2][i].style.display = "none";
						backgrounds[3][i].style.display = "none";
						backgrounds[4][i].style.display = "none";
					}
					break;
			}
		},
		pause
	);
}

function periodicBackground16() {
	"use strict";
	var backgrounds = [];
	for (var i = 16; i > 0; i--) {backgrounds.push(document.getElementsByClassName("imgBackground-" + i + "-16"))}
	const length = backgrounds[0].length;
	setInterval(
		function() {
			switch ("block") {
				case backgrounds[0][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[0][i].style.display = "none";
						backgrounds[1][i].style.display = "block";
					}
					break;
				case backgrounds[1][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[1][i].style.display = "none";
						backgrounds[2][i].style.display = "block";
					}
					break;
				case backgrounds[2][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[2][i].style.display = "none";
						backgrounds[3][i].style.display = "block";
					}
					break;
				case backgrounds[3][0].style.display:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[3][i].style.display = "none";
						backgrounds[4][i].style.display = "block";
					}
					break;
				default:
					for (var i = length - 1; i >= 0; i--) {
						backgrounds[0][i].style.display = "block";
						for (var j = 15; j > 0; j--) {backgrounds[j][i].style.display = "none";}
					}
					break;
			}
		},
		pause
	);
}

// ================================================================================================================= //
//                                                                                                                   //
//                                              Star Wars Animations 44                                              //
//                                                                                                                   //
// ================================================================================================================= //