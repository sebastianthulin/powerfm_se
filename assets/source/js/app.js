"use strict";

//Init
var Radio = {};

//Init event widget
Radio = Radio || {};
Radio.Instagram = Radio.Instagram || {};

//Component
Radio.Instagram.Parse = (function ($) {

    var apiUrl = 'https://www.instagram.com/powerfmse/media/';

    function Parse() {
        console.log("hej");
        //this.init();
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


//Init event widget
Radio = Radio || {};
Radio.Player = Radio.Player || {};

//Component
Radio.Player.Player = (function ($) {

    var playerElement = jQuery("#player");
    var audioElement = jQuery("#player #audio-player");

    function Player() {
        jQuery(function(){

        }.bind(this));
        this.init();
        console.log("player");
    }

    Player.prototype.init = function () {
        playerElement.click(function(){
            console.log("playing");
            audioElement.play();
        }.bind(this));
        console.log(playerElement);
    };

    new Player();

})(jQuery);
