import { get, push, ref, set } from "firebase/database";
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
  const rsvpRef = await ref(firebaseDB(), "rsvp/");
  const newRef = push(rsvpRef);

  let data: Record<string, string> = {};

  formIds.forEach((id) => {
    data[id] = formData.get(id)?.toString() ?? "";
  });

  await set(newRef, data);
};
