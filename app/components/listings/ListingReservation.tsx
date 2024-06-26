import React, { useState, useEffect } from 'react';
import { Range, RangeKeyDict } from 'react-date-range';
import Button from "../Button";
import Calendar from "../inputs/Calendar";
import LodgingDetailsCounter from '../inputs/LodgingDetailsCounter';
import { BsCaretDownFill } from "react-icons/bs";
import Avatar from '../Avatar';

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
  currentUser?: {
    image: string;
    name: string;
  };
  guestCount: number; // Add guestCount prop
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
  currentUser,
  guestCount,
}) => {
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [detailsCounterVisible, setDetailsCounterVisible] = useState(false);
  const [activitiesVisible, setActivitiesVisible] = useState(false);
  const [localDateRange, setLocalDateRange] = useState<Range>(dateRange);

  const handleDateClick = () => {
    setCalendarVisible(true);
  };

  const handleToggleDetailsCounter = () => {
    setDetailsCounterVisible(!detailsCounterVisible);
  };

  const handleToggleActivities = () => {
    setActivitiesVisible(!activitiesVisible);
  };

  const handleDateChange = (ranges: RangeKeyDict) => {
    const { selection } = ranges;
    setLocalDateRange(selection);

    if (selection.startDate && selection.endDate && selection.startDate !== selection.endDate) {
      setCalendarVisible(false);
      onChangeDate(selection);
    }
  };

  const handleSubmit = () => {
    onChangeDate(localDateRange);
    onSubmit();
  };

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElement = document.querySelector('.parallax') as HTMLElement;
      if (parallaxElement) {
        let scrollPosition = window.pageYOffset;

        // Make the parallax effect a bit faster
        let parallaxSpeed = 0.95;

        // Limit the parallax effect to stop after 200px
        if (scrollPosition > 100) {
          scrollPosition = 100;
        }

        parallaxElement.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getInitials = (name: string) => {
    const nameArray = name.split(' ');
    const initials = nameArray.map(n => n[0]).join('');
    return initials;
  };

  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden md:relative md:shadow-lg md:m-4 fixed bottom-0 left-0 right-0 z-10 p-4 parallax md:transform-none">
      <div className="flex flex-row items-center justify-between p-4 md:flex md:flex-col md:items-start">
        <div className="text-left">
          {currentUser && (
            <div className="flex flex-col items-center">
              <Avatar src={currentUser.image} />
              <div className="mt-1 text-sm font-medium">
                {getInitials(currentUser.name)}
              </div>
            </div>
          )}
          <div className="flex items-center space-x-2">
            {Array.from({ length: guestCount - 1 }).map((_, index) => (
              <Avatar key={index} src="/images/placeholder.jpg" />
            ))}
          </div>
          <div className="text-2xl font-semibold">${price} <span className="text-base font-normal">per person</span></div>
          <div className="mt-1 text-base font-normal underline md:hidden">
            {localDateRange.startDate?.toLocaleDateString()} - {localDateRange.endDate?.toLocaleDateString()}
          </div>
        </div>
        <div className="w-1/4 mt-2 md:hidden">
          <Button disabled={disabled} label="Reserve" onClick={handleSubmit} className="w-full text-sm" />
        </div>
      </div>
      <div className="hidden md:block">
        <div onClick={handleDateClick} className="cursor-pointer">
          <div className="border-[1px] border-neutral-300 rounded-lg p-3 m-4 flex justify-between">
            <span>{localDateRange.startDate?.toLocaleDateString()}</span>
            <span className="border-l-[1px] border-neutral-300 px-2">{localDateRange.endDate?.toLocaleDateString()}</span>
          </div>
        </div>
        {calendarVisible && (
          <Calendar
            value={localDateRange}
            disabledDates={disabledDates}
            onChange={handleDateChange}
          />
        )}
        <div onClick={handleToggleDetailsCounter} className="cursor-pointer">
          <div className="border-[1px] border-neutral-300 rounded-lg p-3 m-4 flex justify-between items-center">
            Number of Guests
            <BsCaretDownFill />  
          </div>
        </div>
        {detailsCounterVisible && (
          <LodgingDetailsCounter />
        )}
        <div onClick={handleToggleActivities} className="cursor-pointer">
          <div className="border-[1px] border-neutral-300 rounded-lg p-3 m-4 flex justify-between items-center">
            Activities
            <BsCaretDownFill />
          </div>
        </div>
        {activitiesVisible && (
          <div className="m-4">
            {/* Add your activities dropdown content here */}
            <ul>
              <li>Hiking</li>
              <li>Rafting</li>
              <li>Sightseeing</li>
              <li>Fishing</li>
            </ul>
          </div>
        )}
        <div className="mt-4 mb-4">
          <Button disabled={disabled} label="Reserve" onClick={handleSubmit} className="w-full text-sm md:w-1/4" />
        </div>
        <hr />
        <div className="p-4">
          <div className="flex flex-row justify-between pb-5">
            <div className="underline">Travel agent fee</div>
            <div>$175</div>
          </div>
          <div className="flex flex-row justify-between pb-5">
            <div className="underline">ACTOTA service fee</div>
            <div>$296</div>
          </div>
          <div className="flex flex-row justify-between text-lg font-semibold">
            <div className="underline">Total before taxes</div>
            <div>${totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingReservation;
