import Ember from 'ember';

export default Ember.Component.extend({
    tagName:'span',
    age:Math.abs(new Date(Date.now() - new Date("4/10/1989").getTime()).getUTCFullYear()-1970)
});
