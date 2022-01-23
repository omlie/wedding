import {
  ActionFunction,
  redirect,
  Outlet,
  ScrollRestoration,
  LoaderFunction,
  useLoaderData,
  NavLink,
} from "remix";
import {
  AutoCompleteInput,
  FadeInContainer,
  Input,
  Layout,
  RadioButtons,
} from "~/components";
import { useLocale } from "~/hooks";
import { labels } from "~/i18n";
import { addRsvp, respondedGuests } from "~/api/firebase/rsvp";
import Hotel from "remixicon-react/HotelBedFillIcon";
import Bus from "remixicon-react/BusLineIcon";
import InformationLine from "remixicon-react/InformationLineIcon";
import { getGuests } from "~/api/contentful";
import { TGuest } from "~/types/shared";
import { useEffect, useState } from "react";

export const loader: LoaderFunction = async () => {
  const guests = await getGuests();

  const responded = await respondedGuests();

  const guestsWithResponseStatus = guests?.map((guest) => ({
    ...guest,
    responded: responded.includes(guest.name),
  }));

  return { guests: guestsWithResponseStatus };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  await addRsvp(formData);

  const attending = formData.get("attending");

  return redirect(`/rsvp/registered?attending=${attending === "Yes"}`);
};

const RSVP = () => {
  const { guests }: { guests: TGuest[] } = useLoaderData();

  const locale = useLocale();
  const rsvpLabels = labels[locale].rsvp;
  const formLabels = rsvpLabels.formLabels;

  const [guest, setGuest] = useState<TGuest | undefined>(undefined);
  const [attending, setAttending] = useState<boolean>(false);

  const onGuestChange = (guest?: TGuest) => setGuest(guest);

  const onAttendingChange = (value: string) => {
    setAttending(value === "Yes" ? true : false);
  };

  return (
    <main>
      <Layout className="min-h-full">
        <h1>RSVP</h1>
        <form
          method="post"
          className="flex w-full h-full min-h-full gap-14"
          autoComplete="off"
        >
          <div className="flex flex-col flex-1 h-full min-h-full rounded-5xl">
            <AutoCompleteInput
              label={formLabels.name}
              id="name"
              guests={guests}
              required
              onChange={onGuestChange}
            />

            <FadeInContainer
              hidden={!guest || (guest && guest.responded === false)}
            >
              <div className="relative flex flex-col gap-2 p-4 border-2 rounded-5xl border-blue-dark bg-pink-accent text-blue-dark shadow-card">
                <InformationLine
                  className="absolute p-2 rounded-full -top-4 -right-4 bg-blue-dark text-pink-accent"
                  size={40}
                />
                <span>{labels[locale].rsvp.hasResponded}</span>
              </div>
            </FadeInContainer>

            <FadeInContainer
              hidden={!guest || (guest && guest.responded === true)}
            >
              <RadioButtons
                label={formLabels.attending}
                id="attending"
                onChange={onAttendingChange}
                required
              />

              <FadeInContainer hidden={!attending || !guest?.plusOne}>
                <div className="relative flex flex-col gap-2 p-4 border-2 rounded-5xl border-blue-dark bg-pink-accent text-blue-dark shadow-card">
                  <InformationLine
                    className="absolute p-2 rounded-full -top-4 -right-4 bg-blue-dark text-pink-accent"
                    size={40}
                  />
                  <span>{labels[locale].rsvp.oneRsvpPerHousehold}</span>
                </div>

                <Input
                  label={formLabels.entourage}
                  id="entourage"
                  type="textarea"
                />
              </FadeInContainer>

              <FadeInContainer hidden={!attending}>
                <Input
                  label={formLabels.email}
                  id="email"
                  type="email"
                  required={attending}
                />

                <RadioButtons
                  label={formLabels.hotel}
                  id="hotel"
                  required={attending}
                />
                <NavLink
                  className="flex items-center gap-2 lg:hidden hover:text-blue-light"
                  to="hotel"
                >
                  <InformationLine size={28} />
                  {rsvpLabels.hotelReadMore}
                </NavLink>

                <RadioButtons
                  label={formLabels.shuttle}
                  id="shuttle"
                  required={attending}
                />
                <NavLink
                  className="flex items-center gap-2 lg:hidden hover:text-blue-light"
                  to="bus"
                >
                  <InformationLine size={28} />
                  {rsvpLabels.busReadMore}
                </NavLink>

                <Input
                  type="textarea"
                  label={formLabels.allergies}
                  id="allergies"
                />

                <Input type="textarea" label={formLabels.songs} id="songs" />
              </FadeInContainer>

              <button
                type="submit"
                className="w-full p-2 mt-4 border-2 bg-pink-accent text-blue-dark rounded-5xl hover:bg-orange-accent disabled:opacity-70 border-blue-dark"
              >
                {formLabels.submit}
              </button>
            </FadeInContainer>
          </div>

          <FadeInContainer
            className="relative flex-col hidden py-6 w-96 gap-14 lg:flex"
            hidden={!attending}
          >
            <div className="relative flex flex-col gap-2 p-4 border-4 rounded-5xl border-blue-dark bg-pink-accent text-blue-dark shadow-card">
              <Hotel
                className="absolute p-2 rounded-full -top-4 -right-4 bg-blue-dark text-pink-accent"
                size={40}
              />
              <span>{rsvpLabels.hotelInfo1}</span>
              <span>{rsvpLabels.hotelInfo2}</span>
            </div>
            <div className="relative flex flex-col gap-2 p-4 border-4 rounded-5xl border-blue-dark bg-pink-accent text-blue-dark shadow-card">
              <Bus
                className="absolute p-2 rounded-full -top-4 -right-4 bg-blue-dark text-pink-accent"
                size={40}
              />
              <span>{rsvpLabels.busInfo}</span>
            </div>
          </FadeInContainer>
        </form>
        <ScrollRestoration />
        <Outlet />
      </Layout>
    </main>
  );
};

export default RSVP;
