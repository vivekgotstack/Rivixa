# Frontend catalogue

The catalogue is bundled from `src/lib/products.json`: nine Ophthalmology products, six Gynaecology products and two Orthopedic products. Search and group filters run locally; no external catalogue, database or runtime download is used.

Six formulations and pack sizes come from locally supplied packaging PDFs: MOXIVIX, MOXIVIX-LP, NEPAVIX-CS, LOTEVIX, HYLOVIX and AQUAVIX. HYLOVIX's supplied front artwork does not state a strength, so no strength is published. The Nepavix source filename contains CX, but the actual label reads NEPAVIX-CS.

The Gynaecology entries are Fertivix-M, Fertivix-X, Progivix-SR 200 mg, Progivix-SR 300 mg, Dydrovix 10 mg and Dydrovix-SR 10 mg. The Orthopedic entries are Calcivix-XT and Calcivix-D3. These eight products were supplied by the user on 23 October 2026. The user confirmed that the numeric Progivix and Dydrovix variants are strengths in mg. Composition, packaging images and pack details remain blank until supplied. Their cards use a branded text panel and a product enquiry link.

The existing Ophthalmology images are generated illustrative carton-and-bottle mockups, not photographs of physical stock. Source PDFs are not linked from the website. Product information and availability can be requested from the company.

Run npm run build to export the site to out/. Publishing requires deploying that folder to the site's static host.
