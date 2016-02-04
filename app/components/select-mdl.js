import Ember from 'ember';

export default Ember.Component.extend({
  showMenu:false,
  /*didInsertElement(){
    window.componentHandler.upgradeDom();//upgrade mdl
  },*/
  didRender(){
    //console.log("hello")
    window.componentHandler.upgradeDom();//upgrade mdl
    /*var addEventListeners=function(e){
      var onClickFunction=function(el){
        t.value=el.textContent;
      };
      var t=e.querySelector("input");
      var li=e.querySelectorAll("li");
      e.querySelector("i");
      var n=li.length;
      for(var i=0; i<n; i++){
        li[i].onclick=onClickFunction;
      }

    };
    var e=document.querySelectorAll(".getmdl-select");
    var n=e.length;
    for(var i=0; i<n; i++){
      addEventListeners(e[i]);
    }*/


  },
  actions:{
    changeValue(e){
      console.log(e);

      //this.value=
    },
    clickInput(){
      console.log("hello");
      this.set('showMenu', true);
    }
  }

});
