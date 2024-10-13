import EasyBooking from "./EasyBooking";

export default function ChooseUS() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-5">
      <div className="flex items-center justify-center gap-5">
        <img src="/aeroplane.png" alt="" className="w-24 h-24" />
        <h1 className="text-4xl font-bold">Why book with us ?</h1>
      </div>
      <div className="flex">
        <EasyBooking
          src="https://www.easemytrip.com/images/nwhomfiles/easy-booking.svg"
          title="Easy Booking"
          description="We offer easy and convenient flight bookings with attractive offers."
        />
        <EasyBooking
          src="https://www.easemytrip.com/images/nwhomfiles/lowest-booking.svg"
          title="Lowest Price"
          description="We ensure low rates on hotel reservation, holiday packages and on flight tickets."
        />
        <EasyBooking
          src="https://www.easemytrip.com/images/nwhomfiles/exc-deal.svg"
          title="Exciting Deals"
          description="Enjoy exciting deals on flights, hotels, buses, car rental and tour packages."
        />
        <EasyBooking
          src="https://www.easemytrip.com/images/nwhomfiles/support.svg"
          title="24/7 Support"
          description="Get assistance 24/7 on any kind of travel related query. We are happy to assist you.
"
        />
      </div>
    </div>
  );
}
