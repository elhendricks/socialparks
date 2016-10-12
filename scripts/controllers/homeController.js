(function(module){
  var homeController = {};

  homeController.index = function(){
    $('#landing-page').fadeIn().siblings().hide();
  };

  homeController.npsPortion = function(cxt, next) {
    parksView.renderIndexPage();
    parksView.handleParksFilter();
    next();
  };

  module.homeController = homeController;

}(window));
