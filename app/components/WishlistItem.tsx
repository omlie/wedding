import { useEffect, useState } from "react";
import {
  getWishlistCounter,
  updateWishlistCounter,
} from "~/api/firebase/wishlist";
import { useLocale } from "~/hooks";
import { formatTemplateString } from "~/i18n";
import insertReactNodes from "~/i18n/formatTemplateString";
import { labels } from "~/i18n/labels";
import { TWishlistItem } from "~/types/shared";
import { Image, Modal } from ".";
import Plus from "remixicon-react/AddCircleFillIcon";
import Minus from "remixicon-react/IndeterminateCircleFillIcon";

const WishlistItem = ({
  name,
  image,
  amount,
  linkText,
  url,
  id,
}: TWishlistItem) => {
  const locale = useLocale();
  const [amountLeft, setAmountLeft] = useState<number>(amount ?? 0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [registerValue, setRegisterValue] = useState<number>(1);
  const [valueError, setValueError] = useState<boolean>(false);
  const [registerName, setRegisterName] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);

  useEffect(() => {
    const getCount = async () => {
      const count = await getWishlistCounter(id);
      setAmountLeft((amount ?? 0) - count);
    };

    getCount();
  });

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const registerPurchase = async () => {
    if (
      registerValue > 0 &&
      registerValue <= amountLeft &&
      registerName !== ""
    ) {
      const newValue = await updateWishlistCounter(id, registerValue);
      setAmountLeft((amount ?? 0) - (newValue ?? 0));
      handleModal();
    }

    if (registerName === "") setNameError(true);
    if (registerValue <= 0 && registerValue > amountLeft) setValueError(true);
  };

  const onValueChange = (value: number) => {
    setValueError(false);
    if (value <= amountLeft && value > 0) setRegisterValue(value);
  };

  const onNameChange = (e: any) => {
    setNameError(false);
    setRegisterName(e.target.value);
  };

  return (
    <div className="relative flex flex-col h-full overflow-hidden no-underline rounded-5xl bg-blue-dark hover:no-underline text-blue-lightest hover:text-blue-lightest shadow-card">
      <div className="flex flex-col justify-between">
        <Image
          image={image}
          noFixedHeight
          className="max-h-[250px] h-[250px] overflow-hidden min-h-[250px]"
        />
        <span className="absolute top-0 right-0 p-2 font-extrabold rounded-bl-5xl bg-pink-accent text-blue-dark">
          {amount
            ? formatTemplateString(labels[locale].amountLeft, {
                amount: `${amountLeft}`,
              })
            : labels[locale].unlimited}
        </span>
        <div className="flex flex-col justify-between w-full h-full gap-4 p-4">
          <h3 className="break-words">{name}</h3>
          {url && (
            <span>
              {insertReactNodes(labels[locale].canBeBoughtAt, {
                link: <a href={url}>{linkText ?? url}</a>,
              })}
            </span>
          )}
          <button
            onClick={handleModal}
            className="p-2 bg-pink-accent hover:bg-orange-accent text-blue-dark rounded-5xl"
          >
            {labels[locale].registerGift}
          </button>
          <Modal
            open={modalOpen}
            onClose={handleModal}
            className="border bg-pink-accent text-blue-dark border-blue-dark"
          >
            <div className="flex flex-col gap-2 p-6">
              <h4>
                {formatTemplateString(labels[locale].registerItem, {
                  item: name,
                })}
              </h4>

              <label htmlFor="amount">{labels[locale].amount}</label>
              <div className="flex items-center justify-start gap-6">
                <button
                  onClick={() => onValueChange(registerValue - 1)}
                  className="hover:text-blue-light disabled:hover:text-blue-dark disabled:opacity-70"
                  disabled={registerValue <= 1}
                >
                  <Minus size={40} />
                </button>
                <span>{registerValue}</span>
                <button
                  onClick={() => onValueChange(registerValue + 1)}
                  className="hover:text-blue-light disabled:hover:text-blue-dark disabled:opacity-70"
                  disabled={registerValue === amountLeft}
                >
                  <Minus size={40} />
                </button>
              </div>

              {valueError && <span>{valueError}</span>}

              <label htmlFor="name">{labels[locale].name}</label>
              <input
                onChange={onNameChange}
                className="p-2"
                id="name"
                type="text"
                value={registerName}
              />
              {nameError && <span>{nameError}</span>}

              <button
                onClick={registerPurchase}
                className="w-full p-2 mt-4 bg-blue-dark text-pink-accent rounded-5xl disabled:hover:text-pink-accent disabled:hover:bg-blue-dark hover:bg-blue-lightest hover:text-blue-dark disabled:opacity-70"
                disabled={
                  registerName === "" ||
                  registerValue <= 0 ||
                  registerValue > amountLeft
                }
              >
                {labels[locale].registerGift}
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
