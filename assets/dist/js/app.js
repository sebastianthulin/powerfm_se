"use strict";

//Init
var Radio = {};

//Init event widget
Radio = Radio || {};
Radio.Instagram = Event.Instagram || {};

//Component
Radio.Instagram.Parse = (function ($) {

    var apiUrl = 'https://www.instagram.com/powerfmse/media/';

    function Parse() {
        console.log("hej");
        this.init();
    }

    Parse.prototype.init = function () {
        jQuery.ajax({
            url: apiUrl,
            crossDomain: true,
            dataType: 'json',
            success: function() { alert("Success"); },
            error: function(data) { console.log(data); }
        });
    };

    new Parse();

})(jQuery);
