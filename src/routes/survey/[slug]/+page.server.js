/** @type {import('./$types').Actions} */
// import { v4 as uuidv4 } from "uuid";
import { db } from "$lib/database";
import { fail, redirect } from "@sveltejs/kit";

const addResponse = async (userResponse) => {
  console.log(userResponse);
  console.log(db);
  const dbRespones = await db.query(`select * from responses`);
  console.log(dbRespones);
};

export const actions = {
  default: async ({ request }) => {
    const responses = await request.formData();
    console.log(responses);
    db.connect();

    try {
      addResponse(responses);
      console.log("success");
      throw redirect(303, "/survey/thank-you");
    } catch (error) {
      console.log(error);
    }
  },
};
