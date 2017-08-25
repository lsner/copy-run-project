import { isArray } from 'lodash';

export function mapDepth(list, depth = 1) {
  return list.map(item => {
    if (isArray(item.children)) {
      mapDepth(item.children, depth + 1);
    }
    item.depth = depth;
    return item;
  })
}
