module.exports = function() {
  this.When(/^I open Google's search page$/, () => {
    browser
      .url('http://google.com')
      .waitForVisible('body', 1000);
  });

  this.Then(/^the title is "([^"]*)"$/, title => {
    expect(browser.getTitle()).to.be.equal(title);
  });

  this.Then(/^the Google search form exists$/, client => {
    expect(browser.isVisible('input[name="q"]')).to.be.equal(true);
  });
};
