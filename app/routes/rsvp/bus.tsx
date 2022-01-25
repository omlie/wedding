import { ScrollRestoration, useNavigate } from "remix";
import { Modal } from "~/components";
import { useLocale } from "~/hooks";
import { labels } from "~/i18n";

const Bus = () => {
  const locale = useLocale();
  const navigate = useNavigate();

  return (
    <Modal
      open={true}
      onClose={() => {
        navigate("../");
      }}
      className="border-4 bg-pink-accent text-blue-dark border-blue-dark"
    >
      <div className="flex flex-col gap-4 px-8 pb-8">
        <h3>{labels[locale].rsvp.formLabels.shuttle}</h3>
        <span>{labels[locale].rsvp.busInfo}</span>
      </div>
    </Modal>
  );
};

export default Bus;
