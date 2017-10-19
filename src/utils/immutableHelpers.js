import Immutable, { Iterable } from 'immutable';

/* eslint-disable */
export const emptyList = Immutable.List();
export const emptyMap = Immutable.Map();
export const emptySet = Immutable.Set();
const fromJS = Immutable.fromJS;

export function toImmutable(obj) {
  return Iterable.isIterable(obj) ? obj : fromJS(obj);
}
export function toJS(obj) {
  return Iterable.isIterable(obj) ? obj.toJS() : obj;
}

export function toImmutableSet(obj) {
  return Immutable.Set(obj);
}

export function toImmutableRecord(obj) {
  return Immutable.Record(obj);
}

export const emptyFunction = () => {};
