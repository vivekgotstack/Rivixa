# Frontend catalogue

The catalogue is bundled from src/lib/products.json. It contains only the nine Rivixa eye-drop products requested for Ophthalmology. Search and group filters run locally; no external catalogue, database or runtime download is used.

Six formulations and pack sizes come from locally supplied packaging PDFs: MOXIVIX, MOXIVIX-LP, NEPAVIX-CS, LOTEVIX, HYLOVIX and AQUAVIX. HYLOVIX's supplied front artwork does not state a strength, so no strength is published. The Nepavix source filename contains CX, but the actual label reads NEPAVIX-CS.

GATIVIX, MOXIVIX-DX and AQUAVIX-FORTE have generic illustrative packaging as approved by the user. Composition and pack size remain unpublished until confirmed PDFs are supplied. Their cards clearly indicate pending details.

Product images are generated illustrative carton-and-bottle mockups, not photographs of physical stock. Six are based on supplied artwork; three are generic brand concepts. Source PDFs are served locally through product cards. Gynaecology and Orthopedic pages retain their care content and enquiry links without unsupported product listings.

Run npm run build to export the site to out/. Publishing requires deploying that folder to the site's static host.
