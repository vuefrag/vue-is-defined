import { unref } from 'vue';

function isDefined(v) {
  return unref(v) != null;
}

export { isDefined };
