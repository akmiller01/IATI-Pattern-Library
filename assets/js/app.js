import fastClick from 'fastclick';
import $ from 'jquery';

import skipLinks from './utils/skipLinks';
import iframer from './utils/iframer';
import mNav from './utils/mNav';
// import instance from './utils/basicScroll';

function globals () {

	// FastClick
    fastClick(document.body);

    // iframe video in body content
    iframer();

    // Scroll animation
    // instance();

    // Small Screen Navigation
    mNav(
        '#navigation-primary-toggle',
        'navigation-primary-toggle--active',
        '#navigation-primary',
        'navigation-primary--active'
    );
}

$(function run () {
    console.log('ᕕ( ᐛ )ᕗ Running...');
    globals();
});
