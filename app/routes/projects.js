import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';
var cards=[{
    id:'creditRisk',
    title:'Credit Risk',
    image:'../assets/images/creditRisk.jpg',
    text:'This project shows how to compute the distribution of a credit portfolio of defaultable assets with stochastic PD and LGD.  It includes full granularity and efficient computation.',
    partial:'credit-risk',
    documentationUrl:'assets/pdf/CreditRiskPaper.pdf'
    //inputs:'creditRiskInputs'
    //partial:"components/model"
},
{
    id:'marketRisk',
    title:'Market Risk',
    image:'../assets/images/marketRisk.jpg',
    text:'This project shows a Monte Carlo simulation (featuring C++ backend) for the distribution of a variety of assets.',
    partial:'market-risk',
    documentationUrl:'assets/pdf/MarketRiskDocumentation.pdf'
    //inputs:'creditRiskInputs'
},
{
    id:'operationalRisk',
    title:'Operational Risk',
    image:'../assets/images/operationalRisk.jpg',
    text:'This project significantly extends the standard LDA operational loss framework to include correlation between severity and frequency and auto-correlation in frequency.  The distribution can be recovered practically instantly even for very long tailed severity distributions.',
    partial:'ops-risk',
    documentationUrl:'assets/pdf/OpsRiskPaper.pdf'
    //inputs:'opsRiskInputs'
}];

export default Ember.Route.extend(ResetScroll, {
  activate: function() {
    this._super.apply(this, arguments); // Call super at the beginning
    // Your stuff
  },
  model:function(){
      return cards;
  }
});
