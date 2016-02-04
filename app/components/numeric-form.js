import Ember from 'ember';
export default Ember.Component.extend({
  tagName:'form',
  //socketIOService: Ember.inject.service('socket-io'),
  /*classNameBindings: ['hidden'],
  hidden:true,
  didUpdateAttrs(){
    this.set('hidden', !this.isHidden);
  },*/
  didInsertElement(){
    window.componentHandler.upgradeDom();//upgrade mdl
  },
  submit(event){
    event.preventDefault();
    var n=event.target.length;
    var obj={};
    for(var i=0; i<(n-1); i++){ //n-1 to ignore button
      var val=parseFloat(event.target[i].value);
      if(this.inputs[i].min>val||this.inputs[i].max<val){
        break;
      }
      if(!event.target[i].checkValidity()){
        break;
      }
      obj[event.target[i].name]=val;
    }
    this.get('onSubmit')(obj);
  }//,
});
