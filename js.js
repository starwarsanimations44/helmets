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
	"empire/models/stormtrooper.png",
	"empire/common/shoretrooper.png",
	"empire/common/purge.png",
	
	"mandalorians/common/axe-woves.png",
	"mandalorians/common/boba-fett.png",
	"mandalorians/common/din-djarin.png",
	"mandalorians/common/jango-fett.png",
	"mandalorians/common/pre-vizsla.png",

	"republic/common/arc-i.png",
	"republic/common/arc-ii.png",
	"republic/models/arf_I.png",
	"republic/models/arf_II.png",
	"republic/models/bar_II.png",
	"republic/common/captain-i.png",
	"republic/models/col_I.png",
	"republic/models/col_II.png",
	"republic/common/commander-i.png",
	"republic/models/eng_I.png",
	"republic/models/eng_II.png",
	"republic/common/lieutenant-i.png",
	"republic/models/par_II.png",
	"republic/common/pil_I.png",
	"republic/models/pil_IIA.png",
	"republic/models/pil_IIB.png",
	"republic/models/sco_II.png",
	"republic/common/sergeant-i.png",
	"republic/models/trooper-i.png",
	"republic/models/trooper-ii.png"
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
