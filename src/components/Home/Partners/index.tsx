import BoxSlider from "../../SharedComponent/BoxSlider";

const Partners = () => {  
  return (

      <section className="upcoming dark:bg-darkmode">
        <div className="max-w-1068 m-auto">
          <div className="container">
            <div className="md:pb-20 pb-8 text-center" data-aos="fade-up">
              <h2 className="pb-4"> Our Trusted Partners</h2>
              <p className="text-SlateBlueText font-normal dark:text-opacity-80 text-lg max-w-920 m-auto">
                Recognized and supported by leading educational platforms and global companies</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <BoxSlider />
            </div>
          </div>
        </div>
      </section>

  );
};

export default Partners;
