import Ember from 'ember';
var assets=[{
    label:"Bond",
    value:0,
},{
    label:"Euro Dollar Future",
    value:1
},{
    label:"Bond Call (Zero Coupon)",
    value:3
},{
    label:"Bond Put (Zero Coupon)",
    value:4
},{
    label:"Caplet",
    value:7
},{
    label:"Swap",
    value:8,
},{
    label:"Swaption",
    value:9
},{
    label:"American Swaption (Warning: slower solution)",
    value:10
}];
var assetParameters={
    "0":[{
        label:"Maturity (years)",
        id:"T",
        placeholder:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Maturity must be greater than the \"Simulate to date\""
    }],
    "1":[{
        label:"Maturity (years)",
        id:"T",
        placeholder:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Maturity must be greater than the \"Simulate to date\""
    },{
        label:"Floating Tenor (years)",
        id:"delta",
        placeholder:".25",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Floating Tenor must be greater than 0"
    }],
    "3":[{
        label:"Maturity (years)",
        id:"T",
        placeholder:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Maturity must be greater than the \"Simulate to date\""
    },{
        label:"Underlying Maturity (years)",
        id:"Tm",
        placeholder:"1.25",
        depends:"T",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Underlying Maturity must be greater than Maturity"
    },{
        label:"Strike",
        id:"k",
        placeholder:".97",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Strike must be greater than zero"
    }],
    "4":[{
        label:"Maturity (years)",
        id:"T",
        placeholder:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Maturity must be greater than the \"Simulate to date\""
    },{
        label:"Underlying Maturity (years)",
        id:"Tm",
        placeholder:"1.25",
        depends:"T",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Underlying Maturity must be greater than Maturity"
    },{
        label:"Strike",
        id:"k",
        placeholder:".97",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Strike must be greater than zero"
    }],
    "7":[{
        label:"Maturity (years)",
        id:"T",
        placeholder:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Maturity must be greater than the \"Simulate to date\""
    },{
        label:"Floating Tenor (years)",
        id:"delta",
        placeholder:".25",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Tenor must be greater than zero"
    },{
        label:"Strike",
        id:"k",
        placeholder:".02",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Strike must be greater than zero"
    }],
    "8":[{
        label:"Maturity (years)",
        id:"T",
        placeholder:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Maturity must be greater than the \"Simulate to date\""
    },{
        label:"Floating Tenor (years)",
        id:"delta",
        placeholder:".25",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Tenor must be greater than zero"
    },{
        label:"Swap Rate",
        id:"k",
        placeholder:".02",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Swap Rate must be greater than zero"
    }],
    "9":[{
        label:"Maturity (years)",
        id:"T",
        placeholder:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Maturity must be greater than the \"Simulate to date\""
    },{
        label:"Floating Tenor (years)",
        id:"delta",
        placeholder:".25",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Tenor must be greater than zero"
    },{
        label:"Underlying Maturity (years)",
        id:"Tm",
        placeholder:"6",
        depends:"T",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Underlying Maturity must be greater than Maturity"
    },{
        label:"Strike",
        id:"k",
        placeholder:".03",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Strike must be greater than zero"
    }],
    "10":[{
        label:"Maturity (years)",
        id:"T",
        placeholder:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Maturity must be greater than the \"Simulate to date\""
    },{
        label:"Floating Tenor (years)",
        id:"delta",
        placeholder:".25",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Tenor must be greater than zero"
    },{
        label:"Underlying Maturity (years)",
        id:"Tm",
        placeholder:"6",
        depends:"T",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Underlying Maturity must be greater than Maturity"
    },{
        label:"Strike",
        id:"k",
        placeholder:".03",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Strike must be greater than zero"
    }]
};
var standardParameters=[{
  label:"Number of simulations",
  value:1000,
  name:"n",
  min:50,
  max:100000
},{
  label:"Volatility",
  name:"sigma",
  value:0.04,
  min:0.01,
  max:0.1
},{
  label:"Mean Reversion",
  name:"a",
  value:0.2,
  min:0.01,
  max:0.5
},{
  label:"Simulate to (in days)",
  name:"t",
  value:10,
  min:1,
  max:30
}];
export default Ember.Component.extend({
  classNameBindings: ['hidden'],
  hidden:true,
  showChart:false,
  chartOptions: {
    chart: {
      type: 'column',
      marginRight: 10
    },
    plotOptions: {
        series: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },
    legend:{
      enabled:false
    },
    title: {
      text: 'Histogram of Prices'
    }
  },
  chartData: "",
  //socket:'',
  didUpdateAttrs(){
    this.set('hidden', !this.isHidden);
  },
  didInitAttrs() {
    var self=this;
    //this.set('socket', this.socket);
    self._super.apply(this, arguments);
    self.socket.emit('opsrisk', 'hello');
    self.socket.on('opsRisk-data', this.onMessage, this);
  },
  onMessage: function(data) {
    data=JSON.parse(data);
    var series=[{color:'#c1c1c1', pointStart:data.xmin, pointInterval:data.dx, data:data.y}];
    this.set('chartData', series);
    this.set('showChart', true);
    this.sendAction('emitShowChart', true);
  },
  assets:assets,
  assetParameters:assetParameters,
  actions:{
    submitInputs(obj){
      this.socket.emit('getOps', obj);
    }
  }
});
