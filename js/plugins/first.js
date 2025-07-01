jQuery.fn.setiLightbox = function () {
  var thumbnailPath = '';
  if (jQuery('#tg_lightbox_thumbnails').val() != '') {
    thumbnailPath = jQuery('#tg_lightbox_thumbnails').val();
  }
  else {
    thumbnailPath = 'horizontal';
  }

  var iLightboxapi = jQuery('a.fancy-gallery, .pp_gallery a, .img_frame, .fancy_video, .lightbox_vimeo, .lightbox_youtube, .woocommerce-product-gallery__image a').iLightBox({
    skin: jQuery('#tg_lightbox_skin').val(),
    path: thumbnailPath,
    type: 'inline, video, image',
    maxScale: 1,
    controls: {
      slideshow: true,
      arrows: true,
      thumbnail: jQuery('#tg_lightbox_thumbnails_display').val()
    },
    overlay: {
      opacity: jQuery('#tg_lightbox_opacity').val()
    },
    callback: {
      onOpen: function (api, position) {
        jQuery('body').addClass('blur');
      },
      onHide: function () {
        jQuery('body').removeClass('blur');
      }
    }
  });

  iLightboxapi.refresh();
}