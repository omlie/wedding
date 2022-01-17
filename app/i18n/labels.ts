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
  },
};
