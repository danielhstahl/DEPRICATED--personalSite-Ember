import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';


export default Ember.Route.extend(ResetScroll, {
  activate: function() {
    this._super.apply(this, arguments); // Call super at the beginning
    // Your stuff
  },
  model:function(){
      //return cards;
  }
});
/*export default Ember.Route.extend({
    model:function(){
        return cards;
    }
});*/
