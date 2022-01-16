type TLabels = {
  wishlist: string;
  canBeBoughtAt: string;
  amountLeft: string;
  registerGift: string;
};
type TLocaleLabels = { "en-AU": TLabels; nb: TLabels };

export const labels: TLocaleLabels = {
  "en-AU": {
    wishlist: "Wishlist",
    canBeBoughtAt: "Can be bought at {link}",
    amountLeft: "{amount} left",
    registerGift: "Register gift",
  },
  nb: {
    wishlist: "Ønskeliste",
    canBeBoughtAt: "Kan kjøpes hos {link}",
    amountLeft: "{amount} stk igjen",
    registerGift: "Registrer gave",
  },
};
