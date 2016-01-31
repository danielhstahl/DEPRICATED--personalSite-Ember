import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'iframe',
  attributeBindings: ['src', 'width', 'height', 'frameborder'],
  //src: 'http://docs.google.com/gview?url='+this.url,
  width: 700,
  //height: 600,
  frameborder: 0,
  didInsertElement(){
    //var currElement=this.$();
    var $currElement=this.$(this.get('element'));
    var $window=this.$(window);
    console.log($window.height());
    $currElement.height($window.height());
    $window.resize(function(){
      $currElement.height($window.height());
    });

  }
});
