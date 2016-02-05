import Ember from 'ember';

export default Ember.Component.extend({
  progress:"",
  didInitAttrs() {
    this.socket.on('progress', this.onMessage, this);
  },
  onMessage(data){
    //console.log(data);
    data=JSON.parse(data);
    //console.log(data.progress*100);
    this.set('progress', data.progress*100);
  }
});
