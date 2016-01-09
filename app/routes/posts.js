// app/routes/posts.js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('post', {
      orderBy: 'published',
      limitToLast: 10
    });
  }
});