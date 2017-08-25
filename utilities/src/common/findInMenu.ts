import { find, isArray } from 'lodash';

export interface IMenuItem {
  name: string;
  link: string; // aka. pathname
  id: string | number;
  children?: IMenuItem[];
}

export function findInMenu(menu: IMenuItem[] = [], pathname: string) {
  let id, pid;

  menu.forEach((item: IMenuItem) => {
    if (isArray(item.children)) {
      const r = find(item.children, ['link', pathname]);
      if (r != null) {
        id = r.id;
        pid = item.id;
      }
    }
  });

  return { id, pid };
}
