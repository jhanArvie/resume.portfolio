export default (certifications) => {
    if (!certifications || !certifications.items || !Array.isArray(certifications.items)) {
        console.warn('No certifications data provided or invalid format');
        return '';
    }
    
    return /*html*/`
        <section class="certifications">
            <div class="container">
                <h2 class="h2">${certifications.title || 'Certifications'}</h2>
                <div class="certifications__content">
                    ${certifications.items.map(cert => `
                        <div class="certification-card">
                            <div class="certification-card__header">
                                <h3 class="certification-card__title">${cert.name}</h3>
                                <div class="certification-card__issuer">${cert.issuedBy}</div>
                            </div>
                            ${cert.date ? `<div class="certification-card__date">${cert.date}</div>` : ''}
                            ${cert.certificateUrl ? `
                                <a href="${cert.certificateUrl}" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   class="certification-card__button">
                                    View Certificate =>
                                </a>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
};
