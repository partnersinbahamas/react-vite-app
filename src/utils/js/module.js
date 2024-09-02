import './submodule';

export const message = 'message from modules.js';
export default 'default message from modules.js';

console.log('log from module.js');

if (import.meta.hot) { // meta.hot update js files w/o page reload.
  import.meta.hot.accept(['./submodule.js'], ([newSubmodule, newModule]) => {
    console.log('[vite]:update module.js', newModule)
    console.log('[vite]:update submodule.js', newSubmodule)
  })
}

import.meta.hot.dispose(() => {}) // use to clean-up any persistent side effects created by meta.hot.accept: