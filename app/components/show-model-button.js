import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'div',
  classNames: ['mdl-card__supporting-text', 'mdl-card--border'],
  hasClicked:false,
  click(){
    this.set('hasClicked', !this.hasClicked);
    this.get('onclick')();
  }
});
