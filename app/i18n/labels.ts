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
  yes: string;
  no: string;
  rsvp: {
    formLabels: {
      name: string;
      entourage: string;
      email: string;
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
    thanksForRegistering: string;
    isAttending: string;
    isNotAttending: string;
    exploreInfo: string;
    oneRsvpPerHousehold: string;
    hasResponded: string;
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
    yes: "Yes",
    no: "No",
    rsvp: {
      formLabels: {
        name: "What is your name?",
        entourage: "Please enter the names of the people you intend to bring",
        email: "What email can we reach you at?",
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
        "The wedding venue is located in Skjold, about 30 minutes from Haugesund. We will organize transport for anyone who would wants to, from a central location in Haugesund. Please let us know if you'd like to, more info will be provided on the website later.",
      thanksForRegistering: "Thank you for responding to your invitiation",
      isAttending: "We can't wait to see you!",
      isNotAttending: "We're sad you couldn't come",
      exploreInfo: "Read more about our wedding here",
      oneRsvpPerHousehold:
        "We only require one RSVP per household. Please enter the name(s) of your family/+1 down below. Also remember to take them into account when filling out the other fields.",
      hasResponded:
        "You already responded to your invitation. It anything has changed since then, please contact Othea Vikse or Vana Prayitno.",
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
    yes: "Ja",
    no: "Nei",
    rsvp: {
      formLabels: {
        name: "Hva heter du?",
        entourage: "Vennligst skriv inn navnet til person(ene) i følget ditt",
        email: "Hvilken epost kan vi nå deg på?",
        attending: "Kommer du i bryllupet?",
        hotel: "Trenger du hotellovernatting?",
        shuttle: "Trenger du skyss til bryllupslokasjonen?",
        allergies: "Har du noen allergier/dietter vi må vite om?",
        songs: "Hvilke sanger vil du danse til?",
        submit: "Send inn ditt svar",
      },
      hotelReadMore: "Les mer om hotell",
      hotelInfo1:
        "Vi har reservert rom hos Banken Hotel fra fredag 24. til søndag 26., for de som trenger et sted å bo i Haugesund. Rom kan bookes via e-post til info@banken-hotel.no. Oppgi navnet ditt, e-post, telefonnummer og hvor mange som skal bo på rommet. Oppgi også at dette er en del av bookingen til Othea Vikse. Hotel må bookes innen 9. juni 2022.",
      hotelInfo2:
        "Prisene for enkelt/dobbeltrom er på 950kr per natt (1 person) og 150kr ekstra for 2 personer. Altså; 1100kr for et rom for to personer, per natt. Frokost er inkludert.",
      busReadMore: "Les mer om transport til bryllupet",
      busInfo:
        "Bryllupet avholdes i Skjold, rundt 30 minutter fra Haugesund. Vi organiserer transport fra et sentralt sted i Haugesund, for de som vil det. La oss gjerne vite allerede nå om du vil ha dette, så kommer det mer informasjon på nettsiden senere.",
      thanksForRegistering:
        "Takk for at du svarte på invitasjonen til bryllupet vårt",
      isAttending: "Vi gleder oss til å feire dagen sammen med deg",
      isNotAttending: "Så dumt du ikke kunne komme",
      exploreInfo: "Her kan du finne mer informasjon om bryllupet vårt:",
      oneRsvpPerHousehold:
        "Vi trenger bare at en husholdning registrerer seg én gang. Fyll derfor inn navnet til de du tar med deg i bryllupet under her. Husk også å ta de i betraktningen når du fyller ut de andre feltene.",
      hasResponded:
        "Du har allerede svart på invitasjonen din. Hvis noe har endret seg siden da, ta kontakt med Othea Vikse eller Vana Prayitno.",
    },
  },
};
