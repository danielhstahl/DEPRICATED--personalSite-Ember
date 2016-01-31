import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('projects');
  this.route('research');
  this.route('about');
  this.route('creditrisk');
  this.route('marketrisk');
  this.route('operationalrisk');
});

export default Router;
