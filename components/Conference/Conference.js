import { format } from 'date-fns';
import moment from 'moment';
import 'moment-timezone';
import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';

const Conference = () => {
  // current time
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes();
  const amOrPm = time.getHours() >= 12 ? 'PM' : 'AM';
  const modifiers = {
    today: time,
  };

  // time input field
  const [isHidden, setIsHidden] = useState(true);
  function handleSubmit(event) {
    event.preventDefault();
    setIsHidden(false);
  }

  // select date
  const [selectedTime, setSelectedTime] = useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selectedTime) {
    footer = <p className="text-[#F25A2C]">You picked {format(selectedTime, 'PP')}</p>;
  }

  // time slot
  const [duration, setDuration] = useState(60); // default meeting duration is 60 minutes

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const [slotOptions, setSlotOptions] = useState([]);

  useEffect(() => {
    fetch('slotsOptions.json')
      .then((res) => res.json())
      .then((data) => setSlotOptions(data));
  }, []);

  // sloting time according to provided min in input field

  const getSlots = (start, end, selectedDate) => {
    const slots = [];
    const slotDuration = moment.duration(duration, 'minutes');
    const currentDate = moment(start).tz(moment.tz.guess());
    const endTime = moment(end).tz(moment.tz.guess());
    if (slotDuration.asMinutes() <= 0) {
      return slots;
    }

    while (currentDate.add(slotDuration).isBefore(endTime)) {
      const slot = {
        start: moment(currentDate).format('LT'),
        end: moment(currentDate).add(slotDuration).format('LT'),
      };
      if (moment(start).tz(moment.tz.guess()).isSame(selectedDate, 'day')) {
        slots.push(slot);
      }
    }
    return slots;
  };

  // sloting time according to provided min in input field
  const renderSchedule = () => {
    return slotOptions?.schedule?.map((item) => {
      const slots = getSlots(item.start, item.end, selectedTime);
      return (
        <div key={item.id} className={isHidden ? 'hidden' : ''}>
          <div className="my-4">
            <div className="grid grid-cols-3 gap-0">
              {slots.map((slot, index) => (
                <div key={index}>
                  <label className="btn btn-error m-2 bg-none">{slot.start}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="border rounded shadow-xl">
      {/*<-------------- Current Time -----------> */}
      <div className="text-center text-3xl text-[#000] font-bold mt-5">
        <h2>
          Time Now: {hours}:{minutes} {amOrPm}
        </h2>
      </div>
      {/* <------- Meeting Duration Input field -------------> */}
      <div className="mt-5 items-center justify-center text-[#000] flex">
        <h2 className="text-lg md:text-2xl mr-2 md:mr-3">Enter Meeting Duration(Min)</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="time-input"
            // value={bookingTime}
            onChange={handleDurationChange}
            className="input input-bordered input-success w-20 bg-[#fff]"
          />
        </form>
      </div>
      {/* <--------- Calender & slots ---------------> */}
      <div className={isHidden ? 'hidden' : ''}>
        <div className="p-5 grid md:grid-cols-2">
          <div className="shadow-2xl">
            {/* <------ Calender -------> */}
            <div className="text-[#000] font-semibold md:justify-end md:flex md:mr-[50%]">
              <p>Select Date</p>
            </div>
            <div className="sm:w-full text-[#000] font-semibold md:justify-end md:flex md:mr-72 ">
              <DayPicker
                className="md:justify-end md:flex md:mr-72"
                modifiers={modifiers}
                mode="single"
                selected={selectedTime}
                onSelect={setSelectedTime}
                footer={footer}
              />
            </div>
          </div>
          {/* <----------- Slots ----------> */}
          <div className="">
            <div className="text-[#000] font-semibold">
              <p>Select Time Slot</p>
              {renderSchedule()}
            </div>
            <div className="mr-6 sm:w-full text-[#000]  font-semibold"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
