// sourced from https://www.seancdavis.com/blog/better-website-performance-pixelated-placeholder-images/

class PlaceholderImage {
  constructor(el) {
    // Set reference to the pixelated placeholder image.
    this.placeholder = $(el);
    // Wrap the placeholder element so we can perform the transition.
    this.wrapElement();
    // Load the full-size image.
    this.loadImage();
  }

  wrapElement() {
    // Add a "placeholder-image" class to the placeholder. This makes the
    // placeholder positioned relatively, which enables it to sit in front of
    // the absolutely-positioned full-size image during the transition.
    this.placeholder.addClass('placeholder-image');
    // Wrap the placeholder image in a <span> tag that is positioned relatively
    // so the full-size image can be positioned absolutely inside it.
    this.placeholder.wrap('<span class="placeholder-wrapper"></span>');
    // Set a reference to the wrapping element.
    this.wrapper = this.placeholder.parent();
  }

  loadImage() {
    // Prepend a blank image to the wrapper. The "placeholder-loading" class
    // positions it absolutely just behind the placeholder image.
    this.wrapper.prepend('<img class="placeholder-loading">');
    // Set a reference to the image.
    this.image = this.wrapper.find('.placeholder-loading').first();
    // When the image loads, run the transitionImage() function, maintaining the
    // proper scope. This is run before "src" is set so that we can be sure it
    // fires.
    this.image.on('load', $.proxy(this.transitionImage, this));
    // Set the "src" attribute to the value of the "data-src" attribute.
    this.image.attr('src', this.placeholder.data('src'));
  }

  transitionImage(event) {
    // Fade out the placeholder once the full-size image is loaded.
    this.placeholder.fadeTo(1000, 0, () => {
      // After fade is complete, apply the classes that were on the placeholder
      // image (sans "placeholder-image") to the full-size image.
      this.image.attr('class', this.placeholder.attr('class')).removeClass('placeholder-image');
      // Remove the placeholder image.
      this.placeholder.remove();
      // Unwrap the full-size image (i.e. delete the <span> element).
      this.image.unwrap();
    });
  }
}

$(document).ready(function() {
  // When the page loads, run the pixelated placeholder process for each image
  // on the page.
  $('.header-image').each((idx, img) => new PlaceholderImage(img));
});
