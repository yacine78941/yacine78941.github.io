// SETTINGS for HUE Under Construction Template
// Available on Themeforest: http://themeforest.net/user/CosmicLabs/portfolio
// By CosmicLabs


// To setup, change the variables below
// Follow instructions in comments, see documentation for more detail

// ==== COLOUR SCHEME ====
// Type in the HEX Code for the colour you want to use as the background of the site
// Remember to include the Hex (#) symbol, e.g. #2c3e50
// Need some colours to choose from? Nice choice of Flat UI colours here: http://flatuicolors.com
// Darker colours work best - avoid light / pale colours
// Set opacity of colour overlay, between 0 and 1

var colour = "#404041";
var bgOpacityLevel = "0.85";


// ==== SLIDESHOW BACKGROUND ====
// Set URLs to background images inside the array
// Each image must be on its own line, inbetween speech marks (" ") and with a comma at the end of the line
// Add / remove images by changing the number of lines below
// Variable slideshowFade = transition speed for fade animation, in milliseconds
// Variable slideshowDuration = time each slide is shown for, in milliseconds

var slideshowBackground = 'on';

var slideshowBackgroundURLS = [
	"images/background1.jpg",
	"images/background2.jpg",
	"images/background3.jpg",
	"images/background4.jpg",
	"images/background5.jpg",
];

var slideshowFade = 1000;
var slideshowDuration = 4000;

		
// ==== VIDEO BACKGROUND ====
// Enable Video Background - 'on' to enable, 'off' to disable
// Cannot work on mobile devices due to device restrictions, instead shows slideshow
// If disabled slideshow is shown
// Paste YouTube URL into the videoBackgronudURL variable - use YouTube link NOT embed code
// Set videoMuted to 'true' and background videos will be muted with no toggle mute button visible
// Set videoMuted to 'false' and videos will not be muted, and the toggle mute button will be visible on the site so users can turn off audio if they want

var videoBackground = 'off';
var videoBackgroundURL = 'PASTE-YOUTUBE-URL-HERE';
var videoMuted = true;


// ==== COUNTDOWN ====
// Set up the date and time that will be counted down to
// Enter date in the format (24 hr clock): DD Month YYYY HH:MM:SS for example: 01 January 2015 23:04:00

var countdownDate = "16 April 2015 00:00:00";