import { chain, Rule, noop, Tree } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { addModuleImportToModule, findModuleFromOptions } from '../utils/ast';
import { buildComponent } from '../utils/devkit-utils/component';

export default function(options: Schema): Rule {
  return chain([
    buildComponent({ ...options }),
    options['skipImport'] ? noop() : addComponentModulesToModule(options)
  ]);
}

function addComponentModulesToModule(options: Schema) {
  return (host: Tree) => {
    const modulePath = findModuleFromOptions(host, options) || null;
    if (modulePath) {
      addModuleImportToModule(host, modulePath, 'AccordionModule', 'primeng/accordion');
    }
    return host;
  };
}
