export interface IClassNameMapping {
  [className: string]: boolean;
}

export type IClassNameInput = string | IClassNameMapping;

/**
 * React className helper method
 *
 * @param args
 * @returns {string}
 */
export function classnames(...args: IClassNameInput[]) {
  let classes = [];

  for (let arg of args) {
    if (arg) {
      if (typeof arg === 'string') {
        classes.push(arg);
      } else {
        for (let key in args) {
          if (args[key]) {
            classes.push(key);
          }
        }
      }
    }
  }

  return classes.join(' ');
}
