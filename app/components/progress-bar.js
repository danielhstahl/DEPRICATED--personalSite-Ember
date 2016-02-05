import Ember from 'ember';

export default Ember.Component.extend({
  progress:"",
  didInitAttrs() {
    this.socket.on('progress', this.onMessage, this);
  },
  onMessage(data){
    this.set('progress', data);
  }
});
