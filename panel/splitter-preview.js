(() => {
  'use strict';

  return function init ( panel ) {
    let viewEL = panel.$.view;

    Editor.import('packages://ui-kit-preview/panel/splitter-preview.tmpl').then(
      content => {
        viewEL.innerHTML = content;
      }
    );
  };
})();
