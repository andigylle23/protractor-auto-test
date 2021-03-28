const { expect, assert } = require("chai");

describe('Search Google Functionality', function() {

    it('As user, I should be able to access null column site, so that I could I see the match result of my search.', function() {

      // For non angular website, you need to declare this in order to run.
      browser.waitForAngularEnabled(false);
      // Launch the null column page using chrome you set on conf.js
      browser.get('https://www.nullcolumn.com/');
      
      // find the search for automation testing menu
      element(by.xpath("//span[text()='Automation Testing']")).sendKeys("protractor blogs");

    });

  });