import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return ['Uncle Bob', 'Alan Turing', 'MR Fields'];
    }
});
