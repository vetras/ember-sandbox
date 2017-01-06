import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('people-list', 'Integration | Component | people list', {
  integration: true
});

test('it renders', function (assert) {

  this.render(hbs`{{people-list}}`);
  assert.equal(this.$().text().trim(), '');

  var model = ['a', 'b'];
  var t = 'theTitle';
  this.set('model', model);
  this.set('t', t);
  this.render(hbs`{{people-list title=t people=model}}`);
  assert.equal(this.$('h2').text(), t, 'can set the title');
  this.$('li').each(function (index, elem) {
    assert.equal($(elem).text(), model[index], 'can set the model');
  });

});
