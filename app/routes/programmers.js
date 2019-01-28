import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Linus Torvalds', 'Sir «Tim» Berners-Lee', 'Donald Knuth'];
  }
});
