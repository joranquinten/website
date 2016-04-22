(function(){

    var imgFolder = 'images/backgrounds';
    var backgrounds = [
        imgFolder + '/05485.jpg',
        imgFolder + '/DSC_0250.jpg',
        imgFolder + '/DSC_1593.jpg',
        imgFolder + '/DSC_1636.jpg',
        imgFolder + '/DSC_1695.jpg',
        imgFolder + '/DSC_2569.jpg',
        imgFolder + '/DSC_2862.jpg',
        imgFolder + '/DSC_3239.jpg',
        imgFolder + '/DSC_3260.jpg',
        imgFolder + '/DSC_3337.jpg',
        imgFolder + '/DSC_3808.jpg',
        imgFolder + '/DSC_4144.jpg',
        imgFolder + '/DSC_4176-bewerkt.jpg',
        imgFolder + '/DSC_4369.jpg',
        imgFolder + '/DSC_7104.jpg',
        imgFolder + '/DSC02992.jpg',
        imgFolder + '/DSC04972.jpg',
        imgFolder + '/DSC05214.jpg',
        imgFolder + '/DSC05283.jpg',
        imgFolder + '/DSC05493.jpg',
        imgFolder + '/DSC05779.jpg',
        imgFolder + '/DSC05972.jpg',
        imgFolder + '/DSC06197.jpg',
        imgFolder + '/DSC06207.jpg',
        imgFolder + '/DSC06243.jpg',
        imgFolder + '/lr-02775.jpg',
        imgFolder + '/lr-04229.jpg',
        imgFolder + '/lr-5406.jpg',
        imgFolder + '/lr-5446.jpg',
        imgFolder + '/lr-6909.jpg',
        imgFolder + '/Untitled_HDR2.jpg',
        imgFolder + '/Untitled_HDR3.jpg'
    ];

    var getRandomFromArray = function (arr) {

        var index = getRandomIntInclusive(0, arr.length-1);
        return arr[index];

    };

    var getRandomIntInclusive = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var loadRandomBackgroundImage = function(e, backgrounds){

        if (e && backgrounds){
            // init loader animation on target element:
            var element = document.querySelector(e);
            element.classList.add('isLoading');

            // load the actual image
            var randomImage = getRandomFromArray(backgrounds);
            var img = new Image();
            img.onload = function() {
                // remove loading animation:
                element.classList.remove('isLoading');
                // prepare for image
                element.classList.add('isLoaded');
                element.style.backgroundImage = 'url('+randomImage+')';
            };
            img.src = randomImage;
        }

    };

    loadRandomBackgroundImage('#home', backgrounds);

    var performMagicTricks = function(){

        var animatedLinks = document.querySelectorAll('a.animated, a .animated');

        [].forEach.call(animatedLinks, function(item) {
        // do whatever
            item.addEventListener('mouseover', function(){
                item.classList.add('wobble');
            }, false);
            item.addEventListener('mouseout', function(){
                item.classList.remove('wobble');
            }, false);
        });
    };

    performMagicTricks();

}());
