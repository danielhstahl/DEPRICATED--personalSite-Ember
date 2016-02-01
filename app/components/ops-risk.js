import Ember from 'ember';
/*var inputs=[{
  name:'t',
  label:'Time Horizon',
  value:1,
  min:0.02,
  max:5
},{
  name:'x0',
  label:'X0',
  value:1,
  min:0.5,
  max:5
},{
  name:'alpha',
  label:'Speed',
  value:0.4,
  min:0.001,
  max:0.9
},{
  name:'sigma',
  label:'Volatility',
  value:0.3,
  min:0.001,
  max:0.5
},{
  name:'lambda',
  label:'Lambda',
  value:100,
  min:1,
  max:200
},{
  name:'alphaStable',
  label:'Alpha',
  value:1.1,
  min:1,
  max:2
},{
  name:'muStable',
  label:'Shift (Stable)',
  value:1300,
  min:1,
  max:2000
},{
  name:'cStable',
  label:'Scale (Stable)',
  value:100,
  min:1,
  max:200
},{
  name:'rho',
  label:'Correlation',
  value:0.9,
  min:0,
  max:0.99
},{
  name:'numODE',
  label:'Steps in ODE',
  value:128,
  min:32,
  max:256
},{
  name:'xNum',
  label:'Steps in X',
  value:1024,
  min:128,
  max:1024
},{
  name:'uNum',
  label:'Steps in U',
  value:256,
  min:32,
  max:256
}];*/
export default Ember.Component.extend({
  socketIOService: Ember.inject.service('socket-io'),
  socket:'',
  classNameBindings: ['hidden'],
  hidden:true,
  didUpdateAttrs(){
    this.set('hidden', !this.isHidden);
  },
  willRender() {
    var self=this;
    self._super.apply(this, arguments);
    self.socket = this.get('socketIOService').socketFor('http://localhost:7000/');
    self.socket.on('connect', function() {
      self.socket.emit('opsrisk', 'hello');
      //socket.emit('Hello server');
    }, this);
    self.socket.on('opsRisk-data', this.onMessage, this);
  },
  onMessage: function(data) {
    console.log(data);
    // This is executed within the ember run loop
  },
  inputs:inputs,
  actions:{
    submitInputs(obj){
      this.socket.emit('getOps', obj);
    }
  },
  willDestroy() {
    this.get('socketIOService').closeSocketFor('http://localhost:7000/');
  }
});
