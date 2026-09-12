# Frontend catalogue

The catalogue is committed in `src/lib/products.json` and imported through the typed `src/lib/products.ts` module. Search and filters run in memory. There is no API, database, IndexedDB, localStorage or runtime catalogue download. Edit the JSON and rebuild to update it.

Sources: [Neomedix Healthcare](https://neomedixhealthcare.com/) and [Raymed](https://www.raymedindia.com/our-products), reviewed 12 September 2026. Every record retains its source URL and brand. The data contains product facts, not copied marketing descriptions or dosing instructions. Pack sizes appear only where published and retrieved.

146 distinct records: 135 Ophthalmology listings, 10 Gynaecology listings and 3 Orthopedic listings. Two products occur in multiple areas. Orthopedic contains the two Raybon D3 presentations and Lofidol-SP. Unrelated ENT, dermatology, migraine and gastrointestinal products are excluded. Reference brand names are retained; listings do not establish Rivixa manufacture or availability.

Some source listings link to the wrong product, redirect to the home page, or have no retrievable specification. Unverified composition is left empty and displayed as requiring confirmation. Do not fill these gaps from another product's linked page. The affected entries are CYNQ, GATICOM, VIGOQUIN-KT, VIGOQUIN-PD, Macuvon-AF, KINDERWOODS, MACUVON-4G, FERTIVISION-M, NEPAVON and TRUFLUR.

`npm run build` exports the complete website to `out/`. Deploy that directory to any static host with directory-index support. Images are served as static assets. The contact page reads its category query in the browser; enquiries are prepared locally and sent by the visitor through their email application.
