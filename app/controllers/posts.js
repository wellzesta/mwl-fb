// app/controllers/posts.js
import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    publishPost: function() {
      var newPost = this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body'),
        timestamp: new Date().getTime()
      });
      newPost.save();
    }
  }
});


// Notes:

// this.get('title') gets the value of title that is defined by value=title in the input control:
// 	{{input value=title placeholder="Title"}}