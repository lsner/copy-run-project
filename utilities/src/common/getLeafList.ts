import { isArray } from 'lodash';

function ret(list, acc, acc2) {
  list.forEach(item => {
    if (!isArray(item.children)) {
      acc.push(item.id);
    } else {
      acc2.push(item.id);
      ret(item.children, acc, acc2);
    }
  });

}

export function getLeafList(list) {
  let acc = [];
  let acc2 = [];
  ret(list, acc, acc2);
  return { leafList: acc, oList: acc2 };
}
