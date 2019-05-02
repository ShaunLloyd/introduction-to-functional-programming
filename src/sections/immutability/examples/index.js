/* eslint import/no-webpack-loader-syntax: off */

import mutateObject from '!raw-loader!./mutate-object.js';
import byReference from '!raw-loader!./by-reference.js';
import copyObject from '!raw-loader!./copy-object.js';

export { mutateObject, byReference, copyObject };
