const assert = require('assert');

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

Feature('add customer review on deail page');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('add review', async ({ I }) => {
  const randomName = generateRandomString(7);
  const randomReview = generateRandomString(20);

  I.waitForElement('.resto-item_name', 5);
  const firstResto = locate('.resto-item_name').first();
  I.click(firstResto);

  I.waitForElement('.form-review form', 5);
  I.seeElement('#inputName');
  I.fillField('#inputName', randomName);

  I.seeElement('#inputReview');
  I.fillField('#inputReview', randomReview);

  I.waitForElement('#submit-review', 5);
  I.click('#submit-review');

  const lastReview = locate(".body-review").last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(randomReview, lastReviewText.trim());
});
