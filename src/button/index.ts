import { chain, Rule,  Tree } from '@angular-devkit/schematics';
import { Schema } from './schema';
import {addModuleImportToRootModule } from '../utils/ast';
import { getWorkspace, getProjectFromWorkspace } from '../utils/devkit-utils/config';

export default function(options: Schema): Rule {
  return chain([
    addComponentModulesToModule(options)
  ]);
}

function addComponentModulesToModule(options: Schema) {
  return (host: Tree) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);

    addModuleImportToRootModule(
        host,
        'ButtonModule',
        'primeng/button',
        project);

    return host;
  };
}
