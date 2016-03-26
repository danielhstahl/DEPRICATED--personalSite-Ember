import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';
var cards=[{
    title:'Credit Risk',
    image:'../assets/images/creditRisk.jpg',
    text:'This paper is published in the Journal of Credit Risk and pioneers efficient computation of the distribution of credit loss for large heterogenuous portfolios.',
    url:'http://www.risk.net/journal-of-credit-risk/technical-paper/2436463/loss-distributions-computational-efficiency-in-an-extended-framework',
    internalUrl:'assets/pdf/CreditRiskPaper.pdf',
    //route:'creditrisk-documentation',
    label:'PDF of paper'
    //partial:"components/model"
},
{
    title:'Operational Risk',
    image:'../assets/images/operationalRisk.jpg',
    text:'This paper significantly extends the standard LDA operational loss framework to include correlation between severity and frequency and auto-correlation in frequency.  The distribution can be recovered practically instantly even for very long tailed severity distributions.',
    //route:'opsrisk-documentation',
    internalUrl:'assets/pdf/OpsRiskPaper.pdf',
    label:'PDF of paper'
},
{
    title:'Credit Risk Extensions (unpublished)',
    image:'../assets/images/creditRiskExtensions.jpg',
    text:'This paper describes in greater detail how to allocate risk to individual loans including marginal liquidity risk',
    //route:'opsrisk-documentation',
    internalUrl:'assets/pdf/CreditRiskExtensions.pdf',
    label:'PDF of paper'
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
