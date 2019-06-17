export const util = {}
let store;
document.store = document.store || {};
store = document.store;
store.val = store.val || {};
util.getStore = () => {
	return store;
}

store.setVal = function (key, val) {
	this.val[key] = val;
}

store.getVal = function (key)  {
	return this.val[key];
}
