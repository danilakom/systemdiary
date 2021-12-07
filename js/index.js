
(function ($) {
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
        // Do something else, like open/close menu
    });
    
    "use strict";


    function Check(value) {
        if (value.trim().match(/^([\w\-\.\*])+$/) == null) {
                return false;
            }
        else if (value.trim() == ''){
                return false;
            }
        else {
            return true
        }
        }
    
    

})(jQuery);
