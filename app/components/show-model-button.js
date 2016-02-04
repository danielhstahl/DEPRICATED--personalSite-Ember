import Ember from 'ember';

export default Ember.Component.extend({
  //tagName:'div',
  //classNames: ['mdl-card__supporting-text', 'mdl-card--border'],
  classNames: ['mdl-cell', 'mdl-cell--2-col-phone'],//, 'mdl-cell--6-col', 'mdl-cell--4-col-tablet', 'mdl-cell--4-col-phone'],
  //hasClicked:false,
  click(){
    //this.set('hasClicked', !this.hasClicked);
    this.get('onclick')();
  }
});
