class CustomService {
  onPrepare() {
    console.log('On Prepare - Custom Service 2');

    // Uncomment to to throw error.
    // throw Error('Custom Service Failed 2.');
  }

  before() {
    console.log('Global Browser Options: ', JSON.stringify(global.browser.options, null, 2));
  }
}

module.exports = CustomService;
