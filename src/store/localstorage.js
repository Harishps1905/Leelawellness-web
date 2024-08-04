// localstorage.js
export const localStoragePlugin = (store) => {
    // Subscribe to store mutations
    store.subscribe((mutation, state) => {
      localStorage.setItem('leelashilajith', JSON.stringify(state));
    });
};
  