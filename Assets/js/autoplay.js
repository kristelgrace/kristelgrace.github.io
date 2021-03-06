// adjust autoplay trigger on scroll, sourced from stackedoverflow
// https://stackoverflow.com/questions/15395920/play-html5-video-when-scrolled-to

$(document).ready(function() {
// Get media - with autoplay disabled (audio or video)
var media = $('video').not("[autoplay='autoplay']");
var tolerancePixel = 200;

function checkMedia(){
    // Get current browser top and bottom
    var scrollTop = $(window).scrollTop() + tolerancePixel;
    var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

    media.each(function(index, el) {
        var yTopMedia = $(this).offset().top;
        var yBottomMedia = $(this).height() + yTopMedia;

        if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ //view explaination in `In brief` section above
            $(this).get(0).play();
        } else {
            $(this).get(0).pause();
        }
    });

    //}
}
$(document).on('scroll', checkMedia);
});
