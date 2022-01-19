import { ActionFunction, redirect, useActionData, Outlet } from "remix";
import { useState } from "react";
import { Input, Layout, Modal, RadioButtons } from "~/components";
import { useLocale } from "~/hooks";
import { labels } from "~/i18n";
import { addRsvp } from "~/api/firebase/rsvp";
import Hotel from "remixicon-react/HotelBedFillIcon";
import Bus from "remixicon-react/BusLineIcon";
import InformationLine from "remixicon-react/InformationLineIcon";
import { NavLink } from "react-router-dom";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  await addRsvp(formData);

  return redirect("/");
};

const RSVP = () => {
  const locale = useLocale();
  const rsvpLabels = labels[locale].rsvp;
  const formLabels = rsvpLabels.formLabels;

  return (
    <main>
      <Layout>
        <h1>RSVP</h1>
        <form method="post" className="flex w-full gap-14">
          <div className="flex flex-col flex-1 gap-4 p-6 bg-blue-dark text-pink-accent rounded-5xl">
            <Input label={formLabels.name} id="name" required />

            <RadioButtons label={formLabels.attending} id="attending" />

            <RadioButtons label={formLabels.hotel} id="hotel" />
            <NavLink
              className="flex items-center gap-2 lg:hidden hover:text-blue-light"
              to="hotel"
            >
              <InformationLine size={28} />
              {rsvpLabels.hotelReadMore}
            </NavLink>

            <RadioButtons label={formLabels.shuttle} id="shuttle" />

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

            <button
              type="submit"
              className="w-full p-2 mt-4 bg-pink-accent text-blue-dark rounded-5xl hover:bg-blue-lightest hover:text-blue-dark disabled:opacity-70"
            >
              {formLabels.submit}
            </button>
          </div>
          <div className="flex-col justify-between hidden w-96 gap-14 lg:flex">
            <div className="relative flex flex-col gap-2 p-4 border-4 rounded-5xl border-blue-dark bg-pink-accent text-blue-dark">
              <Hotel
                className="absolute p-2 rounded-full -top-4 -right-4 bg-blue-dark text-pink-accent"
                size={40}
              />
              <span>{rsvpLabels.hotelInfo1}</span>
              <span>{rsvpLabels.hotelInfo2}</span>
            </div>
            <div className="relative flex flex-col gap-2 p-4 border-4 rounded-5xl border-blue-dark bg-pink-accent text-blue-dark">
              <Bus
                className="absolute p-2 rounded-full -top-4 -right-4 bg-blue-dark text-pink-accent"
                size={40}
              />
              <span>{rsvpLabels.busInfo}</span>
            </div>
          </div>
        </form>
        <Outlet />
      </Layout>
    </main>
  );
};

export default RSVP;
