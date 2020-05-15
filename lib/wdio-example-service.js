class CustomService {
  onPrepare() {
    console.log('On Prepare - Custom Service 1');

    // Throwing the error in this service will prevent Service 2 and Service 3 from executing.
    throw Error('Custom Service Failed.');
  }
}

module.exports = CustomService;
