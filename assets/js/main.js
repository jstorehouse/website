$(function() {
	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});
});


/* Open Podcast Listen Method Overlay and Set Links */
function openConferences() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/conferences/id1209780360";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1209780360/josephs-storehouses-1";
	document.getElementById("pocketCast-link").href="https://pca.st/q2Oe";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/6H1RgiOMF9eYCAESOtFcwv?si=xyTrwndpQH-jb8hZZyg6vg";
}
function openYP() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/young-people/id1427499636";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1427499636/young-people";
	document.getElementById("pocketCast-link").href="https://pca.st/GQHJ";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/3Ef1cLnCQomVLwKPqInxUO?si=mpUWfk2jRp2wT9xXA-KJQA";
}
function openQR() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/question-response/id1449870585";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1449870585/question-response";
	document.getElementById("pocketCast-link").href="https://pca.st/2SKO";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/0qes3ZqMUYJMK7BEu0FTRY?si=S0yl-VrVRpW_g8UmCbc6LA";
}
function openSpecialFellowship() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/special-fellowship/id1431897011";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1431897011/special-fellowship";
	document.getElementById("pocketCast-link").href="https://pca.st/qBwa";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/144aZaRiTBW0V053EU4mSk?si=Tsdva48FRe6_i-mPXVFXgQ";
}
function openTestimonies() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/testimonies/id1422397926";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1422397926/josephs-storehouses-testimonies";
	document.getElementById("pocketCast-link").href="https://pca.st/A6An";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/38NdvJ3ZMi29YBuZkKX49U?si=0-9FBfLnSeGQxXJKLiuBHg";
}
function openExcerpts() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/excerpts/id1451629498";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1451629498/excerpts";
	document.getElementById("pocketCast-link").href="https://pca.st/698Z";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/1bFSowANp33VYCecEZ2JVf?si=f-GFeWH9R9Sa0ZPGahRrCQ";
}
function openCollege() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/college-students/id1430890080";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1430890080/college-students";
	document.getElementById("pocketCast-link").href="https://pca.st/Jo83";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/4IXoibc11YhQTEhGqLbBrC?si=C7E8gre_QaK7BLSXaN_0JA";
}
function openArchive() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/archive/id1451979597";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1451979597/archive";
	document.getElementById("pocketCast-link").href="https://pca.st/t044";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/0pcszoWiY9SNEwA1xTerqY?si=E5Lw7YxEQoWpI1eK0oL6Zw";
}
function openMessageOfDay() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/message-of-the-day/id1496234101";
	// document.getElementById("overcast-link").href="link";
	document.getElementById("pocketCast-link").href="https://pca.st/55msakbw";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/2I3I2fHwLep5m1sy3Pee8u?si=C_YsoiNPQZmPmUra-Q7IoA";
}
function openStories() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/stories/id1453722255";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1453722255/stories";
	document.getElementById("pocketCast-link").href="https://pca.st/jXdJ";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/0E1taQX07h8sH3LAi9C1nG?si=X3p4lTe0T5C4DfxD5uDUOg";
}

/* Close Podcast Listen Method Overlay */
function closeNav() {
	document.getElementById("pick-podcast-method").style.height = "0%";
}
