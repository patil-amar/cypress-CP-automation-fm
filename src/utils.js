// @flow

function set(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn("localStorage.setItem is not available", error);
    return false;
  }
}

function get(key: string) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    console.warn("localStorage.getItem is not available", error);
    return null;
  }
}

function remove(key: string) {
  try {
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.warn("localStorage.removeItem is not available", error);
    return false;
  }
}

function clear() {
  try {
    window.localStorage.clear();
    return true;
  } catch (error) {
    console.warn("localStorage.clear is not available", error);
    return false;
  }
}

const localStorage = {
  set,
  get,
  remove,
  clear,
};

export { localStorage };
