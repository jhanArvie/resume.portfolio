const defaultLocale = "en";
const supportedLocales = ["en", "no"];

function setLocaleHander() {
    const options = document.querySelectorAll(".dropdown__option");
    const label = document.querySelector(".dropdown__label");

    // Initialize locale if not set or invalid
    if (!supportedLocales.includes(localStorage.locale)) {
        localStorage.locale = defaultLocale;
    }

    // Set the current language in the dropdown
    if (label) {
        label.textContent = localStorage.locale || defaultLocale;
    }

    options.forEach((option) => {
        option.addEventListener("click", (e) => {
            const lang = e.target.getAttribute('data-lang');
            if (lang && lang !== localStorage.locale) {
                localStorage.locale = lang;
                window.location.reload();
            }
        });
    });
}

async function getLocale() {
    const locale = localStorage.locale || defaultLocale;
    try {
        const response = await fetch(`/locales/${locale}.json`);
        if (!response.ok) {
            throw new Error('Locale not found');
        }
        return await response.json();
    } catch (error) {
        console.error(`Failed to load ${locale} locale, falling back to ${defaultLocale}`, error);
        const response = await fetch(`/locales/${defaultLocale}.json`);
        return await response.json();
    }
}

export default setLocaleHander;
export { getLocale };
