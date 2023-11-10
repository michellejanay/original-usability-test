/** @type {import('./$types').Actions} */
import { v4 as uuidv4 } from "uuid";
import { db } from "$lib/database";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  default: async (event) => {
    // const { responses } = await event.request.json();
    // console.log(responses);
    // responses.id = uuidv4();

    // redo

    console.log("success");
    throw redirect(303, "/survey/thank-you");
  },
};
