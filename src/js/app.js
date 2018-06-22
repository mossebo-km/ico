
/**
 * Imports
 */

import './bootstrap'


/**
 * Components
 */
import './components/heightToogle'



/**
 * APP
 */
$( document ).ready(function() {


    heightToggle('.js-ht', {
        bindCloseEvents: true
    })


});
