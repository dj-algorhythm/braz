var setImgSize = function (){
    /*var imgWindowWidth = $('.img-window').width();
    $('.img-window > img').width(.7816128773924881877152238327861 * imgWindowWidth);
    var imgWidth = .7816128773924881877152238327861 * imgWindowWidth;
    $('.img-window > img').height(imgWidth * 1/1.5121951219512195121951219512195);*/
    var winWidth = $('.img-window').width();
    $('.gall-image').height(winWidth * 1/1.333333);
    $('.gall-image').width('100%');
};

$(document).ready(function(){
  $(".hisrc img").hisrc();
  $(".hisrc img+img").hisrc({
    useTransparentGif: true,
    speedTestUri: '50K.jpg'
  });

  $(".backstretch-carousel").backstretch([
    "./img/bg-services.jpg",
    "./img/bg-gallery1.jpg",
    "./img/bg-gallery2.jpg"],
    {duration:1000,fade:1000});

  $(".backstretch-carousel").backstretch("pause");

  $('.screen').waypoint(function(direction) {
    if (direction === 'down') {
     $(".backstretch-carousel").backstretch("next");
    }
    if (direction === 'up') {
     $(".backstretch-carousel").backstretch("prev");
    }
  }, { offset: '50%' });


  setImgSize();

  $('.gall-image').hover(function(event){
      var imgSrc = $(event.currentTarget).attr("src");
      var newSrc = imgSrc.replace(".jpg", "Tint.jpg");
      $(event.currentTarget).attr("src", newSrc);
  },function(){
      var imgSrc = $(event.currentTarget).attr("src");
      var newSrc = imgSrc.replace("Tint.jpg", ".jpg");
      $(event.currentTarget).attr("src", newSrc);
  });
  //$(document).resize(setImgSize());
});
