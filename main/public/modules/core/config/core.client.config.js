'use strict';

// Core module config
angular.module('core').run(['Menus',
	function(Menus) {
		isPublic: true;
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Core', 'core', 'dropdown', '/core(/DMCA)?');
		Menus.addSubMenuItem('topbar', 'core', 'Security and Privacy Policy', 'core');
		Menus.addSubMenuItem('topbar', 'core', 'DMCA', 'core/DMCA');
	}
]);