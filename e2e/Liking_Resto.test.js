const assert = require('assert');

Feature('Liking and Unliking Resto');

Before(({ I }) => {
  I.amOnPage('#/favorite');
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item__not__found');
});

const likeFirstResto = async (I) => {
  I.amOnPage('/');
  I.seeElement('.resto-item_name');
  const firstResto = locate('.resto-item_name').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.waitForElement('.swal2-confirm', 10);
  I.click('.swal2-confirm');
  I.amOnPage('#/favorite');
  return firstRestoName;
};

Scenario('liking one restaurant', async ({ I }) => {
  const firstRestoName = await likeFirstResto(I);

  I.seeElement('.resto-item_name');
  const likedRestoName = await I.grabTextFrom('.resto-item_name');
  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  const firstRestoName = await likeFirstResto(I);

  I.seeElement('.resto-item_name');
  I.click('.resto-item_name');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.waitForElement('.swal2-confirm', 10);
  I.click('.swal2-confirm');
  I.amOnPage('#/favorite');

  I.dontSeeElement('.resto-item_name');
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item__not__found');
});
