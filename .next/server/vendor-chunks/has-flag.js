"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-flag";
exports.ids = ["vendor-chunks/has-flag"];
exports.modules = {

/***/ "(ssr)/../../../node_modules/has-flag/index.js":
/*!***********************************************!*\
  !*** ../../../node_modules/has-flag/index.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\nmodule.exports = (flag, argv)=>{\n    argv = argv || process.argv;\n    const prefix = flag.startsWith(\"-\") ? \"\" : flag.length === 1 ? \"-\" : \"--\";\n    const pos = argv.indexOf(prefix + flag);\n    const terminatorPos = argv.indexOf(\"--\");\n    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhcy1mbGFnL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0FBLE9BQU9DLE9BQU8sR0FBRyxDQUFDQyxNQUFNQztJQUN2QkEsT0FBT0EsUUFBUUMsUUFBUUQsSUFBSTtJQUMzQixNQUFNRSxTQUFTSCxLQUFLSSxVQUFVLENBQUMsT0FBTyxLQUFNSixLQUFLSyxNQUFNLEtBQUssSUFBSSxNQUFNO0lBQ3RFLE1BQU1DLE1BQU1MLEtBQUtNLE9BQU8sQ0FBQ0osU0FBU0g7SUFDbEMsTUFBTVEsZ0JBQWdCUCxLQUFLTSxPQUFPLENBQUM7SUFDbkMsT0FBT0QsUUFBUSxDQUFDLEtBQU1FLENBQUFBLGtCQUFrQixDQUFDLElBQUksT0FBT0YsTUFBTUUsYUFBWTtBQUN2RSIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLWNhcmVlci1wbGF0Zm9ybS8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFzLWZsYWcvaW5kZXguanM/Y2VhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IChmbGFnLCBhcmd2KSA9PiB7XG5cdGFyZ3YgPSBhcmd2IHx8IHByb2Nlc3MuYXJndjtcblx0Y29uc3QgcHJlZml4ID0gZmxhZy5zdGFydHNXaXRoKCctJykgPyAnJyA6IChmbGFnLmxlbmd0aCA9PT0gMSA/ICctJyA6ICctLScpO1xuXHRjb25zdCBwb3MgPSBhcmd2LmluZGV4T2YocHJlZml4ICsgZmxhZyk7XG5cdGNvbnN0IHRlcm1pbmF0b3JQb3MgPSBhcmd2LmluZGV4T2YoJy0tJyk7XG5cdHJldHVybiBwb3MgIT09IC0xICYmICh0ZXJtaW5hdG9yUG9zID09PSAtMSA/IHRydWUgOiBwb3MgPCB0ZXJtaW5hdG9yUG9zKTtcbn07XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImZsYWciLCJhcmd2IiwicHJvY2VzcyIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJsZW5ndGgiLCJwb3MiLCJpbmRleE9mIiwidGVybWluYXRvclBvcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../../node_modules/has-flag/index.js\n");

/***/ })

};
;