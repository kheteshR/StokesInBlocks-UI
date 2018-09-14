import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | userform', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:userform');
    assert.ok(route);
  });
});
