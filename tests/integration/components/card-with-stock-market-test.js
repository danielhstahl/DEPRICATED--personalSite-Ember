import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('card-with-stock-market', 'Integration | Component | card with stock market', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{card-with-stock-market}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#card-with-stock-market}}
      template block text
    {{/card-with-stock-market}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
