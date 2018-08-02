function select(array) {
  let idx = Math.floor(Math.random() * array.length);
  let item = array.splice(idx, 1);
  return item[0];
}
export default function psychorandom(array) {
  let items = [];
  let old = [];
  while (array.length + old.length > 0) {
    let item;
    if (array.length == 0) {
      item = old.shift();
    } else {
      item = select(array);
    }
    items.push(select(item));
    if (item.length > 0) {
      old.push(item);
    }
    if (old.length >= 10) {
      array.push(old.shift());
    }
  }
  return items;
}
