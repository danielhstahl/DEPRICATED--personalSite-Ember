import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('avatar-contact', 'Integration | Component | avatar contact', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{avatar-contact}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#avatar-contact}}
      template block text
    {{/avatar-contact}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
