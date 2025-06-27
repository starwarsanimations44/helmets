// ================================================================================================================= //
//                                                                                                                   //
//                                              Star Wars Animations 44                                              //
//                                                                                                                   //
// ================================================================================================================= //

pause = 1000; // ms

sources = [];
backgroundIsDisplayed = true;

function toggleBackground() {
	"use strict";
	backgroundIsDisplayed = !backgroundIsDisplayed;
	helmetsBackgrounds = document.getElementsByClassName("imgBackground");
	backgroundColor = backgroundIsDisplayed ? "transparent" : "#ffffff";
	buttons = document.getElementsByClassName("button");
	for (i = 0; i < buttons.length; i++) {buttons[i].style.backgroundColor = backgroundColor;}
	for (j = 0; j < helmetsBackgrounds.length; j++) {
		if (backgroundIsDisplayed) {
			helmetsBackgrounds[j].src = sources[j];
		} else {
			sources[j] = helmetsBackgrounds[j].src;
			helmetsBackgrounds[j].src = "../common/void.png";
		}
	}
}

helmets = document.getElementsByClassName("img-random-helmet");
helmetsSources = [
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
	"republic/common/pilot-i.png",
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
			for (i = helmets.length - 1; i >= 0; i--) {
				randomIndex = Math.floor(Math.random() * helmetsSources.length);
				helmets[i].src = helmetsSources[randomIndex];
			}
		},
		pause * 2
	);
}

languageTitle;

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

function multiplePeriodicBackgrounds(spanList) {
	for (i = spanList.length - 1; i >= 0; i--) {periodicBackground(spanList[i]);}
}

function periodicBackground(number) {
	"use strict";
	backgrounds = [];
	for (i = number; i > 0; i--) {backgrounds.push(document.getElementsByClassName("imgBackground-" + i + "-" + number))}
	length = backgrounds[0].length;
	setInterval(
		function() {

			if (number == 2) {

				switch ("block") {
					case backgrounds[0][0].style.display:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[0][i].style.display = "none";
							backgrounds[1][i].style.display = "block";
						}
						break;
					default:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[0][i].style.display = "block";
							backgrounds[1][i].style.display = "none";
						}
						break;
				}

			} else if (number == 3) {

				switch ("block") {
					case backgrounds[0][0].style.display:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[0][i].style.display = "none";
							backgrounds[1][i].style.display = "block";
						}
						break;
					case backgrounds[1][0].style.display:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[1][i].style.display = "none";
							backgrounds[2][i].style.display = "block";
						}
						break;
					default:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[0][i].style.display = "block";
							backgrounds[1][i].style.display = "none";
							backgrounds[2][i].style.display = "none";
						}
						break;
				}

			} else if (number == 4) {
				
				switch ("block") {
					case backgrounds[0][0].style.display:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[0][i].style.display = "none";
							backgrounds[1][i].style.display = "block";
						}
						break;
					case backgrounds[1][0].style.display:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[1][i].style.display = "none";
							backgrounds[2][i].style.display = "block";
						}
						break;
					case backgrounds[2][0].style.display:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[2][i].style.display = "none";
							backgrounds[3][i].style.display = "block";
						}
						break;
					default:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[0][i].style.display = "block";
							backgrounds[1][i].style.display = "none";
							backgrounds[2][i].style.display = "none";
							backgrounds[3][i].style.display = "none";
						}
						break;
				}

			} else if (number == 5) {
				
				switch ("block") {
					case backgrounds[0][0].style.display:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[0][i].style.display = "none";
							backgrounds[1][i].style.display = "block";
						}
						break;
					case backgrounds[1][0].style.display:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[1][i].style.display = "none";
							backgrounds[2][i].style.display = "block";
						}
						break;
					case backgrounds[2][0].style.display:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[2][i].style.display = "none";
							backgrounds[3][i].style.display = "block";
						}
						break;
					case backgrounds[3][0].style.display:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[3][i].style.display = "none";
							backgrounds[4][i].style.display = "block";
						}
						break;
					default:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[0][i].style.display = "block";
							backgrounds[1][i].style.display = "none";
							backgrounds[2][i].style.display = "none";
							backgrounds[3][i].style.display = "none";
							backgrounds[4][i].style.display = "none";
						}
						break;
				}

			} else if (number == 16) {
				
				switch ("block") {
					case backgrounds[0][0].style.display:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[0][i].style.display = "none";
							backgrounds[1][i].style.display = "block";
						}
						break;
					case backgrounds[1][0].style.display:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[1][i].style.display = "none";
							backgrounds[2][i].style.display = "block";
						}
						break;
					case backgrounds[2][0].style.display:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[2][i].style.display = "none";
							backgrounds[3][i].style.display = "block";
						}
						break;
					case backgrounds[3][0].style.display:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[3][i].style.display = "none";
							backgrounds[4][i].style.display = "block";
						}
						break;
					default:
						for (i = length - 1; i >= 0; i--) {
							backgrounds[0][i].style.display = "block";
							for (j = 15; j > 0; j--) {backgrounds[j][i].style.display = "none";}
						}
						break;
				}

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
