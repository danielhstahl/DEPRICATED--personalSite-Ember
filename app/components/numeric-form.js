import Ember from 'ember';
export default Ember.Component.extend({
  tagName:'form',
  //socketIOService: Ember.inject.service('socket-io'),
  /*classNameBindings: ['hidden'],
  hidden:true,
  didUpdateAttrs(){
    this.set('hidden', !this.isHidden);
  },*/
  /*didInsertElement(){
    window.componentHandler.upgradeDom();//upgrade mdl
  },*/
  submit(event){
    event.preventDefault();
    var n=event.target.length;
    var obj={};
    for(var i=0; i<(n-1); i++){ //n-1 to ignore button
      var val=parseFloat(event.target[i].value);
      obj[this.inputs[i].name]=val;
    }
    var hasError=false;
    for(i=0; i<(n-1); i++){ //n-1 to ignore button
      var currKey=this.inputs[i].name;
      var val=obj[currKey];
      if(this.inputs[i].validation){
        //console.log("got here");

        var otherKey=this.inputs[i].depends||"";
        var val2=0;
        if(otherKey){
          val2=obj[otherKey];
        }
        //console.log(this.inputs[i].validation(obj[currKey], obj[otherKey]));
        if(!this.inputs[i].validation(val, val2)){
          console.log("got here");
          //event.target[i].parentElement.classNames+=' is-invalid';
          event.target[i].parentElement.classList.add('is-invalid');
          console.log(event.target[i].parentElement);
          hasError=true;
        }
      }
      else if(this.inputs[i].min>val||this.inputs[i].max<val){
        hasError=true;
      }
      if(!event.target[i].checkValidity()){
        hasError=true;
      }
    }
    if(!hasError){
      this.get('onSubmit')(obj);
    }

  }//,
});
