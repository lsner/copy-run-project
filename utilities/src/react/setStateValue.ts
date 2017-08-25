const SI = require('seamless-immutable').static;
import { isString, toPath } from 'lodash';

export function setStateValue(context, obj, cb?: Function) {
  if (cb) {
    context.setState((prevState) => {
      const stateValue = SI.merge(prevState.stateValue, obj, { deep: true });
      return { stateValue };
    }, cb);
  } else {
    context.setState((prevState) => {
      const stateValue = SI.merge(prevState.stateValue, obj, { deep: true });
      return { stateValue };
    });
  }
}

export const setState = setStateValue;

export function setInStateValue(context, path, value, cb?: Function) {
  const nextPath = isString(path) ? toPath(path) : path;

  if (cb) {
    context.setState((prevState) => {
      const stateValue = SI.setIn(prevState.stateValue, nextPath, value);
      return {
        stateValue
      };
    }, cb);
  } else {
    context.setState((prevState) => {
      const stateValue = SI.setIn(prevState.stateValue, nextPath, value);
      return {
        stateValue
      };
    });
  }
}

export const setInState = setInStateValue;
