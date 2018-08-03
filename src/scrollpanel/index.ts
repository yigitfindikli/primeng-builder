import { chain, Rule, noop, Tree } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { addModuleImportToModule, findModuleFromOptions, addModuleImportToRootModule } from '../utils/ast';
import { buildComponent } from '../utils/devkit-utils/component';
import { getWorkspace, getProjectFromWorkspace } from '../utils/devkit-utils/config';

export default function(options: Schema): Rule {
  if(options.name!=null){
    return chain([
    buildComponent({ ...options }),
    options['skipImport'] ? noop() : addComponentModulesToModule(options)
  ]);
  }
  else{
    return chain([
      addJustComponentModulesToModule(options)
    ]);
  }
  
}

function addComponentModulesToModule(options: Schema) {
  return (host: Tree) => {
    const modulePath = findModuleFromOptions(host, options) || null;
    if (modulePath) {
      addModuleImportToModule(host, modulePath, 'ScrollPanelModule', 'primeng/scrollpanel');
    }
    return host;
  };
}
function addJustComponentModulesToModule(options: Schema) {
  return (host: Tree) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);

    addModuleImportToRootModule(
        host,
        'ScrollPanelModule',
        'primeng/scrollpanel',
        project);

    return host;
  };
}
