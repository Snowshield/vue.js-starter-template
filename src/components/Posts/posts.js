import Vue from 'vue';
import { postsResource } from 'src/helpers/resources';
import template from './posts.html';

export default Vue.extend({
  template,

  data() {
    return {
      posts: []
    };
  },

  route: {
    data() {
      return postsResource.get().then((response) => {
        return this.$set('posts', response.data);
      }, (errorResponse) => {
        // Handle error...
        console.error('API responded with:', errorResponse.status);
      });
    }
  }
});
