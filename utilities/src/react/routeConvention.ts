import upperFirst from 'lodash/upperFirst';

function getComp(key, route) {
  if (route.comp) {
    return route.comp;
  } else {
    let comp = key.substring(1);
    return `${upperFirst(comp)}Page`;
  }
}

function getFile(key, route) {
  if (route.file) {
    return route.file;
  } else {
    let comp = key.substring(1);
    return `pages/${comp}Page/${comp}Page`;
  }
}

export const routeConvention = { getComp, getFile };
