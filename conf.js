exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites : {
      googleSearch: [
        'specs/nullcolumn.spec.js'
      ]
    },
    framework: "jasmine",
    jasmineNodeOpts: {
      showColors: true,
      includeStackTrace: true,
      defaultTimeoutInterval: 1440000
    },
    directConnect: true,
    capabilities: {
      browserName: 'chrome',
      // comment this out if you want to display the chrome or local testing
      chromeOptions: {
        args: [ "--headless", "--disable-gpu", "--window-size=1920,1080" ]
      }
    },
    onPrepare: function() {
      // Jasmine Reports
      let HtmlReporter = require('protractor-beautiful-reporter');
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'reports',
         screenshotsSubfolder: 'screenshotsOnFailure',
         takeScreenShotsOnlyForFailedSpecs: true,
         jsonsSubfolder: 'jsonFiles',
         excludeSkippedSpecs: true,
         preserveDirectory: false,
         clientDefaults:{
         showTotalDurationIn: "header",
         totalDurationFormat: "h:m:s",
         gatherBrowserLogs: true
       },
      }).getJasmine2Reporter());

    },
  };