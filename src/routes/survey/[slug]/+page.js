import { error } from "@sveltejs/kit";

/** @type {import('./$types').Pageload} */

export function load({ params }) {
  if (params.slug === "testing") {
    return {
      question: "question",
      options: ["options", "options", "options"],
      links: [
        "/survey/question-1",
        "/survey/instruction",
        "/survey/desktop-1",
        "/survey/desktop-2",
        "/survey/mobile-1",
        "/survey/mobile-2",
        "/survey/question-4",
        "/survey/thank-you",
      ],
    };
  }
  if (params.slug === "question-1") {
    return {
      id: "first-question",
      name: "response1",
      question:
        "Where would you prefer to shop for bath/body care products for yourself/others?",
      options: ["Laptop/Desktop", "Mobile App", "In Store"],
      links: ["/survey/instruction"],
    };
  }
  if (params.slug === "instruction") {
    return {
      id: "instruction",
      question: "",
      instructions: `<p>Imagine landing on the website or app of one of your favourite cosmetic or drug stores where you intend to purchase repeat self-care items (lotion, toothpaste, deodorant, etc.).
      You'd like</p>

      <p>This store offers a selection of fragrances among its self-care items, and you already have your favourite fragrance picked out. You want to see your favourite items with that fragrance and find out about anything new that may be available in that fragrance.</p>

     <p> You have just clicked on the search bar at the top of their app or website. You would see one of either of the following screens. Answer the following questions...</p>`,
      links: ["/survey/desktop-1", "/survey/mobile-1"],
    };
  }
  if (params.slug === "desktop-1") {
    return {
      id: "desktop-1",
      name: "response2",
      image: "",
      question:
        "How easy/clear is it to search for a product or fragrance on the example screen? Describe why or why not.",
      text: `Your answer here...`,
      links: ["/survey/desktop-2"],
    };
  }
  if (params.slug === "desktop-2") {
    return {
      id: "desktop-2",
      name: "response2",
      image: "",
      question:
        "How easy/clear is it to search for a product or fragrance on the example screen? Describe why or why not.",
      text: `Your answer here...`,
      links: ["/survey/question-4"],
    };
  }
  if (params.slug === "mobile-1") {
    return {
      id: "mobile-1",
      name: "response2",
      image: "",
      question:
        "How easy/clear is it to search for a product or fragrance on the example screen? Describe why or why not.",
      text: `Your answer here...`,
      links: ["/survey/mobile-2"],
    };
  }
  if (params.slug === "mobile-2") {
    return {
      id: "mobile-2",
      name: "response2",
      image: "",
      question:
        "How easy/clear is it to search for a product or fragrance on the example screen? Describe why or why not.",
      text: `Your answer here...`,
      links: ["/survey/question-4"],
    };
  }
  if (params.slug === "question-4") {
    return {
      id: "preference-question",
      name: "preference-question",
      image: ["", ""],
      question: "Which design did you prefer?",
      options: ["option-1", "option-2"],
      text: `Your answer here...`,
    };
  }
  if (params.slug === "thank-you") {
    return {
      id: "thank-you",
      name: "userPreference",
      image: ["", ""],
      question: "Thank you for your participation 🤩",
      instructions: `<p>Your results have been recorded</p>`,
      //   links: ["/results"],
    };
  }
  if (params.slug === "results") {
    return {
      id: "results",
      name: "results",
      image: ["", ""],
      // links: ["/results"],
    };
  }

  throw error(404, "Not found");
}
