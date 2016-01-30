import Ember from 'ember';
var cards=[{
    id:'model',
    title:'Mathematical Modeling',
    image:'../assets/images/model.jpg',
    partial:"components/model"
},
{
    id:'sql',
    title:'Databases',
    image:'../assets/images/sql.jpg',
    partial:"components/database" 
},
{
    id:'crypto',
    title:'Crypto Currency',
    image:'../assets/images/crypto.jpg',
    partial:"components/crypto" 
},
{
    id:'programming',
    title:'Programming',
    image:'../assets/images/code.jpg',
    partial:"components/programming" 
},
{
    id:'passion',
    title:'Passions',
    image:'../assets/images/passion.jpg',
    partial:"components/passion" 
}];
export default Ember.Route.extend({
    model:function(){
        return cards;
    }
});
