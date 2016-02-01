import Ember from 'ember';
export default Ember.Component.extend({
  hasClicked:false,
  actions:{
    toggleForm(){
      this.set('hasClicked', !this.hasClicked);
    }
  },
});
