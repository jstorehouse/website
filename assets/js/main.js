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
	document.getElementById("overlay-text").innerHTML = "Conferences";
	document.getElementById("overlay-description").innerHTML = "Recent messages spoken in local conferences";
	document.getElementById("overlay-image").src="images/thumbs/conferences.jpg";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/conferences/id1209780360";
	document.getElementById("google-podcast-link").href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81OTQ5OTdjL3BvZGNhc3QvcnNz";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1209780360/josephs-storehouses-1";
	document.getElementById("pocketCast-link").href="https://pca.st/q2Oe";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/6H1RgiOMF9eYCAESOtFcwv?si=xyTrwndpQH-jb8hZZyg6vg";
}
function openYP() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("overlay-text").innerHTML = "Young People";
	document.getElementById("overlay-description").innerHTML = "Conference messages and special fellowship for young people";
	document.getElementById("overlay-image").src="images/thumbs/young-people.jpg";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/young-people/id1427499636";
	document.getElementById("google-podcast-link").href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81YWE0MWEwL3BvZGNhc3QvcnNz";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1427499636/young-people";
	document.getElementById("pocketCast-link").href="https://pca.st/GQHJ";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/3Ef1cLnCQomVLwKPqInxUO?si=mpUWfk2jRp2wT9xXA-KJQA";
}
function openQR() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("overlay-text").innerHTML = "Q&R";
	document.getElementById("overlay-description").innerHTML = "Question & Response";
	document.getElementById("overlay-image").src="images/thumbs/q-and-r.jpg";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/question-response/id1449870585";
	document.getElementById("google-podcast-link").href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy84NGM0ODA0L3BvZGNhc3QvcnNz";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1449870585/question-response";
	document.getElementById("pocketCast-link").href="https://pca.st/2SKO";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/0qes3ZqMUYJMK7BEu0FTRY?si=S0yl-VrVRpW_g8UmCbc6LA";
}
function openSpecialFellowship() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("overlay-text").innerHTML = "Special Fellowship";
	document.getElementById("overlay-description").innerHTML = "Topical messages for different ages and stages";
	document.getElementById("overlay-image").src="images/thumbs/special-fellowship.jpg";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/special-fellowship/id1431897011";
	document.getElementById("google-podcast-link").href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy82ODBkNjBjL3BvZGNhc3QvcnNz";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1431897011/special-fellowship";
	document.getElementById("pocketCast-link").href="https://pca.st/qBwa";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/144aZaRiTBW0V053EU4mSk?si=Tsdva48FRe6_i-mPXVFXgQ";
}
function openTestimonies() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("overlay-text").innerHTML = "Testimonies";
	document.getElementById("overlay-description").innerHTML = "“the things which we have seen and heard” (Acts 4:20)";
	document.getElementById("overlay-image").src="images/thumbs/testimonies.jpg";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/testimonies/id1422397926";
	document.getElementById("google-podcast-link").href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81OGEyODBjL3BvZGNhc3QvcnNz";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1422397926/josephs-storehouses-testimonies";
	document.getElementById("pocketCast-link").href="https://pca.st/A6An";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/38NdvJ3ZMi29YBuZkKX49U?si=0-9FBfLnSeGQxXJKLiuBHg";
}
function openExcerpts() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("overlay-text").innerHTML = "Excerpts";
	document.getElementById("overlay-description").innerHTML = "Message excerpts from local conferences";
	document.getElementById("overlay-image").src="images/thumbs/excerpts.jpg";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/excerpts/id1451629498";
	document.getElementById("google-podcast-link").href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy84ZjExMzIwL3BvZGNhc3QvcnNz";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1451629498/excerpts";
	document.getElementById("pocketCast-link").href="https://pca.st/698Z";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/1bFSowANp33VYCecEZ2JVf?si=f-GFeWH9R9Sa0ZPGahRrCQ";
}
function openCollege() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("overlay-text").innerHTML = "College Students";
	document.getElementById("overlay-description").innerHTML = "Conference messages and special fellowship for college students";
	document.getElementById("overlay-image").src="images/thumbs/college.jpg";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/college-students/id1430890080";
	document.getElementById("google-podcast-link").href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy82N2I4Yzg4L3BvZGNhc3QvcnNz";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1430890080/college-students";
	document.getElementById("pocketCast-link").href="https://pca.st/Jo83";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/4IXoibc11YhQTEhGqLbBrC?si=C7E8gre_QaK7BLSXaN_0JA";
}
function openArchive() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("overlay-text").innerHTML = "Archive";
	document.getElementById("overlay-description").innerHTML = "Past messages spoken in local conferences";
	document.getElementById("overlay-image").src="images/thumbs/archive.jpg";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/archive/id1451979597";
	document.getElementById("google-podcast-link").href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy85MTViOWYwL3BvZGNhc3QvcnNz";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1451979597/archive";
	document.getElementById("pocketCast-link").href="https://pca.st/t044";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/0pcszoWiY9SNEwA1xTerqY?si=E5Lw7YxEQoWpI1eK0oL6Zw";
}
function openMessageOfWeek() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("overlay-text").innerHTML = "Message of the Week";
	document.getElementById("overlay-description").innerHTML = "Weekly audio from Joseph's Storehouses";
	document.getElementById("overlay-image").src="images/thumbs/message-of-week.jpg";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/message-of-the-day/id1496234101";
	document.getElementById("google-podcast-link").href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xMmZkMTk2OC9wb2RjYXN0L3Jzcw==";
	// document.getElementById("overcast-link").href="link";
	document.getElementById("pocketCast-link").href="https://pca.st/55msakbw";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/2I3I2fHwLep5m1sy3Pee8u?si=C_YsoiNPQZmPmUra-Q7IoA";
}
function openStories() {
	document.getElementById("pick-podcast-method").style.height = "100%";
	document.getElementById("overlay-text").innerHTML = "Stories";
	document.getElementById("overlay-description").innerHTML = "Testimony excerpts from local conference messages";
	document.getElementById("overlay-image").src="images/thumbs/stories.jpg";
	document.getElementById("apple-podcast-link").href="https://podcasts.apple.com/us/podcast/stories/id1453722255";
	document.getElementById("google-podcast-link").href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy85NGVkMzg0L3BvZGNhc3QvcnNz";
	// document.getElementById("overcast-link").href="https://overcast.fm/itunes1453722255/stories";
	document.getElementById("pocketCast-link").href="https://pca.st/jXdJ";
	document.getElementById("spotify-link").href="https://open.spotify.com/show/0E1taQX07h8sH3LAi9C1nG?si=X3p4lTe0T5C4DfxD5uDUOg";
}

/* Close Podcast Listen Method Overlay */
function closeNav() {
	document.getElementById("pick-podcast-method").style.height = "0%";
}
