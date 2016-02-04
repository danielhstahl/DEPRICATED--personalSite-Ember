import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement(){
    window.componentHandler.upgradeDom();//upgrade mdl
  },
});
