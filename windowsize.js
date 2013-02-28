function windowsize(){
  //check the window size and add some helper classes
  //to the html tag
  //Malcolm Boyanton 02242013
  var winH = jQuery(window).height();
  var winW = jQuery(window).width();
  var cssW = '';
  var cssH = '';
  jQuery('html').removeClass('lt-480 lt-640 lt-768 lt-800 lt-1024 lt-1280 lt-1440 lt-1680 lt-1920');
  jQuery('html').removeClass('gt-480 gt-640 gt-768 gt-800 gt-1024 gt-1280 gt-1440 gt-1680 gt-1920');
  //320, 480, 640, 768, 800, 1024, 1280, 1440, 1680, 1920
  //lt-480, lt-640, lt-768, lt-800, lt-1024, lt-1280, lt-1440, lt-1680, lt-1920
  //gt-480, gt-640, gt-768, gt-800, gt-1024, gt-1280, gt-1440, gt-1680, gt-1920
  if(winW > 320)
  {
    jQuery('html').addClass('gt-320');
  }
  else
  {
    jQuery('html').addClass('lt-320');
  }

  if(winW > 480)
  {
    jQuery('html').addClass('gt-480');
  }
  else
  {
    jQuery('html').addClass('lt-480');
  }

  if(winW > 640)
  {
    jQuery('html').addClass('gt-640');
  }
  else
  {
    jQuery('html').addClass('lt-640');
  }

  if(winW > 768)
  {
    jQuery('html').addClass('gt-768');
  }
  else
  {
    jQuery('html').addClass('lt-768');
  }

  if(winW > 800)
  {
    jQuery('html').addClass('gt-800');
  }
  else
  {
    jQuery('html').addClass('lt-800');
  }

  if(winW > 1024)
  {
    jQuery('html').addClass('gt-1024');
  }
  else
  {
    jQuery('html').addClass('lt-1024');
  }

  if(winW > 1280)
  {
    jQuery('html').addClass('gt-1280');
  }
  else
  {
    jQuery('html').addClass('lt-1280');
  }

  if(winW > 1440)
  {
    jQuery('html').addClass('gt-1440');
  }
  else
  {
    jQuery('html').addClass('lt-1440');
  }

  if(winW > 1680)
  {
    jQuery('html').addClass('gt-1680');
  }
  else
  {
    jQuery('html').addClass('lt-1680');
  }

  if(winW > 1920)
  {
    jQuery('html').addClass('gt-1920');
  }
  else
  {
    jQuery('html').addClass('lt-1920');
  }
}
windowsize();
