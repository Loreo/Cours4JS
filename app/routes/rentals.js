import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {rentals: this.get('store').findAll('rental')};
  }
});
