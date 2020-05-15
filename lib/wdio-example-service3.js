class CustomService {
  onPrepare() {
    console.log('On Prepare - Custom Service 3');

    // Uncomment to to throw error.
    // throw Error('Custom Service Failed 3.');
  }
}

module.exports = CustomService;
