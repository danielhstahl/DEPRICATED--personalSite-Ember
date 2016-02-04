import Ember from 'ember';
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
}];
export default Ember.Route.extend({
  model:function(){
      return cards;
  }
});
