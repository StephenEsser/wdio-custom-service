class CustomService {
  onPrepare() {
    throw Error('Custom Service Failed.');
  }
}

module.exports = CustomService;
