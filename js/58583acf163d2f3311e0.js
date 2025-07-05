"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_views_Projects_js"],{

/***/ "./src/app/components/Path.js":
/*!************************************!*\
  !*** ./src/app/components/Path.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {\n    return /*html*/`\n        <div class=\"path\">\n            <h1 class=\"h1 path__name\">${window.location.pathname.slice(1)}</h1>\n            <p class=\"path__description\">${description}</p>\n        </div>\n    `\n});\n\n//# sourceURL=webpack://portfolio/./src/app/components/Path.js?");

/***/ }),

/***/ "./src/app/components/Project.js":
/*!***************************************!*\
  !*** ./src/app/components/Project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/websites */ \"./src/app/consts/websites.js\");\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\n\n\n\n\nfunction mapLinks(links) {\n    function map(link) {\n        let href = \"\";\n        \n        // Handle directory links (Google Drive)\n        if (link === \"directory\") {\n            return /*html*/ `<a href=\"${links[link]}\" class=\"button\" target=\"_blank\" rel=\"noopener noreferrer\">Directory =></a>`;\n        }\n        \n        if (link === \"figma\") {\n            // If it's already a full URL, use it as-is\n            if (links[link].startsWith(\"http\")) {\n                href = links[link];\n            } else {\n                // Otherwise, construct the community file URL\n                href = `https://figma.com/community/file/${links[link]}`;\n            }\n        } else if (link === \"github\" && links[link].startsWith(\"/\")) {\n            href = _consts_media__WEBPACK_IMPORTED_MODULE_3__[\"default\"].github + links[link];\n        } else {\n            // Default case for other links\n            href = \"https://\" + (link === \"live\" ? \"\" : _consts_websites__WEBPACK_IMPORTED_MODULE_1__[\"default\"][link] || '') + links[link];\n        }\n\n        const className = link === \"cached\" ? \"button__secondary\" : \"\";\n        const name = `${link[0].toUpperCase()}${link.slice(1)}`;\n\n        return /*html*/ `<a href=\"${href}\" class=\"button ${className}\" target=\"_blank\" rel=\"noopener noreferrer\">${name} =></a>`;\n    }\n\n    return Object.keys(links).map(map).join(\"\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\n    const { hasImage, techs: projectTech, links } = _consts_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(\n        (project) => project.id === id\n    );\n\n    return /*html*/ `\n        <div class=\"project\">\n            ${\n                hasImage\n                    ? `<img src=\"/images/projects/${id}.webp\" alt=\"${t[id].name}\" class=\"project__image\">`\n                    : \"\"\n            }\n            \n            <ul class=\"project__techs\">\n                ${projectTech\n                    .map(\n                        (tech) =>\n                            /*html*/ `<li class=\"project__tech\">${_consts_techs__WEBPACK_IMPORTED_MODULE_2__[\"default\"][tech]}</li>`\n                    )\n                    .join(\"\")}\n            </ul> \n\n            <div class=\"project__content\">\n                <div class=\"project__name\">${t[id].name}</div>\n                <div class=\"project__description\">${t[id].description}</div>\n                <div class=\"project__links\">${mapLinks(links)}</div>\n            </div>\n        </div> \n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Project.js?");

/***/ }),

/***/ "./src/app/components/ProjectList.js":
/*!*******************************************!*\
  !*** ./src/app/components/ProjectList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Project */ \"./src/app/components/Project.js\");\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ title, filter = () => true, limit = _consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length }, t) => {\n    return /*html*/ `\n            ${title ? `<div> <h2 class=\"h2\">${title}</h2>` : \"\"}\n            <div class=\"project-list\">\n                ${_consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n                    .filter(filter)\n                    .slice(0, limit)\n                    .sort((a, b) => a.hasImage - b.hasImage)\n                    .map(({ id }) => (0,_components_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ id }, t))\n                    .join(\"\")}\n            </div>\n        ${title ? \"</div>\" : \"\"}\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/ProjectList.js?");

/***/ }),

