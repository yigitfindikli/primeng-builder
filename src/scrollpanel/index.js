"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const ast_1 = require("../utils/ast");
const component_1 = require("../utils/devkit-utils/component");
const config_1 = require("../utils/devkit-utils/config");
function default_1(options) {
    if (options.name != null) {
        return schematics_1.chain([
            component_1.buildComponent(Object.assign({}, options)),
            options['skipImport'] ? schematics_1.noop() : addComponentModulesToModule(options)
        ]);
    }
    else {
        return schematics_1.chain([
            addJustComponentModulesToModule(options)
        ]);
    }
}
exports.default = default_1;
function addComponentModulesToModule(options) {
    return (host) => {
        const modulePath = ast_1.findModuleFromOptions(host, options) || null;
        if (modulePath) {
            ast_1.addModuleImportToModule(host, modulePath, 'ScrollPanelModule', 'primeng/scrollpanel');
        }
        return host;
    };
}
function addJustComponentModulesToModule(options) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = config_1.getProjectFromWorkspace(workspace, options.project);
        ast_1.addModuleImportToRootModule(host, 'ScrollPanelModule', 'primeng/scrollpanel', project);
        return host;
    };
}
//# sourceMappingURL=index.js.map