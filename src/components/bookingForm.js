import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FlashMessage from "./flashMesage";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup.string().required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  eventDate: yup.date().when("bookingType", {
    is: "event",
    then: (schema) => schema.required("Event date is required"),
  }),
  fromDate: yup.date().when("bookingType", {
    is: "room",
    then: (schema) => schema.required("Check-in date is required"),
  }),
  toDate: yup.date().when("bookingType", {
    is: "room",
    then: (schema) => schema
      .required("Check-out date is required")
      .min(yup.ref("fromDate"), "Check-out must be after check-in"),
  }),
  guests: yup.string().when("bookingType", {
    is: "event",
    then: yup.string().required("Select number of guests"),
  }),
  message: yup.string(),
});

const BookingForm = () => {
  const [bookingType, setBookingType] = useState("event");
  const [roomGuests, setRoomGuests] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [flash, setFlash] = useState({ message: "", type: "" });
  const today = new Date().toISOString().split("T")[0];

  const {
    handleSubmit,
    control,
    trigger,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      initials: "Mr",
      phone: "",
      email: "",
      fromDate: "",
      toDate: "",
      eventDate: "",
      eventType: "",
      guests: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    try {
      const finalData = {
        ...data,
        guests: bookingType === "room" ? roomGuests : data.guests,
        rooms: bookingType === "room" ? roomCount : undefined,
        bookingType,
      };
      console.log("Form Submitted:", finalData);
      setFlash({ message: "Request Submitted, We'll get back to you!", type: "success" });
    } catch (error) {
      setFlash({ message: "Something went wrong. Please try again.", type: "error" });
    }

  };

  return (
    <>
      <div className="flex justify-center px-4">
        <div className="w-full max-w-2xl bg-[#1f3b2e] text-white p-6 sm:p-8 rounded-xl">
          {/* Toggle Switch */}
          <div className="flex justify-between text-sm font-medium mb-6 bg-[#2e4f3d] rounded-full relative overflow-hidden cursor-pointer">
            <span
              className={`flex-1 text-center py-2 z-10 ${bookingType === "room" ? "text-[#1f3b2e] font-bold" : "text-white"
                }`}
              onClick={() => setBookingType("room")}
            >
              Room Booking
            </span>
            <span
              className={`flex-1 text-center py-2 z-10 ${bookingType === "event" ? "text-[#1f3b2e] font-bold" : "text-white"
                }`}
              onClick={() => setBookingType("event")}
            >
              Event Booking
            </span>
            <div
              className={`absolute top-0 bottom-0 left-0 w-1/2 bg-white rounded-full transition-transform duration-300 ${bookingType === "event" ? "translate-x-full" : ""
                }`}
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 text-sm">
            {/* Initials + Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Controller
                name="initials"
                control={control}
                render={({ field }) => (
                  <select {...field} className="p-2 rounded w-full bg-white text-black">
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                  </select>
                )}
              />
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="First Name"
                    {...field}
                    onBlur={() => trigger("firstName")}
                    className="p-2 rounded w-full text-black"
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...field}
                    onBlur={() => trigger("lastName")}
                    className="p-2 rounded w-full text-black"
                  />
                )}
              />
            </div>

            {/* Conditional Dates */}
            {bookingType === "event" ? (
              <div>
                <label className="text-white mb-1 block">Event Date</label>
                <Controller
                  name="eventDate"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="date"
                      {...field}
                      min={today}
                      className="p-2 rounded w-full text-black"
                    />
                  )}
                />
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col flex-1">
                  <label className="mb-1">Check-in Date</label>
                  <Controller
                    name="fromDate"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="date"
                        {...field}
                        min={today}
                        max={
                          watch("toDate")
                            ? new Date(new Date(watch("toDate")).getTime() - 86400000)
                              .toISOString().split("T")[0]
                            : undefined
                        }
                        onChange={(e) => {
                          field.onChange(e);
                          trigger("toDate");
                        }}
                        className="p-2 rounded text-black"
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label className="mb-1">Check-out Date</label>
                  <Controller
                    name="toDate"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="date"
                        {...field}
                        min={
                          watch("fromDate")
                            ? new Date(new Date(watch("fromDate")).getTime() + 86400000)
                              .toISOString().split("T")[0]
                            : today
                        }
                        className="p-2 rounded text-black"
                      />
                    )}
                  />
                </div>
              </div>
            )}

            {/* Contact */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Phone"
                    {...field}
                    className="p-2 rounded w-full text-black"
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    type="email"
                    placeholder="Email"
                    {...field}
                    className="p-2 rounded w-full text-black"
                  />
                )}
              />
            </div>

            {/* Guests or Counters */}
            {bookingType === "event" ? (
              <div>
                <label className="mb-1 block">Guests</label>
                <Controller
                  name="guests"
                  control={control}
                  render={({ field }) => (
                    <select {...field} className="p-2 rounded w-full text-black">
                      <option value="">Select Number of Guests</option>
                      <option value="0-50">0–50</option>
                      <option value="50-100">50–100</option>
                      <option value="100-150">100–150</option>
                      <option value="150-250">150–250</option>
                      <option value="250+">250+</option>
                    </select>
                  )}
                />
              </div>
            ) : (
              <div className="flex items-center gap-6">
                {/* Guest Counter */}
                <div className="flex items-center gap-4">
                  <label>Guests:</label>
                  <button
                    type="button"
                    onClick={() => setRoomGuests((prev) => Math.max(1, prev - 1))}
                    className="bg-white text-black font-bold px-3 py-1 rounded"
                  >
                    -
                  </button>
                  <span>{roomGuests}</span>
                  <button
                    type="button"
                    onClick={() => setRoomGuests((prev) => prev + 1)}
                    className="bg-white text-black font-bold px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>

                {/* Room Counter */}
                <div className="flex items-center gap-4">
                  <label>Rooms:</label>
                  <button
                    type="button"
                    onClick={() => setRoomCount((prev) => Math.max(1, prev - 1))}
                    className="bg-white text-black font-bold px-3 py-1 rounded"
                  >
                    -
                  </button>
                  <span>{roomCount}</span>
                  <button
                    type="button"
                    onClick={() => setRoomCount((prev) => prev + 1)}
                    className="bg-white text-black font-bold px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Event Type & Message */}
            {bookingType === "event" && (
              <>
                <label>Event Type</label>
                <Controller
                  name="eventType"
                  control={control}
                  render={({ field }) => (
                    <select {...field} className="p-2 rounded w-full text-black">
                      <option value="">Select Event Type</option>
                      <option value="wedding">Wedding</option>
                      <option value="engagement">Engagement</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="other">Other</option>
                    </select>
                  )}
                />

                <label>Message</label>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      placeholder="Additional details..."
                      className="p-2 rounded w-full text-black min-h-[80px] resize-y"
                    />
                  )}
                />
              </>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="bg-[#e4c276] text-black font-bold py-2 px-4 rounded mt-4"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <FlashMessage
        message={flash.message}
        type={flash.type}
        onClose={() => setFlash({ message: "", type: "" })}
      />

    </>
  );
};

export default BookingForm;
