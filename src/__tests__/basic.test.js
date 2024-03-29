const assert = require('assert');

/**
 * Wait a X amount of time.
 */
const delay = miliseconds => new Promise(resolve => setTimeout(resolve, miliseconds));

/**
 * Load page recursive.
 */
const load = async (path = '/') => {
  try {
    await page.goto('http://localhost:1338' + path);
    await delay(500);
  } catch (e) {
    await load(path);
  }
};

describe('Forum', () => {
  /**
   * Run a first load.
   */
  beforeAll(load);

  it('should redirect to 404 if page does not exist.', async () => {
    await load('/some-random-page');

    console.log(page.url())

    assert(page.url().indexOf('404') !== -1, 'Should redirect to 404 if thread does not exist.');
  });
});
