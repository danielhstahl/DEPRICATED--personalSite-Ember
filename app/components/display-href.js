import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'a',
  attributeBindings: ['target', 'href'],
  target:"_blank",
  href:''
});
