export const articles = [
  {
    slug: "a-clearer-product-enquiry",
    category: "PRODUCT INFORMATION",
    title: "The details that make a product enquiry clearer.",
    description: "A practical checklist for asking about a brand, its composition, pack and availability.",
    image: "/images/blog-product-enquiry.jpg",
    imageAlt: "A doctor and patient discussing health information during a consultation",
    sections: [
      { title: "Start with the exact product", paragraphs: ["A product name is the starting point of a useful enquiry. Include the complete brand name, any suffix and the strength printed on the pack. Products with similar names can have different compositions or release descriptions, so copying the name exactly helps avoid confusion.", "If you are checking an existing pack, refer to its label when writing your enquiry. A packaging illustration on this website is a visual reference; the label on the supplied product and current information from the company are the appropriate sources for product particulars."] },
      { title: "Add the details that matter to your request", paragraphs: ["Tell the team whether you need composition, dosage form, pack configuration, availability or distribution information. Include your organisation, city and the product you are asking about. For a commercial enquiry, an indicative quantity and delivery location give the conversation a clearer starting point.", "If a composition or pack size is not listed online, ask the team to confirm it. Avoid assuming that a suffix, product colour or a similar brand from another company establishes the formulation."] },
      { title: "Keep the conversation professional", paragraphs: ["Use the contact form to prepare a message you can review before sending. Do not include patient records or other personal medical information in a product availability request. If you have a question about treatment or whether a product is appropriate for an individual, speak with a qualified healthcare professional.", "For an enquiry about an order already placed, include a reference number if available and describe the information you need. Clear, specific questions make it easier to identify the right next step."] },
    ],
    checklist: ["Exact brand name and strength", "Composition or pack detail you need confirmed", "Your organisation and city", "Quantity and delivery location, where relevant"],
    contactArea: "general-products",
  },
  {
    slug: "our-areas-of-focus",
    category: "INSIDE RIVIXA",
    title: "Three areas of focus. One thoughtful approach.",
    description: "An introduction to Rivixa’s focus in women’s health, eye care, and bone and joint health.",
    image: "/images/blog-care-focus.jpg",
    imageAlt: "An eye care professional examining a patient in a clinic",
    sections: [
      { title: "A focused introduction to our portfolio", paragraphs: ["Rivixa Lifesciences Private Limited is based in Mumbai, with an initial focus on Gynaecology, Ophthalmology and Orthopedic care. These areas provide a way to explore our portfolio and begin a relevant professional conversation with the team.", "The product pages bring brand names, available compositions and pack information together. General Products provides another route into the catalogue, including tablets, capsules and nutritional supplements."] },
      { title: "Explore by area of interest", paragraphs: ["The Gynaecology section introduces the women’s health portfolio. The Ophthalmology section brings together the eye-care range and listed nutritional products. The Orthopedic section includes the bone and joint health portfolio. A product may appear in more than one catalogue section.", "Category placement is a way to organise information. It is not a recommendation for an individual, a complete prescribing reference or a substitute for professional judgement."] },
      { title: "Build on clear information", paragraphs: ["Our approach begins with listening, asking useful questions and keeping product information specific. Some catalogue entries invite an enquiry for further details. Where you need a composition, pack configuration or current availability confirmed, contact the team with the exact product name.", "Healthcare professionals, distributors and prospective partners can use the same contact route to introduce themselves and explain what they need. The aim is a useful conversation grounded in the information relevant to that request."] },
    ],
    checklist: ["Explore the therapeutic area relevant to your enquiry", "Check the complete product name and listed information", "Ask the team to confirm any additional particulars"],
    contactArea: "company",
  },
  {
    slug: "starting-a-partnership-conversation",
    category: "WORKING TOGETHER",
    title: "Starting a useful distribution conversation.",
    description: "What to share when introducing your business, territory and interest in the Rivixa portfolio.",
    image: "/images/blog-partnership.jpg",
    imageAlt: "Professionals collaborating during a business meeting",
    sections: [
      { title: "Introduce your business and its context", paragraphs: ["A useful partnership introduction starts with who you are, where you operate and how you would like to work together. Share your business name, your role, city and proposed territory. Briefly describe the type of professional or commercial enquiry you are making.", "If your interest is in a particular part of the catalogue, name the area or brands. This helps distinguish a product availability question from a broader discussion about working together."] },
      { title: "Describe the opportunity you see", paragraphs: ["Explain the geographic area and customer segment relevant to your enquiry, together with the products you want to discuss. You can also outline your current operations and any practical questions about documentation, pack configurations or ordering.", "Keep the initial introduction concise. Commercial terms, territory arrangements and any required documentation should be discussed and confirmed directly with the company rather than assumed from information on the website."] },
      { title: "Agree the next step directly", paragraphs: ["Use the partnership option on the contact form to prepare an introduction. Review the draft, add any supporting information you consider appropriate, and send it from your email application. The team can then assess the enquiry in its specific context.", "An enquiry does not reserve a territory or create a distribution appointment. Confirm any arrangement and its terms directly with the company before making business commitments on its behalf."] },
    ],
    checklist: ["Business name, contact person and city", "Proposed territory and area of interest", "Relevant brands or product categories", "Your questions and preferred way to continue"],
    contactArea: "partnerships",
  },
] as const;

export const careerInterests = ["Field sales & professional relations", "Distribution & operations", "Business support", "Other area of interest"];
