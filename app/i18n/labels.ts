type TLabels = {
  wishlist: string;
  canBeBoughtAt: string;
  amountLeft: string;
  registerGift: string;
  unlimited: string;
  amount: string;
  name: string;
  registerItem: string;
  valueError: string;
  nameError: string;
  rsvp: {
    formLabels: {
      name: string;
      attending: string;
      hotel: string;
      shuttle: string;
      allergies: string;
      songs: string;
      submit: string;
    };
    hotelReadMore: string;
    hotelInfo1: string;
    hotelInfo2: string;
    busReadMore: string;
    busInfo: string;
  };
};
type TLocaleLabels = { "en-AU": TLabels; nb: TLabels };

export const labels: TLocaleLabels = {
  "en-AU": {
    wishlist: "Wishlist",
    canBeBoughtAt: "Can be bought at {link}",
    amountLeft: "{amount} left",
    registerGift: "Register gift",
    unlimited: "Unlimited left",
    amount: "Amount",
    name: "Name",
    registerItem: "Register purchase of {item}",
    valueError: "Invalid value",
    nameError: "Please enter your name",
    rsvp: {
      formLabels: {
        name: "What is your name?",
        attending: "Are you attending?",
        hotel: "Are you in need of a hotel stay?",
        shuttle: "Do you need shuttle to the wedding location?",
        allergies: "Any allergies/diets we need to know about?",
        songs: "Any songs you wanna dance to?",
        submit: "Submit your response",
      },
      hotelReadMore: "Read more about hotel stay",
      hotelInfo1: `We have reserved rooms at Banken Hotel from Friday 24th to Sunday 26th for people who would like to stay in Haugesund. Rooms can be booked via email to info@banken-hotel.no and write your name, email, phone number and how many people are staying in the room, in addition to that it’s from the booking of Othea Vikse. The latest date for booking this is 9th of June 2022.`,
      hotelInfo2: `The rates for standard rooms single/double room 950,- per night (1 person) and 150,- in addition for extra person. Aka; 1100,- for two person room per night. This includes breakfast.`,
      busReadMore: "Read more about shuttle bus",
      busInfo:
        "The wedding venue is located in Skjold, about 30 minutes from Haugesund. We will organize transport for anyone who would wants to, from a central location in Haugesund. Please let us know if you’d like to, more info will be provided on the website later.",
    },
  },
  nb: {
    wishlist: "Ønskeliste",
    canBeBoughtAt: "Kan kjøpes hos {link}",
    amountLeft: "{amount} stk igjen",
    registerGift: "Registrer gave",
    unlimited: "Ubegrenset antall",
    amount: "Antall",
    name: "Navn",
    registerItem: "Registrer kjøp av {item}",
    valueError: "Ikke godkjent antall",
    nameError: "Vennligst skriv inn navnet ditt",
    rsvp: {
      formLabels: {
        name: "Hva heter du?",
        attending: "Kommer du i bryllupet?",
        hotel: "Trenger du hotellovernatting?",
        shuttle: "Trenger du skyss til bryllupslokasjonen?",
        allergies: "Har du noen allergier/dietter vi må vite om?",
        songs: "Hvilke sanger vil du danse til?",
        submit: "Send inn ditt svar",
      },
      hotelReadMore: "Les mer om hotell",
      hotelInfo1: "",
      hotelInfo2: "",
      busReadMore: "Les mer om transport til bryllupet",
      busInfo: "",
    },
  },
};
