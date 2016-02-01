import Ember from 'ember';
var cards=[{
    id:'creditRisk',
    title:'Credit Risk',
    image:'../assets/images/creditRisk.jpg',
    text:'This project shows how to compute the distribution of a credit portfolio of defaultable assets with stochastic PD and LGD.  It includes full granularity and efficient computation.',
    //partial:'credit-risk',
    inputs:'creditRiskInputs'
    //partial:"components/model"
},
{
    id:'marketRisk',
    title:'Market Risk',
    image:'../assets/images/marketRisk.jpg',
    text:'This project shows a Monte Carlo simulation (featuring C++ backend) for the distribution of a variety of assets.',
    //partial:'market-risk'
    //inputs:'creditRiskInputs'
},
{
    id:'operationalRisk',
    title:'Operational Risk',
    image:'../assets/images/operationalRisk.jpg',
    text:'This project significantly extends the standard LDA operational loss framework to include correlation between severity and frequency and auto-correlation in frequency.  The distribution can be recovered practically instantly even for very long tailed severity distributions.',
    //partial:'ops-risk'
    inputs:'opsRiskInputs'
}];
var opsInputs=[{
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
}];
var creditInputs=[{
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
export default Ember.Route.extend({
    model:function(){
        return {cards:cards, creditRiskInputs:creditInputs, opsRiskInputs:opsInputs};
    }
});
