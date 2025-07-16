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
	var helmetsBackgrounds = document.getElementsByClassName("imgBackground");
	backgroundColor = backgroundIsDisplayed ? "transparent" : "#ffffff";
	buttons = document.getElementsByClassName("button");
	for (var i = 0; i < buttons.length; i++) {buttons[i].style.backgroundColor = backgroundColor;}
	for (var j = 0; j < helmetsBackgrounds.length; j++) {
		if (backgroundIsDisplayed) {helmetsBackgrounds[j].src = sources[j];}
		else {
			sources[j] = helmetsBackgrounds[j].src;
			helmetsBackgrounds[j].src = "../common/void.png";
		}
	}
}

helmets = document.getElementsByClassName("img-random-helmet");
helmetsSources = [

	// "alliance/models/commando.png",
	// "alliance/models/marine.png",
	// "alliance/models/pilot.png",

	// "empire/models/pilot.png",
	"empire/models/shore.png",
	"empire/models/storm.png",
	// "empire/models/death.png",
	// "empire/models/death-specialist.png",
	"empire/common/at-act.png",
	"empire/common/incinerator.png",
	"empire/common/purge.png",
	"empire/common/shore.png",

	"mandalorians/models/female-a.png",
	"mandalorians/models/male-1.png",
	"mandalorians/models/male-2.png",
	"mandalorians/models/male-3.png",
	"mandalorians/common/axe-woves.png",
	"mandalorians/common/boba-fett.png",
	"mandalorians/common/din-djarin.png",
	"mandalorians/common/jango-fett.png",
	"mandalorians/common/pre-vizsla.png",
	"mandalorians/units/nite-owls/bo-katan-kryze.png",
	"mandalorians/units/nite-owls/koska-reeves.png",
	"mandalorians/units/super-commando/male-3-2.png",
	"mandalorians/units/super-commando/male-3.png",

	"republic/models/Rex.png",
	"republic/models/Wolffe.png",
	"republic/models/arc_II.png",
	"republic/models/arf_I.png",
	"republic/models/arf_II.png",
	"republic/models/bar_II.png",
	// "republic/models/barc-i.png",
	"republic/models/col_I.png",
	"republic/models/col_II.png",
	"republic/models/eng_I.png",
	"republic/models/eng_II.png",
	"republic/models/par_II.png",
	"republic/models/pil_I.png",
	"republic/models/pil_IIA.png",
	"republic/models/pil_IIB.png",
	"republic/models/sco_II.png",
	"republic/models/trooper-i.png",
	"republic/models/trooper-ii.png",
	"republic/common/arc-i.png",
	"republic/common/arc-ii.png",
	"republic/common/captain-i.png",
	"republic/common/commander-i.png",
	"republic/common/lieutenant-i.png",
	"republic/common/ordnance-specialist-i.png",
	"republic/common/ordnance-specialist-ii.png",
	"republic/common/pilot-i.png",
	"republic/common/sergeant-i.png",
	"republic/units/battalion-104/cc_3636_Wolffe_I.png",
	"republic/units/battalion-104/cc_3636_Wolffe_I2.png",
	"republic/units/battalion-104/cc_3636_Wolffe_II.png",
	// "republic/units/battalion-104/ct-4860-boost-i.png",
	"republic/units/battalion-104/ct-4860-boost-ii.png",
	"republic/units/battalion-104/tro_I.png",
	"republic/units/battalion-104/tro_I2.png",
	"republic/units/battalion-104/tro_II.png",
	"republic/units/battalion-104/xxxx_Sniker_II.png",
	"republic/units/battalion-attack-169/pil_I.png",
	"republic/units/battalion-attack-169/pil_IIA.png",
	"republic/units/battalion-attack-169/pil_IIB.png",
	"republic/units/battalion-attack-169/sco_II.png",
	"republic/units/battalion-attack-169/sco_II2.png",
	"republic/units/battalion-attack-169/tro_I.png",
	"republic/units/battalion-attack-169/xxxx_HotShot_I.png",
	"republic/units/battalion-attack-169/xxxx_Raven_I.png",
	"republic/units/battalion-attack-169/xxxx_Raven_IIA.png",
	"republic/units/battalion-attack-169/xxxx_Raven_IIB.png",
	"republic/units/battalion-attack-212/arf_I.png",
	"republic/units/battalion-attack-212/cc_2224_Cody_I.png",
	"republic/units/battalion-attack-212/cc_2224_Cody_II.png",
	"republic/units/battalion-attack-212/par_II.png",
	"republic/units/battalion-attack-212/tro_I.png",
	"republic/units/battalion-attack-212/tro_I2.png",
	"republic/units/battalion-attack-212/tro_II.png",
	"republic/units/battalion-attack-212/xxxx_Waxer_II.png",
	"republic/units/company-horn/cc_4132_Lock_I.png",
	"republic/units/company-horn/trooper-i.png",
	"republic/units/company-tango/cl_9632_Trap_I.png",
	"republic/units/company-tango/cl_9632_Trap_II.png",
	"republic/units/company-tango/ct_9521_Pulsar_I.png",
	"republic/units/company-tango/ct_9529_Havoc_I.png",
	"republic/units/company-tango/ct_9538_Edge_I.png",
	"republic/units/company-tango/ct_9538_Edge_II.png",
	"republic/units/company-tango/ct_9544_Scythe_II.png",
	"republic/units/company-tango/xxxx_Ox_I.png",
	"republic/units/company-tango/xxxx_Ox_II.png",
	"republic/units/corps-elite-41/Ranger_tro_I.png",
	"republic/units/corps-elite-41/Ranger_tro_II.png",
	"republic/units/corps-elite-41/cc_1004_Gree_I.png",
	"republic/units/corps-elite-41/cc_1004_Gree_II.png",
	"republic/units/corps-elite-41/sco_II.png",
	"republic/units/corps-elite-41/tro_I.png",
	"republic/units/corps-elite-41/tro_II.png",
	"republic/units/corps-elite-41/xxxx_Buzz_I.png",
	"republic/units/corps-elite-41/xxxx_Draa_I.png",
	"republic/units/corps-nova-21/CC_1138_Bacara_I.png",
	"republic/units/corps-nova-21/CC_1138_Bacara_II.png",
	"republic/units/corps-nova-21/col_I.png",
	"republic/units/corps-nova-21/col_II.png",
	"republic/units/corps-nova-21/tro_II.png",
	"republic/units/corps-nova-21/tro_II2.png",
	"republic/units/corps-reconnaissance-mobile-91/cc_8826_Neyo_II.png",
	"republic/units/corps-reconnaissance-mobile-91/tro_I.png",
	"republic/units/corps-reconnaissance-mobile-91/tro_II.png",
	"republic/units/corps-star-327/cc_5052_Bly_II.png",
	"republic/units/corps-star-327/tro_I.png",
	"republic/units/corps-star-327/tro_II.png",
	"republic/units/guard-coruscent/cc_1010_Fox_I.png",
	"republic/units/guard-coruscent/cc_1010_Fox_II.png",
	"republic/units/guard-coruscent/cc_3714_Fil_I.png",
	"republic/units/guard-coruscent/tro_II.png",
	"republic/units/legion-501/cc_1119_Appo_I.png",
	"republic/units/legion-501/cc_1119_Appo_II.png",
	"republic/units/legion-501/ct_1409_Echo_I.png",
	"republic/units/legion-501/ct_5385_Tup_I.png",
	"republic/units/legion-501/ct_5385_Tup_II.png",
	"republic/units/legion-501/ct_7567_Rex_I.png",
	"republic/units/legion-501/ct_7567_Rex_II.png",
	"republic/units/legion-501/tro_I.png",
	"republic/units/legion-501/tro_I2.png",
	"republic/units/legion-501/tro_II.png",
	"republic/units/legion-7/bar_II.png",
	"republic/units/legion-7/ct_80_88_3009_Aden_II.png",
	"republic/units/legion-7/eng_II.png",
	"republic/units/legion-7/tro_II.png",
	"republic/units/legion-7/xxxx_Faie_II.png",
	"republic/units/security-kamino/eng_II.png",
	"republic/units/security-kamino/eng_II2.png",
	"republic/units/security-kamino/tro_II.png",
	"republic/units/security-kamino/xxxx_II.png",

];

function randomSource() {
	"use strict";
	setInterval(
		function() {
			for (var i = helmets.length - 1; i >= 0; i--) {
				helmets[i].src = helmetsSources[Math.floor(Math.random() * helmetsSources.length)];
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
			languageTitle = document.getElementById(language);
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
	for (var i = spanList.length - 1; i >= 0; i--) {periodicBackground(spanList[i]);}
}

function periodicBackground(number) {
	"use strict";
	var backgrounds = [];
	for (var i = number; i > 0; i--) {backgrounds.push(document.getElementsByClassName("imgBackground-" + i + "-" + number))}
	length = backgrounds[0].length;
	setInterval(
		function() {

			if (number == 2) {

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

			} else if (number == 3) {

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

			} else if (number == 4) {
				
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

			} else if (number == 5) {
				
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

			} else if (number == 16) {
				
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
