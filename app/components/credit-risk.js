import Ember from 'ember';
var inputs=[{
  name:'n',
  label:'Number of Assets',
  value:100000,
  min:100,
  max:10000000
},{
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
  label:'Systemic Drift',
  value:0.1,
  min:0.001,
  max:0.5
},{
  name:'sigma',
  label:'Systemic Volatility',
  value:0.3,
  min:0.001,
  max:0.5
},{
  name:'q',
  label:'q',
  value:0.05,
  min:0.001,
  max:0.15
},{
  name:'lambda',
  label:'lambda',
  value:0.05,
  min:0.001,
  max:0.15
},{
  name:'xNum',
  label:'Steps in X',
  value:1024,
  min:128,
  max:1024
},{
  name:'uNum',
  label:'Steps in U',
  value:128,
  min:32,
  max:256
}];
export default Ember.Component.extend({
  //socketIOService: Ember.inject.service('socket-io'),
  //socket:'',
  classNameBindings: ['hidden'],
  hidden:true,
  showChart:false,
  showProgress:false,
  chartOptions: {
    chart: {
        type: 'line'
    },
    legend:{
      enabled:false
    },
    title: {
      text: 'Distribution of Credit Loss'
    }
  },
  chartData: "",
  didUpdateAttrs(){
    this.set('hidden', !this.isHidden);
  },
  didInitAttrs() {
    var self=this;
    self._super.apply(this, arguments);
    self.socket.emit('creditrisk', 'hello');
    self.socket.on('creditRisk-data', this.onMessage, this);
  },
  onMessage: function(data) {
    data=JSON.parse(data);
    //console.log(data);
    /*var key=Object.keys(data);
    if(key[0]==='progress'){
      console.log(data);
      //this.set
    }
    else{*/
      var series=[{color:'#c1c1c1', pointStart:data.xmin, pointInterval:data.dx, data:data.y}];
      this.set('chartData', series);
      this.set('showProgress', false);
      this.set('showChart', true);
      this.sendAction('emitShowChart', true);
    //}

    //console.log(data);
    // This is executed within the ember run loop
  },
  inputs:inputs,
  actions:{
    submitInputs(obj){
      this.set('showProgress', true);
      this.socket.emit('getCredit', obj);
    }/*,
    toggleChart(){
      this.set('showChart', false);
    }*/
  }/*,
  willDestroy() {
    this.get('socketIOService').closeSocketFor('http://localhost:7000/');
  }*/
});
