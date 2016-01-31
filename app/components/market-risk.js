import Ember from 'ember';
export default Ember.Component.extend({

  socketIOService: Ember.inject.service('socket-io'),
  classNameBindings: ['hidden'],
  hidden:true,
  didUpdateAttrs(){
    this.set('hidden', !this.isHidden);
  },
  willRender() {
    this._super.apply(this, arguments);
    var socket = this.get('socketIOService').socketFor('http://localhost:7000/');
    socket.on('connect', function() {
      socket.emit('marketrisk', 'hello');
      //socket.emit('Hello server');
    }, this);
    socket.on('message', this.onMessage, this);
  },
  onMessage: function(data) {
    console.log(data);
    // This is executed within the ember run loop
  },
  action:function(){

  },
  willDestroy() {
    this.get('socketIOService').closeSocketFor('http://localhost:7000/');
  }
});
