import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('userform');
  this.route('dashboard');
  this.route('bank');
  this.route('nsedashboard');
  this.route('evaluator');
});

export default Router;
