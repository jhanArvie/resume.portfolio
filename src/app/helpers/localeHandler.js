const defaultLocale = "en"

function setLocaleHander() {
    const options = document.querySelectorAll(".dropdown__option");
    const label = document.querySelector(".dropdown__label");

    // Set default locale to English if not set
    if (!["en", "no"].includes(localStorage.locale)) {
        localStorage.locale = defaultLocale;
    }

    // Update the current language display
    if (localStorage.locale) {
        label.textContent = localStorage.locale;
    }

    options.forEach((option) => {
        // Set the current language in the dropdown
        if (option.textContent === localStorage.locale) {
            [label.textContent, option.textContent] = [localStorage.locale, label.textContent];
        }

        option.addEventListener("click", () => {
            localStorage.locale = option.textContent;
            window.location.reload();
        });
    });
}

async function getLocale() {
    const locale = localStorage.locale || defaultLocale;
    return fetch(`/locales/${locale}.json`).then(res => {
        if (!res.ok) {
            // Fallback to English if the requested locale file doesn't exist
            return fetch('/locales/en.json').then(r => r.json());
        }
        return res.json();
    });
}

export default setLocaleHander;
export { getLocale };
