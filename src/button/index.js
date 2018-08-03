"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const ast_1 = require("../utils/ast");
const config_1 = require("../utils/devkit-utils/config");
function default_1(options) {
    return schematics_1.chain([
        addComponentModulesToModule(options)
    ]);
}
exports.default = default_1;
function addComponentModulesToModule(options) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = config_1.getProjectFromWorkspace(workspace, options.project);
        ast_1.addModuleImportToRootModule(host, 'ButtonModule', 'primeng/button', project);
        return host;
    };
}
//# sourceMappingURL=index.js.map