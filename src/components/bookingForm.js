import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup.string().required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  fromDate: yup.date().required("Start date is required"),
  toDate: yup
    .date()
    .required("End date is required")
    .min(yup.ref("fromDate"), "End date must be after start date"),
  guests: yup.string().when("bookingType", {
    is: "event",
    then: yup.string().required("Select number of guests"),
  }),
  message: yup.string(),
});

const BookingForm = () => {
  const [bookingType, setBookingType] = useState("event");
  const [roomGuests, setRoomGuests] = useState(1);
  const today = new Date().toISOString().split("T")[0];

  const {
    handleSubmit,
    control,
    trigger,
    watch
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
      eventType: "",
      seatingType: "",
      guests: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    const finalData = {
      ...data,
      guests: bookingType === "room" ? roomGuests : data.guests,
      bookingType,
    };
    console.log("Form Submitted:", finalData);
  };

  return (
    <div className="booking-wrapper">
      <div className="booking-container">
        {/* Toggle Switch for Booking Type */}
        <div className="booking-toggle">
          <span
            className={bookingType === "room" ? "active" : ""}
            onClick={() => setBookingType("room")}
          >
            Room Booking
          </span>
          <span
            className={bookingType === "event" ? "active" : ""}
            onClick={() => setBookingType("event")}
          >
            Event Booking
          </span>
          <div className={`slider ${bookingType}`}></div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
          {/* Initials + Name Fields */}
          <div className="row-group initials-name-group">
            <Controller
              control={control}
              name="initials"
              render={({ field }) => (
                <select {...field}>
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
                />
              )}
            />
          </div>

          <div className="row-group dates-row">
            {/* Check-in Date */}
            <div className="date-group">
              <label htmlFor="fromDate">Check-in Date</label>
              <Controller
                name="fromDate"
                control={control}
                render={({ field }) => (
                  <input
                    type="date"
                    id="fromDate"
                    min={today}
                    max={
                      watch("toDate")
                        ? new Date(new Date(watch("toDate")).getTime() - 86400000)
                          .toISOString()
                          .split("T")[0]
                        : undefined
                    }
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      trigger("toDate"); // Re-validate check-out
                    }}
                    onBlur={() => trigger("fromDate")}
                  />
                )}
              />
            </div>

            {/* Check-out Date */}
            <div className="date-group">
              <label htmlFor="toDate">Check-out Date</label>
              <Controller
                name="toDate"
                control={control}
                render={({ field }) => (
                  <input
                    type="date"
                    id="toDate"
                    min={
                      watch("fromDate")
                        ? new Date(new Date(watch("fromDate")).getTime() + 86400000)
                          .toISOString()
                          .split("T")[0]
                        : today
                    }
                    {...field}
                    onBlur={() => trigger("toDate")}
                  />
                )}
              />
            </div>
          </div>


          {/* Phone and Email */}
          <div className="row-group">
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Your Phone No."
                  {...field}
                  onBlur={() => trigger("phone")}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  type="email"
                  placeholder="Your Email"
                  {...field}
                  onBlur={() => trigger("email")}
                />
              )}
            />
          </div>

          {/* Guest Selection */}
          <div className="guest-section">
            <label>Guests</label>
            {bookingType === "event" ? (
              <Controller
                control={control}
                name="guests"
                render={({ field }) => (
                  <select {...field} onBlur={() => trigger("guests")}>
                    <option value="">Select Number of Guests</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-100">51-100</option>
                    <option value="100+">100+</option>
                  </select>
                )}
              />
            ) : (
              <div className="guest-counter">
                <button
                  type="button"
                  onClick={() =>
                    setRoomGuests((prev) => Math.max(1, prev - 1))
                  }
                >
                  -
                </button>
                <span>{roomGuests}</span>
                <button
                  type="button"
                  onClick={() => setRoomGuests((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            )}
          </div>

          {/* Extra Event Fields */}
          {bookingType === "event" && (
            <>
              <label>Event Type</label>
              <Controller
                control={control}
                name="eventType"
                render={({ field }) => (
                  <select {...field}>
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="conference">Conference</option>
                    <option value="birthday">Birthday</option>
                    <option value="other">Other</option>
                  </select>
                )}
              />

              <label>Seating Type</label>
              <Controller
                control={control}
                name="seatingType"
                render={({ field }) => (
                  <select {...field}>
                    <option value="">Select Seating Type</option>
                    <option value="banquet">Banquet</option>
                    <option value="theater">Theater</option>
                    <option value="classroom">Classroom</option>
                    <option value="boardroom">Boardroom</option>
                  </select>
                )}
              />

              <label>Message</label>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <textarea placeholder="Additional details..." {...field} />
                )}
              />
            </>
          )}

          {/* Submit Button */}
          <button type="submit">BOOK NOW</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
