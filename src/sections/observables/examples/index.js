/* eslint import/no-webpack-loader-syntax: off */

import unicast from '!raw-loader!./unicast.js';
import beforePipe from '!raw-loader!./before-pipe.js';
import afterPipe from '!raw-loader!./after-pipe.js';
import refactoredPipe from '!raw-loader!./refactored-pipe.js';

export { unicast, beforePipe, afterPipe, refactoredPipe };
