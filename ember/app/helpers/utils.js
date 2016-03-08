'use strict';

const site_title = 'Modern Accessibility with Ember - ';

function announce_view_loaded() {
	var page_title, page_title_el;
	page_title_el = document.querySelector('[data-page-title]');
	if (page_title_el !== null) {
		page_title = page_title_el.getAttribute('data-page-title') || page_title_el.innerText;
		page_title = page_title === 'true'? page_title_el.innerText : page_title;
	} else {
		page_title = 'page title not set';
	}
	return set_title(page_title);
};

function set_title(page_title) {
	page_title = site_title + page_title;
	document.title = page_title;
	announce(page_title + ' page loaded', 'polite');
};

var announce_timeout = null;

function announce(message, manners) {
	var announcer, clear_announcer;
	manners = manners || 'polite';
	announcer = document.getElementById('a11y_announcer');
	if (announcer) {
		announcer.setAttribute('aria-live', 'off');
		clear_announcer = function() {
			announcer.innerHTML = '';
			announce_timeout = null;
			return announcer;
		};
		announcer.setAttribute('aria-live', manners);
		announcer.innerHTML = message;
		clearTimeout(announce_timeout);
		announce_timeout = setTimeout(clear_announcer, 500);
		return announcer;
	} else {
		alert('a11y_announcer not found');
	}
};

export { announce_view_loaded }
