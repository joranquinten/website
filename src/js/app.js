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

    var shuffleArray = function(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    };

    var loadBackgroundImage = function(e, backgrounds){

        if (e && backgrounds){
            // init loader animation on target element:
            var element = document.querySelector(e);
            element.classList.add('isLoading');

            var currentIndex = 0;
            var previousIndex = -1;
            var displayImage = function(index, previousIndex) {

                previousIndex = currentIndex-1;

                // add element to attach background to
                var insert = document.createElement('div');
                var insertId = 'slide-'+ currentIndex;

                insert.setAttribute('id', insertId);
                var imageHolder = element.appendChild(insert);
                imageHolder.style.position = 'absolute';
                imageHolder.style.height = '100%';
                imageHolder.style.width = '100%';
                imageHolder.style.top = 0;
                imageHolder.style.left = 0;
                imageHolder.classList.add('animated');
                imageHolder.classList.add('imageHolder');

                // load the actual image
                var currentImage = backgrounds[index];
                var img = new Image();
                img.onload = function() {
                    // remove loading animation:
                    element.classList.remove('isLoading');

                    // prepare for image
                    imageHolder.classList.add('fadeIn');
                    imageHolder.classList.add('isLoaded');
                    imageHolder.style.backgroundImage = 'url('+ currentImage +')';

                    // remove previous imageHolder
                    if (previousIndex >= 0) {
                        var previousImageHolder = document.querySelector('#slide-'+ previousIndex);
                        previousImageHolder.classList.add('fadeOut');
                        var timeout = setTimeout(function(){ previousImageHolder.parentNode.removeChild(previousImageHolder); }, 1000);
                    }
                };
                img.src = currentImage;

                // call itself after first
                if (currentIndex === 0) {
                    var interval = setInterval( function() { displayImage(currentIndex, previousIndex); }, 7400);
                }
                currentIndex++;
            };

            displayImage(currentIndex, previousIndex);
        }

    };

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

    shuffleArray(backgrounds);

    loadBackgroundImage('#home', backgrounds);

    performMagicTricks();

}());
