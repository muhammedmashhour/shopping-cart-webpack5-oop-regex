
class Storage {
  static getData(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  static setData(key, value) {
    localStorage.setItem(key, value);
  }
}

export default Storage;