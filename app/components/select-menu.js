import Ember from 'ember';

export default Ember.Component.extend({
  currentAsset:{
    value:0
  },
  actions:{
    changeValue(e){
      this.set('currentAsset', e);
      //console.log(this.currentAsset);
    }
  }
});
