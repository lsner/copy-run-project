import { isArray } from 'lodash';

export function ret(list, maxDepth, depth, maxList, oList) {
  return list.map(item => {
    if (isArray(item.children)) {
      ret(item.children, maxDepth, depth + 1, maxList, oList);
    }
    item.depth = depth;
    if (depth < maxDepth) {
      oList.push(item.id);
    } else {
      maxList.push(item.id);
    }
    return item;
  })
}

export function mapDepthAndList(list, maxDepth) {
  let maxList = [];
  let oList = [];
  ret(list, maxDepth, 1, maxList, oList);
  return { list, maxList, oList };
}
