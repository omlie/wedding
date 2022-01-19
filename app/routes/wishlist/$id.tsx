import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useLoaderData,
  useNavigate,
} from "remix";
import { useState } from "react";
import { Modal } from "~/components";
import { useLocale } from "~/hooks";
import { formatTemplateString, labels } from "~/i18n";
import Plus from "remixicon-react/AddCircleFillIcon";
import Minus from "remixicon-react/IndeterminateCircleFillIcon";
import { Outlet } from "remix";
import { getWishlistItem } from "~/api/getWishlistItem";
import {
  getWishlistCounter,
  updateWishlistCounter,
} from "~/api/firebase/wishlist";
import { TWishlistItem } from "~/types/shared";

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  if (id) {
    const item = await getWishlistItem(id);

    const alreadyRegisteredCount = await getWishlistCounter(id);

    if (item) {
      return {
        ...item,
        amount: item.amount ? item.amount - alreadyRegisteredCount : undefined,
      };
    }

    return { item };
  }

  return null;
};

export const action: ActionFunction = async ({ request, params }) => {
  const { id } = params;
  const amount = await (await request.formData()).get("amount");

  if (id) await updateWishlistCounter(id, Number(amount));

  return redirect("/wishlist");
};

const WishListItemModal = () => {
  const { name, amount }: TWishlistItem = useLoaderData();
  const locale = useLocale();
  const navigate = useNavigate();

  const [registerValue, setRegisterValue] = useState<number>(1);
  const [valueError, setValueError] = useState<boolean>(false);
  const [registerName, setRegisterName] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);

  const onValueChange = (value: number) => {
    setValueError(false);
    if (amount && value <= amount && value > 0) setRegisterValue(value);
  };

  const onNameChange = (e: any) => {
    setNameError(false);
    setRegisterName(e.target.value);
  };

  return (
    <>
      <Modal
        open={true}
        onClose={() => {
          navigate("../");
        }}
        className="border bg-pink-accent text-blue-dark border-blue-dark"
      >
        <form method="post">
          <div className="flex flex-col gap-2 p-6">
            <h4>
              {formatTemplateString(labels[locale].registerItem, {
                item: name,
              })}
            </h4>

            <label htmlFor="amount">{labels[locale].amount}</label>
            <div className="flex items-center justify-start gap-6">
              <button
                type="button"
                onClick={() => onValueChange(registerValue - 1)}
                className="hover:text-blue-light disabled:hover:text-blue-dark disabled:opacity-70"
                disabled={registerValue <= 1}
              >
                <Minus size={40} />
              </button>
              <span>{registerValue}</span>
              <input
                name="amount"
                className="hidden"
                type="number"
                value={registerValue}
                onChange={() => {}}
              />
              <button
                type="button"
                onClick={() => onValueChange(registerValue + 1)}
                className="hover:text-blue-light disabled:hover:text-blue-dark disabled:opacity-70"
                disabled={registerValue === 0}
              >
                <Plus size={40} />
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
              type="submit"
              className="w-full p-2 mt-4 bg-blue-dark text-pink-accent rounded-5xl disabled:hover:text-pink-accent disabled:hover:bg-blue-dark hover:bg-blue-lightest hover:text-blue-dark disabled:opacity-70"
              disabled={
                registerName === "" ||
                registerValue <= 0 ||
                registerValue > (amount ?? 0)
              }
            >
              {labels[locale].registerGift}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default WishListItemModal;
