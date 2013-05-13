/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#xe000;',
			'icon-pencil' : '&#xe001;',
			'icon-connection' : '&#xe002;',
			'icon-address-book' : '&#xe004;',
			'icon-location' : '&#xe005;',
			'icon-map' : '&#xe006;',
			'icon-alarm' : '&#xe007;',
			'icon-mobile' : '&#xe008;',
			'icon-mobile-2' : '&#xe009;',
			'icon-laptop' : '&#xe00a;',
			'icon-screen' : '&#xe00b;',
			'icon-tablet' : '&#xe00c;',
			'icon-download' : '&#xe00d;',
			'icon-upload' : '&#xe00e;',
			'icon-disk' : '&#xe00f;',
			'icon-bubble' : '&#xe010;',
			'icon-bubbles' : '&#xe011;',
			'icon-user' : '&#xe012;',
			'icon-search' : '&#xe014;',
			'icon-zoom-in' : '&#xe015;',
			'icon-zoom-out' : '&#xe016;',
			'icon-expand' : '&#xe017;',
			'icon-contract' : '&#xe018;',
			'icon-lock' : '&#xe019;',
			'icon-unlocked' : '&#xe01a;',
			'icon-settings' : '&#xe01b;',
			'icon-cog' : '&#xe01c;',
			'icon-earth' : '&#xe01d;',
			'icon-eye' : '&#xe01e;',
			'icon-eye-blocked' : '&#xe01f;',
			'icon-star' : '&#xe020;',
			'icon-star-2' : '&#xe021;',
			'icon-star-3' : '&#xe022;',
			'icon-thumbs-up' : '&#xe023;',
			'icon-thumbs-up-2' : '&#xe024;',
			'icon-close' : '&#xe025;',
			'icon-checkmark' : '&#xe026;',
			'icon-facebook' : '&#xe027;',
			'icon-twitter' : '&#xe028;',
			'icon-feed' : '&#xe029;',
			'icon-youtube' : '&#xe02a;',
			'icon-vimeo' : '&#xe02b;',
			'icon-flickr' : '&#xe02d;',
			'icon-dribbble' : '&#xe02c;',
			'icon-forrst' : '&#xe02e;',
			'icon-deviantart' : '&#xe02f;',
			'icon-steam' : '&#xe030;',
			'icon-github' : '&#xe031;',
			'icon-github-2' : '&#xe032;',
			'icon-github-3' : '&#xe033;',
			'icon-wordpress' : '&#xe034;',
			'icon-blogger' : '&#xe035;',
			'icon-tumblr' : '&#xe036;',
			'icon-yahoo' : '&#xe037;',
			'icon-skype' : '&#xe038;',
			'icon-html5' : '&#xe03a;',
			'icon-css3' : '&#xe03b;',
			'icon-envelope' : '&#xe03c;',
			'icon-left-quote' : '&#xe03d;',
			'icon-right-quote' : '&#xe03e;',
			'icon-cart' : '&#xe03f;',
			'icon-pie' : '&#xe040;',
			'icon-stats' : '&#xe041;',
			'icon-share' : '&#xe042;',
			'icon-file-excel' : '&#xe043;',
			'icon-file-zip' : '&#xe044;',
			'icon-file-powerpoint' : '&#xe045;',
			'icon-file-xml' : '&#xe046;',
			'icon-file-css' : '&#xe047;',
			'icon-file-word' : '&#xe048;',
			'icon-file-openoffice' : '&#xe049;',
			'icon-file-pdf' : '&#xe04a;',
			'icon-libreoffice' : '&#xe04b;',
			'icon-loop' : '&#xe04c;',
			'icon-images' : '&#xe04d;',
			'icon-bullhorn' : '&#xe04e;',
			'icon-info' : '&#xe04f;',
			'icon-cancel-circle' : '&#xe050;',
			'icon-checkmark-circle' : '&#xe051;',
			'icon-link' : '&#xe052;',
			'icon-google-plus' : '&#xe053;',
			'icon-left-quote-alt' : '&#xe054;',
			'icon-right-quote-alt' : '&#xe055;',
			'icon-spinner' : '&#xe056;',
			'icon-key' : '&#xe013;',
			'icon-support' : '&#xe057;',
			'icon-tree' : '&#xe058;',
			'icon-arrow-up-right' : '&#xe05b;',
			'icon-arrow-up' : '&#xe059;',
			'icon-arrow-up-right-2' : '&#xe05a;',
			'icon-arrow-right' : '&#xe05c;',
			'icon-arrow-down-right' : '&#xe05d;',
			'icon-arrow-down' : '&#xe05e;',
			'icon-arrow-down-left' : '&#xe05f;',
			'icon-arrow-up-left' : '&#xe060;',
			'icon-tags' : '&#xe061;',
			'icon-folder' : '&#xe003;',
			'icon-feed-2' : '&#xe062;',
			'icon-question' : '&#xe063;',
			'icon-notification' : '&#xe064;',
			'icon-stackoverflow' : '&#xe066;',
			'icon-reddit' : '&#xe067;',
			'icon-soundcloud' : '&#xe068;',
			'icon-apple' : '&#xe069;',
			'icon-finder' : '&#xe06a;',
			'icon-android' : '&#xe06b;',
			'icon-delicious' : '&#xe06c;',
			'icon-joomla' : '&#xe06d;',
			'icon-google-drive' : '&#xe076;',
			'icon-picassa' : '&#xe078;',
			'icon-lastfm' : '&#xe088;',
			'icon-tux' : '&#xe097;',
			'icon-windows8' : '&#xe098;',
			'icon-windows' : '&#xe099;',
			'icon-yelp' : '&#xe09c;',
			'icon-chrome' : '&#xe09e;',
			'icon-firefox' : '&#xe09f;',
			'icon-IE' : '&#xe0a0;',
			'icon-opera' : '&#xe0a1;',
			'icon-safari' : '&#xe0a2;',
			'icon-IcoMoon' : '&#xe0a3;',
			'icon-html5-2' : '&#xe0a4;',
			'icon-menu' : '&#xe0a5;',
			'icon-paypal' : '&#xe039;',
			'icon-filter' : '&#xe065;',
			'icon-remove' : '&#xe06e;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};