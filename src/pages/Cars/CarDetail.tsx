import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const CarDetail = () => {
  // Use the location hook to access the state passed via the Link
  const location = useLocation();
  const carData = location.state?.car; // Retrieve the car data from the state

  // If carData is not available, you can handle this case accordingly
  if (!carData) {
    return <div>No car data available</div>;
  }

  return (
    <div className="container mx-auto pt-24 pb-6 bg-neutral-900 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6">{carData.carName}</h1>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {carData.images.map((image: string, index: number) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`${carData.carName} image ${index + 1}`}
              className="w-full h-72 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="car-details mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Details</h2>
        <p className="text-lg">
          <strong>Price per day:</strong>{" "}
          <span className="text-primary">{carData.price} AED</span>
        </p>
        <p className="text-lg">
          <strong>Seats:</strong> {carData.seats}
        </p>
        <p className="text-lg">
          <strong>Transmission:</strong> {carData.transmission}
        </p>
        <p className="text-lg">
          <strong>Luggage Capacity:</strong> {carData.capacity}
        </p>
        <p className="text-lg">
          <strong>Minimum Age:</strong> {carData.minAge} years
        </p>
      </div>
    </div>
  );
};

export default CarDetail;
