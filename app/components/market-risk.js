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
        name:"T",
        value:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Required > \"Simulate to date\""
    }],
    "1":[{
        label:"Maturity (years)",
        name:"T",
        value:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Required > \"Simulate to date\""
    },{
        label:"Floating Tenor",
        name:"delta",
        value:".25",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Required > zero"
    }],
    "3":[{
        label:"Maturity (years)",
        name:"T",
        value:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Required > \"Simulate to date\""
    },{
        label:"Underlying Maturity",
        name:"Tm",
        value:"1.25",
        depends:"T",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Required > Maturity"
    },{
        label:"Strike",
        name:"k",
        value:".97",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Required > zero"
    }],
    "4":[{
        label:"Maturity (years)",
        name:"T",
        value:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Required > \"Simulate to date\""
    },{
        label:"Underlying Maturity",
        name:"Tm",
        value:"1.25",
        depends:"T",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Required > Maturity"
    },{
        label:"Strike",
        name:"k",
        value:".97",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Required > zero"
    }],
    "7":[{
        label:"Maturity (years)",
        name:"T",
        value:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Required > \"Simulate to date\""
    },{
        label:"Floating Tenor",
        name:"delta",
        value:".25",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Required > zero"
    },{
        label:"Strike",
        name:"k",
        value:".02",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Required > zero"
    }],
    "8":[{
        label:"Maturity (years)",
        name:"T",
        value:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Required > \"Simulate to date\""
    },{
        label:"Floating Tenor",
        name:"delta",
        value:".25",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Required > zero"
    },{
        label:"Swap Rate",
        name:"k",
        value:".02",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Required > zero"
    }],
    "9":[{
        label:"Maturity (years)",
        name:"T",
        value:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Required > \"Simulate to date\""
    },{
        label:"Floating Tenor",
        name:"delta",
        value:".25",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Required > zero"
    },{
        label:"Underlying Maturity",
        name:"Tm",
        value:"6",
        depends:"T",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Required > Maturity"
    },{
        label:"Strike",
        name:"k",
        value:".03",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Required > zero"
    }],
    "10":[{
        label:"Maturity (years)",
        name:"T",
        value:"1",
        depends:"t",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val*360>val1;
        },
        errMessage:"Required > \"Simulate to date\""
    },{
        label:"Floating Tenor",
        name:"delta",
        value:".25",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Required > zero"
    },{
        label:"Underlying Maturity",
        name:"Tm",
        value:"6",
        depends:"T",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Required > Maturity"
    },{
        label:"Strike",
        name:"k",
        value:".03",
        validation:function(val, val1){
            return !isNaN(parseFloat(val)) && isFinite(val) && val>val1;
        },
        errMessage:"Required > zero"
    }]
};
var standardParameters=[{
  label:"# of simulations",
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
var preliminaryChartOptions={
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
  xAxis:{
    categories:[]
  },
  legend:{
    enabled:false
  },
  title: {
    text: 'Histogram of Prices'
  }
};
export default Ember.Component.extend({
  classNameBindings: ['hidden'],
  hidden:true,
  showChart:false,
  chartOptions: "",
  chartData: "",
  currentAsset:0,
  showProgress:false,
  currentLabel:"Bond",
  stillWaiting:true,
  //socket:'',
  didUpdateAttrs(){
    this.set('hidden', !this.isHidden);
  },
  didInitAttrs() {
    var self=this;
    //this.set('socket', this.socket);
    self._super.apply(this, arguments);
    self.socket.emit('marketrisk', 'hello');
    self.socket.emit('getYield', 'hello');
    self.socket.on('marketRisk-data', this.onMessage, this);
  },
  onMessage: function(data) {
    data=JSON.parse(data);
    var keys=Object.keys(data);
    if(keys[0]!=='Spot'&&keys[0]!=='Forward'){
      preliminaryChartOptions.xAxis.categories=data.bins;
      this.set('chartOptions', preliminaryChartOptions);
      var series=[{color:'#c1c1c1', data:data.count}];
      this.set('chartData', series);
      this.set('showProgress', false);
      this.set('showChart', true);
      this.sendAction('emitShowChart', true);
    }
    else{
      this.set('stillWaiting', false);
    }
  },
  assets:assets,
  assetParameters:assetParameters,
  standardParameters:standardParameters,
  actions:{
    submitInputs(obj){
      //console.log(obj);
      obj.asset=this.currentAsset;
      this.set('showProgress', true);
      this.socket.emit('getMarket', obj);
    },
    onSelect(val, label){
      this.set('currentAsset', val);
      this.set('currentLabel', label);
      //console.log(e);
    }
  }
});
