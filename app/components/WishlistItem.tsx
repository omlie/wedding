import { useLocale } from "~/hooks";
import { formatTemplateString } from "~/i18n";
import insertReactNodes from "~/i18n/formatTemplateString";
import { labels } from "~/i18n/labels";
import { TWishlistItem } from "~/types/shared";
import { Image } from ".";
import { NavLink } from "remix";

const WishlistItem = ({
  name,
  image,
  amount,
  linkText,
  url,
  id,
}: TWishlistItem) => {
  const locale = useLocale();

  const hasAmount = amount || amount === 0;

  return (
    <div className="relative flex flex-col h-full overflow-hidden no-underline rounded-5xl bg-blue-dark hover:no-underline text-blue-lightest hover:text-blue-lightest shadow-card">
      <div className="flex flex-col justify-between">
        <Image
          image={image}
          noFixedHeight
          className="max-h-[250px] h-[250px] overflow-hidden min-h-[250px]"
        />
        <span className="absolute top-0 right-0 p-2 font-extrabold rounded-bl-5xl bg-pink-accent text-blue-dark">
          {hasAmount
            ? formatTemplateString(labels[locale].amountLeft, {
                amount: `${amount}`,
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
          {amount && amount > 0 ? (
            <NavLink
              to={id}
              className="p-2 text-center no-underline bg-pink-accent hover:bg-orange-accent text-blue-dark rounded-5xl hover:no-underline hover:text-blue-dark"
            >
              {labels[locale].registerGift}
            </NavLink>
          ) : (
            <span className="p-2 text-center bg-pink-accent text-blue-dark rounded-5xl opacity-70">
              {labels[locale].registerGift}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
