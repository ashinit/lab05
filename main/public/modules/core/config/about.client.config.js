'use strict';
/*global angular */

// Configuring the Articles module
angular.module('core').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Policy and Safety', 'core', 'dropdown', '/cores(/Security)?');
		Menus.addSubMenuItem('topbar', 'core', 'Security and Privary Policy', 'core/Security');
		Menus.addSubMenuItem('topbar', 'core', 'DMCA', 'core/DMCA');
	}
]);