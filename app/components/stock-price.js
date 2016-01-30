import Ember from 'ember';

export default Ember.Component.extend({
    tagName:'span',
    didInitAttrs(){
        var self=this;
        Ember.$.ajax('http://finance.google.com/finance/info?client=ig&q='+this.stock+'&callback=?', {
            method: 'get',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(data) {
                data=data[0];
                self.set('up', data.c.substring(0, 1) !== '-');
                self.set('price', data.l);
                self.set('change', data.c);
                self.set('symbol', data.t);
            },
            error:function(data, st, err){
                console.log(err);
            }
        });
    }
});