/***/ "./src/app/consts/projects.js":
/*!************************************!*\
  !*** ./src/app/consts/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @type {import(\"../../types/Project\").Project[]}\n */\nconst projects = [\n    // Cybersecurity Projects\n    {\n        id: \"incident-response\",\n        techs: [\"splunk\", \"wireshark\", \"incident\", \"tcpdump\", \"suricata\"],\n        links: {\n            directory: \"https://drive.google.com/drive/folders/1-IU_hEAxM1mA560dcE8ks6igdJ-XhTUt\"\n        },\n        hasImage: true\n    },\n    {\n        id: \"risk-vulnerabilities\",\n        techs: [\"risks\"],\n        links: {\n            directory: \"https://drive.google.com/drive/folders/1WBrA6Dmp2sGbkdsHj47HBIOWvOE9-FQ2\"\n        },\n        hasImage: true\n    },\n    {\n        id: \"python-thumbnail\",\n        techs: [\"python\"],\n        links: {\n            directory: \"https://drive.google.com/drive/folders/1otEbfNNVn7kvyW_AMUVylckg4Jqe4Fku\"\n        },\n        hasImage: true\n    },\n    {\n        id: \"computer-networking\",\n        techs: [\"network\", \"tcpdump\"],\n        links: {\n            directory: \"https://drive.google.com/drive/folders/1YmBOnKgoq1qRPqwhU-xFxKv5mBT7qgO2\"\n        },\n        hasImage: true\n    },\n    {\n        id: \"linux-sql\",\n        techs: [\"linux\", \"sql\"],\n        links: {\n            directory: \"https://drive.google.com/drive/folders/1K2T9DEJ33suJVNnvKm-OMh6MLeISCC8s\"\n        },\n        hasImage: true\n    },\n    {\n        id: \"assets-control\",\n        techs: [\"assets\", \"nist\"],\n        links: {\n            directory: \"https://drive.google.com/drive/folders/18WBZJwQ0lJnBwRwjvNJCD7XlSbzqvPJK\"\n        },\n        hasImage: true\n    },\n    {\n        id: \"poemtales\",\n        isSmall: true,  \n        techs: [\"html\", \"css\", \"js\", \"figma\"],\n        links: {\n            github: \"jhanArvie/FED1-PE1-jhanArvie-1\",\n            live: \"poemtales.netlify.app\",\n            figma: \"https://www.figma.com/design/udV9skXSCpGCU8uE6dmsHO/Project-Exam-Blog-Post\"\n        },\n        hasImage: true  \n    },\n    {\n        id: \"rainydays\",\n        isSmall: true,  \n        techs: [\"html\", \"css\", \"js\", \"figma\"],\n        links: {\n            github: \"jhanArvie/rainy-days-v2\",\n            live: \"jhanarvie.github.io/rainy-days-v2\",\n            figma: \"https://www.figma.com/design/UEbpcl1lDvc9wjveayDM32/Rainy-Days\"\n        },\n        hasImage: true  \n    },\n    {\n        id: \"science-museum\",\n        isSmall: true,  \n        techs: [\"html\", \"css\", \"js\", \"figma\"],\n        links: {\n            github: \"jhanArvie/community_science_museum\",\n            live: \"jhanarvie.github.io/community_science_museum\",\n            figma: \"https://www.figma.com/design/0N9TUpWUpJjDHx4zqRzFDH/Museum\"\n        },\n        hasImage: true  \n    },\n    {\n        id: \"nature-passion\",\n        isSmall: true,\n        techs: [\"figma\"],\n        links: {\n            figma: \"https://www.figma.com/design/qefogBMXpcnETDlhkx6TBb/Nature-Passion?node-id=25-7&t=DXIgjn0aKhybZYz4-1\"\n        },\n        hasImage: true\n    },\n    {\n        id: \"webservices\",\n        isSmall: true,\n        techs: [\"html\", \"css\", \"js\", \"tailwind\"],\n        links: {\n            live: \"webplusservices.netlify.app/#home\"\n        },\n        hasImage: true\n    },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n\n//# sourceURL=webpack://portfolio/./src/app/consts/projects.js?");

/***/ }),

/***/ "./src/app/consts/techs.js":
/*!*********************************!*\
  !*** ./src/app/consts/techs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    // Cybersecurity & Governance\n    assets: \"Assets & Control Management\",\n    risks: \"Risks & Vulnerabilities Assessment\",\n    incident: \"Incident Reporting & Documentation\",\n    network: \"Network Fundamentals\",\n    nist: \"NIST CSF 2.0\",\n    tcpdump: \"tcpdump\",\n    virustotal: \"VirusTotal\",\n    suricata: \"Suricata\",\n    \n    // Programming & Development\n    python: \"Python\",\n    js: \"JavaScript\",\n    html: \"HTML\",\n    css: \"CSS\",\n    tailwind: \"Tailwind CSS\",\n    \n    // Databases & Systems\n    sql: \"SQL\",\n    linux: \"Linux (OS/Command Line)\",\n    \n    // Tools\n    vscode: \"VS Code (IDE)\",\n    windsurf: \"Windsurf\",\n    figma: \"Figma\",\n    git: \"Git/GitHub\",\n    wireshark: \"Wireshark\",\n    splunk: \"Splunk\"\n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/techs.js?");

/***/ }),

/***/ "./src/app/views/Projects.js":
/*!***********************************!*\
  !*** ./src/app/views/Projects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Path.js */ \"./src/app/components/Path.js\");\n/* harmony import */ var _components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectList.js */ \"./src/app/components/ProjectList.js\");\n/* harmony import */ var styles_pages_projects_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/pages/projects.sass */ \"./src/assets/styles/pages/projects.sass\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\n    return /*html*/ `\n        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ description: t.description })}\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.decent, filter: (p) => !p.isSmall }, t2.projects)}\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.small, filter: (p) => p.isSmall && !p.isInProgress }, t2.projects)}\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/Projects.js?");

/***/ }),

/***/ "./src/assets/styles/pages/projects.sass":
/*!***********************************************!*\
  !*** ./src/assets/styles/pages/projects.sass ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/pages/projects.sass?");

/***/ })

}]);