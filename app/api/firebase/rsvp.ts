import { ref, set } from "firebase/database";
import { firebaseDB } from "./firebase";

const formIds: string[] = [
  "name",
  "email",
  "entourage",
  "attending",
  "hotel",
  "shuttle",
  "allergies",
  "songs",
];

export const addRsvp = async (formData: FormData) => {
  let data: Record<string, string> = {};

  formIds.forEach((id) => {
    data[id] = formData.get(id)?.toString() ?? "";
  });

  await set(ref(firebaseDB(), "rsvp/" + data.name), data);
};
