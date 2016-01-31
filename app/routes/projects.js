import Ember from 'ember';
var cards=[{
    id:'creditRisk',
    title:'Credit Risk',
    image:'../assets/images/creditRisk.jpg',
    text:'This project shows how to compute the distribution of a credit portfolio of defaultable assets with stochastic PD and LGD.  It includes full granularity and efficient computation.',
    partial:'credit-risk'
    //partial:"components/model"
},
{
    id:'marketRisk',
    title:'Market Risk',
    image:'../assets/images/marketRisk.jpg',
    text:'This project shows a Monte Carlo simulation (featuring C++ backend) for the distribution of a variety of assets.',
    partial:'market-risk'
},
{
    id:'operationalRisk',
    title:'Operational Risk',
    image:'../assets/images/operationalRisk.jpg',
    text:'This project significantly extends the standard LDA operational loss framework to include correlation between severity and frequency and auto-correlation in frequency.  The distribution can be recovered practically instantly even for very long tailed severity distributions.',
    partial:'ops-risk'
}];
export default Ember.Route.extend({
    model:function(){
        return cards;
    }
});
