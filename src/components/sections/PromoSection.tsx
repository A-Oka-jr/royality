const PromoSection = () => {
  return (
    <section className="relative py-32 bg-promo-pattern bg-left-top bg-cover bg-fixed">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-small-primary mb-5">Explore</p>
          <h3 className="text-4xl leading-tight font-bold mb-4">
            Car <span className="text-primary">Promo</span> Video
          </h3>
        </div>
        <div className="flex justify-center">
          <div className="relative group/promo w-full">
            <video
              src="/videos/sclass580.mp4"
              className="w-full h-[calc(100vw)] max-h-[600px] object-cover rounded-lg"
              controls
            ></video>
            <div className="absolute inset-0 flex items-center justify-center group-hover/promo:hidden transition-effect">
              <div className="w-16 h-16 border border-primary rounded-full flex items-center justify-center">
                <span className="text-2xl text-center text-primary transition-effect">
                  <i className="ti-control-play"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
