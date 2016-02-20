import Ember from 'ember';
var navLinks=[{
    url:'index',
    display:'Home',
    //icon:'home'
},{
    url:'about',
    display:'About',
    //icon:'info'
},{
    url:'blog',
    display:'Thoughts',
    //icon:'info'
},{
    url:'projects',
    display:'Projects',
    //icon:'widgets'
},{
    url:'research',
    display:'Research',
    //icon:'school'
}];
export default Ember.Component.extend({
    tagName:'nav',
    classNames: ['mdl-navigation', 'mdl-color--grey-800'],
    navs:navLinks
});
