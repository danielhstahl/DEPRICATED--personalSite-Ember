import Ember from 'ember';
var cards=[{
    id:'creditRisk',
    title:'Credit Risk',
    image:'../assets/images/creditRisk.jpg',
    text:'This project shows how to compute the distribution of a credit portfolio of defaultable assets with stochastic PD and LGD.  It includes full granularity and efficient computation.'
    //partial:"components/model"
},
{
    id:'marketRisk',
    title:'Market Risk',
    image:'../assets/images/marketRisk.jpg',
    text:'This project shows a Monte Carlo simulation (featuring C++ backend) for the distribution of a variety of assets.'
},
{
    id:'operationalRisk',
    title:'Operational Risk',
    image:'../assets/images/operationalRisk.jpg',
    text:'This project significantly extends the standard LDA operational loss framework to include correlation between severity and frequency and auto-correlation in frequency.  The distribution can be recovered practically instantly even for very long tailed severity distributions.' 
},
{
    id:'firstHitting',
    title:'First Hitting Time',
    image:'../assets/images/firstHitting.jpg',
    text:'This project finds the distribution of the first hitting time of a generic one dimensional SDE.  This demonstrates the ease with which ODE solutions and FFT solutions can be combined to generate many distributions depending on the input parameters.'
    //partial:"components/programming" 
}];
export default Ember.Route.extend({
    model:function(){
        return cards;
    }
});
