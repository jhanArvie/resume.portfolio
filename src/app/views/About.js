import Path from "@/components/Path.js";
import About from "@/blocks/about/About.js"
import Skills from "@/blocks/about/Skills.js";
import Certifications from "@/blocks/about/Certifications.js";
import Facts from "@/blocks/about/Facts.js";

import "styles/pages/about.sass"

export default (t, locale) => {
    return /*html*/ `
        ${Path({ description: t.description })}
        ${About(t.about)}
        ${Skills(t.skills, locale?.skills)}
        ${Certifications(t.certifications)}
        ${Facts(t.facts)}
    `;
};
