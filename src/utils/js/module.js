import './submodule';

export const message = 'message from modules.js';
export default 'default message from modules.js';

console.log('log from module.js');

if (import.meta.hot) {
  import.meta.hot.accept(['./submodule.js'], ([newSubmodule, newModule]) => {
    console.log('[vite]:update module.js', newModule)
    console.log('[vite]:update submodule.js', newSubmodule)
  })
}