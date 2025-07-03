import routes from "@/consts/routes";
import MediaIcon from "./MediaIcon";

const paths = ["/", "/projects", "/about-me"]

export default (t) => {
    return /*html*/ `
        <header class="header">
            <input class="hamburger" type="checkbox" aria-label="Menu" />

            <div class="media-header">
                <span class="media-header__line"></span>
                <div class="media-header__links">
                    ${["discord", "github", "email"]
                        .map((name) => MediaIcon({ name }))
                        .join("")}
                </div>
            </div>


            <div class="container">

                <div class="header__inner">
                    <a class="logo" href="/">
                        <img class="logo__img" src="/images/my_logo.svg" alt="Jhan Arvie logo">
                        <span class="logo__name">Jhan Arvie</span>
                    </a>
                    <div class="header__links">
                        ${paths
                            .map(
                                (path) => /*html*/ `
                                <a href="${path}" class="header__link ${
                                    window.location.pathname === path
                                        ? "header__link_active"
                                        : ""
                                }">${t[routes[path].name]}</a>
                            `
                            )
                            .join("")}
                    </div>
                    <div class="dropdown">
                        <span class="dropdown__label">${localStorage.locale || 'en'}</span>
                        <div class="dropdown__list">
                            <div class="dropdown__option" data-lang="en">en</div>
                            <div class="dropdown__option" data-lang="no">no</div>
                        </div>
                    </div>

                </div>
            </div>
            

        </header>
    `;
};
