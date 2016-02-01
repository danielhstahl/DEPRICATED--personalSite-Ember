import Ember from 'ember';
export default Ember.Component.extend({
  tagName:'form',
  socketIOService: Ember.inject.service('socket-io'),
  classNameBindings: ['hidden'],
  hidden:true,
  didUpdateAttrs(){
    this.set('hidden', !this.isHidden);
    //this.rerender();
  },
  /*didInitAttrs(){
    console.log("got here");
  },
  didRender(){
    console.log("I rendered");
  },*/
  /*didUpdateAttrs(){

  },*/
  onMessage: function(data) {
    console.log(data);
    // This is executed within the ember run loop
  },
  willRender() {
    var self=this;
    self._super.apply(this, arguments);
    this.get('socketIOService').closeSocketFor('http://localhost:7000/');
    self.socket = this.get('socketIOService').socketFor('http://localhost:7000/');
    self.socket.on('connect', function() {
      self.socket.emit(this.key_ping, 'hello');
      //socket.emit('Hello server');
    }, this);
    self.socket.on(this.key_data, this.onMessage, this);
  },
  submit(event){
    event.preventDefault();
    var n=event.target.length;
    var obj={};
    for(var i=0; i<(n-1); i++){ //n-1 to ignore button
      var val=parseFloat(event.target[i].value);
      if(this.inputs[i].min>val||this.inputs[i].max<val){
        break;
      }
      if(!event.target[i].checkValidity()){
        break;
      }
      obj[event.target[i].name]=val;
    }
    //this.get('onSubmit')(obj);
    this.socket.emit(this.key, obj);
  },
  willDestroy() {
    this.get('socketIOService').closeSocketFor('http://localhost:7000/');
  }
});
