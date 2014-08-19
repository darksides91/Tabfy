/**
 * Tabfy plugin for jQuery
 *
 * @version 0.0.1
 *
 * @author Jean-Baptiste JOFFRE <jeanbaptiste.joffre@gmail.com>
 * @license GPL v3.0
 *
 * Distribution et utilisation autorisée, sous les termes de la lisence GPL v3.0 (http://www.gnu.org/licenses/quick-guide-gplv3.html)
 *
 * Tout droits à "La Compagnie Hyperactive" accordé par Jean-Baptiste JOFFRE (jeanbaptiste.joffre@gmail.com)
 */
(function ($) {

    $.fn.tabfy = function(conf) {

        var $element = $(this);

        var configuration = {
            'useCSS': false,
            'mainTab': 'tab1'
        };

        var hashChangeEvent = function() {
            // Default to the current location.
            var strLocation = window.location.href;
            var strHash = window.location.hash;
            var strPrevLocation = "";
            var strPrevHash = "";

            // This is how often we will be checkint for
            // changes on the location.
            var intIntervalTime = 100;

            // This method removes the pound from the hash.
            var fnCleanHash = function( strHash ){
                return(strHash.substring( 1, strHash.length ));
            };

            // This will be the method that we use to check
            // changes in the window location.

            var fnCheckLocation = function(){
                // Check to see if the location has changed.
                if (strLocation != window.location.href){

                    // Store the new and previous locations.
                    strPrevLocation = strLocation;
                    strPrevHash = strHash;
                    strLocation = window.location.href;
                    strHash = window.location.hash;

                    // The location has changed. Trigger a
                    // change event on the location object,
                    // passing in the current and previous
                    // location values.
                    $element.trigger(
                        "hashChange",
                        {
                            currentHref: strLocation,
                            currentHash: fnCleanHash( strHash ),
                            previousHref: strPrevLocation,
                            previousHash: fnCleanHash( strPrevHash )
                        }
                    );

                }
            };

            // Set an interval to check the location changes.
            setInterval(fnCheckLocation, intIntervalTime);
        },

        init = function() {

            window.location.hash = '';

            $.extend(configuration, conf);

            hashChangeEvent(); //initialisation of hash change event (as it's a non-DOM event a timer is used)

            /**
             * Main loop
             */
            $element.bind('hashChange', function(e, data) {
                var $current = $('#' + data.currentHash);
                var $previous = false;
                if (data.previousHash) {
                    $previous = $('#' + data.previousHash);

                    /**
                     * We hide the content and unselect the tab
                     */
                    $('a[data-value=#' + data.previousHash + ']').parents('li').removeClass('active');
                    if (configuration.useCSS) {
                        $previous.removeClass('active');
                    } else {
                        $previous.slideToggle(function() {
                            $('a[data-value=#' + data.currentHash + ']').parents('li').addClass('active');
                            $current.slideToggle();
                        });
                    }
                }

                /**
                 * we select the tab and show the content
                 */
                $('a[data-value=#' + data.currentHash + ']').parents('li').addClass('active');
                if (configuration.useCSS) {
                    $current.addClass('active');
                }

                if (!$previous && !configuration.useCSS) {
                    $current.slideToggle();
                }
            });

            window.location.hash = configuration.mainTab; //used to trigger the tab for the first time
        };

        init();

    };

}(jQuery));