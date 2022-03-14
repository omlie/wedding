import clsx from "clsx";
import { useLocale } from "~/hooks";
import { labels } from "~/i18n";

const TimeSlot = ({
  timeSlot,
  left,
  children,
}: {
  timeSlot: string;
  left?: boolean;
  children: React.ReactNode;
}) => (
  <div className="mt-14">
    <p
      className={clsx(
        "px-4 relative pb-4 border-b-2 border-text whitespace-nowrap text-center text-sm",
        {
          "right-after-dot": !left,
          "left-after-dot": left,
        }
      )}
    >
      {children}
    </p>
    <p className="pt-2 text-xs text-center">{timeSlot}</p>
  </div>
);

const Timeline = () => {
  const locale = useLocale();
  const timelineLabels = labels[locale].timeline;

  return (
    <div className="flex flex-col gap-12">
      <h3 className="w-6">{timelineLabels.ourWeddingDay}</h3>
      <div className="flex flex-row justify-center w-64">
        <div className="relative flex flex-col flex-1 w-32 py-16 border-r-2 border-text before-dot after-dot">
          <TimeSlot timeSlot="14:30" left>
            {timelineLabels.funInbetweener}
          </TimeSlot>
          <TimeSlot timeSlot="19:30" left>
            {timelineLabels.cakeTime}
          </TimeSlot>
        </div>
        <div className="flex flex-col flex-1 w-32 pb-14">
          <TimeSlot timeSlot="14:00">{timelineLabels.ceremony}</TimeSlot>
          <TimeSlot timeSlot="17:00">{timelineLabels.dinner}</TimeSlot>
          <TimeSlot timeSlot="20:30">{timelineLabels.dancing}</TimeSlot>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
