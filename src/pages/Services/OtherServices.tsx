import CurvLT from "../../assets/CurvLT";
import CurvRB from "../../assets/CurvRB";

const StepNumber = ({ number }: { number: number }) => {
  return (
    <div className="curv-button" style={{ borderRadius: "0 40px 0 0" }}>
      <div className="curv-button-link">
        <div className="curv-step-number">0{number}.</div>
      </div>
      <div className="curv-left-top">
        <CurvLT />
      </div>
      <div className="curv-right-bottom">
        <CurvRB />
      </div>
    </div>
  );
};

const Steps = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-small-primary mb-5">What we do</p>
          <h3 className="text-4xl leading-tight font-bold mb-4">
            Other Services
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div
            className="relative mb-5 overflow-hidden bg-neutral-800 pt-10 px-10 pb-24"
            style={{ borderRadius: "20px 20px 20px 0" }}
          >
            <div>
              <h5 className="text-xl font-bold mb-4">Daily Car Rental</h5>
              <p className="text-sm text-neutral-500 mb-4">
                Experience flexibility and convenience with our daily car rental
                services. Whether you need a vehicle for a short business trip,
                a quick getaway, or just a day out, we offer a wide range of
                luxury cars to suit your needs. Our fleet is meticulously
                maintained to ensure a smooth and enjoyable drive, no matter the
                occasion.
              </p>
            </div>
            <StepNumber number={1} />
          </div>
          <div
            className="relative mb-5 overflow-hidden bg-neutral-800 pt-10 px-10 pb-24"
            style={{ borderRadius: "20px 20px 20px 0" }}
          >
            <div>
              <h5 className="text-xl font-bold mb-4">Monthly Car Rental</h5>
              <p className="text-sm text-neutral-500 mb-4">
                Unlock unparalleled convenience and flexibility with our monthly
                car rental options. Perfect for extended business trips,
                long-term projects, or extended stays, our monthly rentals offer
                a cost-effective solution without compromising on luxury or
                comfort.
              </p>
            </div>
            <StepNumber number={2} />
          </div>
          <div
            className="relative mb-5 overflow-hidden bg-neutral-800 pt-10 px-10 pb-24"
            style={{ borderRadius: "20px 20px 20px 0" }}
          >
            <div>
              <h5 className="text-xl font-bold mb-4">Annual Car Rental</h5>
              <p className="text-sm text-neutral-500 mb-4">
                Discover the ultimate in convenience and luxury with our annual
                car rental options. Ideal for frequent travelers, long-term
                projects, or those who simply prefer the ease of having a
                premium vehicle at their disposal year-round, our annual rentals
                provide a seamless and cost-effective solution.
              </p>
            </div>
            <StepNumber number={3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
