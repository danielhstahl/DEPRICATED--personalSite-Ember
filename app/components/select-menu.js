import Ember from 'ember';

export default Ember.Component.extend({
  //classNames:['mdl-grid'],
  selectedParameters:[],
  didReceiveAttrs(){
    
    this.set('selectedParameters', this.assetParameters[this.currentAsset].concat(this.standardParameters));
    //console.log(this.get('selectedParameters'));
  },
  /*actions:{
    selectedValue(e){
      this.set('currentAsset', e);
      console.log(e);
    }
  }*/
});
