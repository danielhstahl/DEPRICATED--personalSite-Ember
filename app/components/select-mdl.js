import Ember from 'ember';
//import computed from 'ember-new-computed'; //replicate menu?
export default Ember.Component.extend({
  //showMenu:false,
  /*didInsertElement(){
    window.componentHandler.upgradeDom();//upgrade mdl
  },*/
  /*_buttonId: computed('elementId', {
    get() {
      return `${this.get('elementId')}-button`;
    }
  }),*/
  actions:{
    changeValue(e){
      this.get('onSelect')(e.value, e.label);

      //this.value=
    }
  }

});
