import { Link } from "react-router-dom";
import CurvButton from "../CurvButton";

const AboutSection = ({ withButton = false }) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 min-[992px]:gap-32 min-[992px]:flex-row">
          <div className="flex-1">
            <div>
              <p className="text-small-primary mb-5">ROYALTY GT</p>
              <div className="text-4xl font-bold leading-tight mb-4">
                <h2>We Are More Than</h2>
                <span className="text-primary">A Car Rental Company</span>
              </div>
              <p className="text-sm mb-8 text-neutral-500 font-light leading-loose">
                At Royalty Gt, we believe that exceptional travel experiences go
                beyond just getting from point A to point B. We are dedicated to
                transforming every journey into a memorable adventure. With a
                fleet of luxury vehicles and an unwavering commitment to
                customer service, we strive to provide not just a ride, but a
                first-class experience tailored to your needs. Our mission is to
                offer the highest standards of elegance, comfort, and
                reliability, all while keeping our services accessible and
                affordable. From a single day’s rental to long-term
                arrangements, our diverse options are designed to fit seamlessly
                into your lifestyle. And with our professional chauffeur
                services, we ensure that every trip is as smooth and enjoyable
                as possible. At Royalty Gt, we don't just rent cars; we provide
                an unparalleled travel experience that goes beyond the ordinary.
                Your satisfaction is our priority, and we're here to make every
                journey extraordinary.
              </p>
              <ul className="mb-6">
                <li className="flex items-center">
                  <div className="flex items-center justify-center">
                    <span className="ti-check text-primary bg-neutral-800 p-4 rounded-full text-[11px]"></span>
                  </div>
                  <div>
                    <p className="ml-4 text-neutral-500 text-sm">
                      Sports and Luxury Cars
                    </p>
                  </div>
                </li>
                {/* <li className="flex items-center mt-3">
                  <div className="flex items-center justify-center">
                    <span className="ti-check text-primary bg-neutral-800 p-4 rounded-full text-[11px]"></span>
                  </div>
                  <div>
                    <p className="ml-4 text-neutral-500 text-sm">
                      Sports and Luxury Cars
                    </p>
                  </div>
                </li> */}
              </ul>
              {withButton && (
                <div className="flex">
                  <Link to="/about" className="button">
                    Read More <span className="ti-arrow-top-right"></span>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="flex-1">
            <div
              className="relative mb-4 overflow-hidden"
              style={{ borderRadius: "20px 20px 20px 0" }}
            >
              <img src="img/about.jpg" />
              <CurvButton
                href="/about"
                icon={<i className="ti-control-play"></i>}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
