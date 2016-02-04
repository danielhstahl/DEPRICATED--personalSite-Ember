import Ember from 'ember';
export default Ember.Component.extend({
  somethingIsShowing:false,
  showChart:false,
  parametersAreShowing:false,
  actions:{
    toggleForm(){
      //this.set('hasClicked', !this.hasClicked);
      //this.set('parametersAreShowing', this.hasClicked);
      if(this.showChart){
        this.set('parametersAreShowing', true);
        this.set('showChart', false);
        this.set('somethingIsShowing', true);
      }
      else if(this.parametersAreShowing){
        this.set('somethingIsShowing', false);
        this.set('parametersAreShowing', false);
      }
      else{
        this.set('somethingIsShowing', true);
        this.set('parametersAreShowing', true);
      }
    },
    setShowChart:function(val){
      this.set('showChart', val);
      this.set('parametersAreShowing', false);
    }
  },
});
