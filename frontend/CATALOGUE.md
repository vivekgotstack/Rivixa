# Frontend catalogue

The catalogue is bundled from `src/lib/products.json`: 23 unique products, including eleven Ophthalmology products, six Gynaecology products, three Orthopedic products and six General Products. Some products appear in more than one section. Search and group filters run locally; no external catalogue, database or runtime download is used.

Six formulations and pack sizes come from locally supplied packaging PDFs: MOXIVIX, MOXIVIX-LP, NEPAVIX-CS, LOTEVIX, HYLOVIX and AQUAVIX. HYLOVIX's supplied front artwork does not state a strength, so no strength is published. The Nepavix source filename contains CX, but the actual label reads NEPAVIX-CS.

The Gynaecology entries are Fertivix-M, Fertivix-S, Progevix 200, Progevix 300 SR, Dydrovix 10 and Dydrovix 20 SR. The Orthopedic entries are Calcivix-XT and Calcivix-D3. These eight products were supplied by the user on 23 October 2026. The user confirmed that the numeric Progevix and Dydrovix variants are strengths in mg. Each has an original Rivixa carton concept, with its confirmed name/strength and green Lifesciences Pvt Ltd branding. The cards explicitly identify these as concepts with unconfirmed formulations. Composition and pack details remain blank because no approved Rivixa label has been supplied.

The comparison research requested by the user is recorded in `../design/packaging/REFERENCE-FORMULATIONS.md`. It describes other manufacturers' products as proposed references, including conflicts and missing evidence. Those reference formulations must not be treated as confirmed Rivixa ingredients or inserted into the public catalogue without an approved product specification. Original generated images and prompts are kept in `../design/packaging/`; compressed WebP copies are served by the site.

The existing Ophthalmology images are generated illustrative carton-and-bottle mockups, not photographs of physical stock. Source PDFs are not linked from the website. Product information and availability can be requested from the company.

Run npm run build to export the site to out/. Publishing requires deploying that folder to the site's static host.

Names confirmed 28 October 2026: Fertivix-S, Progevix 200, Progevix 300 SR, Dydrovix 10 and Dydrovix 20 SR. Fertivix-S, both Progevix entries and Dydrovix 20 SR use text nameplates until corrected packaging artwork is available.

Six supplied labels added 28 October 2026: Gastrovix-DSR, MIGRAVIX-10, VIXANAC-SP, Vitavix Plus, Vitavix tablets and Vitavix Syrup. Each has a generated studio packshot based on the label's product identity. Composition and pack text come from the product panels, excluding printer annotations and order quantities. Gastrovix-DSR has no confirmed retail pack count, so its pack field remains blank. All six appear under General Products; VIXANAC-SP also appears under Orthopedic, and Vitavix tablets and syrup under Ophthalmology. The render originals and exact prompts are preserved in `../design/packaging/2026-10-28/`.

The three Vitavix ingredient descriptions include the vitamins and minerals named in the supplied nutrition panels. Quantities are not inferred for these ingredients. The user confirmed that the eight older products with missing formulas should remain pending until their compositions are supplied.
