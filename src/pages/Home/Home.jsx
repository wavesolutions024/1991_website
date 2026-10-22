import Herosection from "../../comp/Herosection/Herosection";
import PageBreaker from "../../comp/pagebreaker/PageBreaker";
import Pagebreakertwo from "../../comp/pagebreakertwo/Pagebreakertwo";
import "./Home.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, FreeMode,Navigation } from "swiper/modules";
import * as CountUpModule from "react-countup";
import img1 from "../../assets/ttm1.jpeg";
import img2 from "../../assets/ttm2.jpeg";
import img3 from "../../assets/ttm3.jpeg";
import img4 from "../../assets/ttm4.jpeg";
import img5 from "../../assets/ttm5.jpeg";
import img6 from "../../assets/ttm6.jpeg";
import img7 from "../../assets/ttm7.jpeg";
import Butoon from "../../comp/button/Butoon";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Herosection />

      <PageBreaker />
      <div class="counter parent">
        <div class="counter_cont cont">
          <div class="count">
            <h1>1lac +</h1>
            <p>Tattoos</p>
          </div>
          <div class="count">
            <h1>20 +</h1>
            <p>Years Of Experince</p>
          </div>
          <div class="count">
            <h1>40,000 +</h1>
            <p>Clients</p>
          </div>
        </div>
      </div>

      <Pagebreakertwo />

      <div class="about_section parent">
        <div class="about_section_cont cont">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            porro voluptatem, minima similique harum cupiditate assumenda sit
            quibusdam nisi doloremque!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            porro voluptatem, minima similique harum cupiditate assumenda sit
            quibusdam nisi doloremque! <strong> harum assumenda sit</strong>{" "}
            minima similique harum cupiditate assumenda sit quibusdam nisi
            doloremque! porro voluptatem, minima similique{" "}
            <strong>harum cupiditate assumenda sit</strong>
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            porro voluptatem, minima similique harum cupiditate assumenda sit
            quibusdam nisi doloremque!
          </p>
        </div>
      </div>

      <div class="photos_parent parent" id="our-work">
        <Swiper
          slidesPerView={6}
          spaceBetween={0}
          delay={1000}
          autoplay
          loop={true}
          freeMode={true}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
          breakpoints={{
            350: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 3,
            },
            750: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <PageBreaker />

      {/* how it works */}

      <div class="htw_parent parent" id="how-it-works">
        <div class="htw_cont cont">
          <h1>How It Works</h1>
          <p>
            Getting a tattoo at 1991 is a three-step process built around one
            idea: you should never be surprised by anything, not the design, not
            the price, not the result. Here's exactly what happens when you book
            with us.
          </p>

          <div class="ht_list">
            <div class="card">
              <h1 class="number">01</h1>
              <div class="top_image bg-img-cover"></div>

              <div class="content">
                <h1>Start with a Free Consultation</h1>

                <p>
                  Message us on WhatsApp and we'll set up a consultation,
                  in-person at our studio, over a coffee. We'll talk through
                  your idea, your placement, your artist options and your price.
                  No commitment, no charge.
                </p>
              </div>
            </div>
            <div class="card">
              <h1 class="number">02</h1>
              <div class="top_image top_image2 bg-img-cover"></div>

              <div class="content">
                <h1>Your design, hand-drawn for you</h1>

                <p>
                  Your chosen artist hand-draws your design from scratch. You're
                  in the room while it takes shape, collaborating until it's
                  exactly right.
                </p>
              </div>
            </div>
            <div class="card">
              <h1 class="number">03</h1>
              <div class="top_image top_image3 bg-img-cover"></div>

              <div class="content">
                <h1>Get Tattooed. Walk out proud.</h1>

                <p>
                  Settle into your chair, order from our in-studio café and let
                  your artist get to work. Your price was confirmed before we
                  started. Your design was approved before we started. All
                  that's left is the Art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* book sessions */}
      <div class="bk_session parent" id="pricing">
        <div class="bk_session_cont cont">
          <div class="left">
            <h1>HOW MUCH DOES A TATTOO COST?</h1>

            <p>
              Our pricing is based on size + artist + colour. ₹1,250–₹3,500 per
              square inch excluding tax, depending on artist experience, plus a
              ₹1,000 base fee. Final pricing is always confirmed during
              consultation.
            </p>
            <Butoon text="Book Consultaion" />
          </div>

          <div class="right">
            <div class="session">
              <h1 className="ses_text">HYGIENE & SAFETY</h1>
              <p>
                Single-use sterile needles, wrapped equipment, medical waste
                disposal.
              </p>
            </div>
            <div class="session">
              <a className="ses_text">4.8 ★ GOOGLE RATING →</a>
              <p>Read what clients say about the studio and the process.</p>
            </div>
            <div class="session">
              <Link className="ses_text">QUESTIONS ANSWERED →</Link>
              <p>
                Procedure, pain, pricing, hygiene, aftercare and cancellations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <PageBreaker />
      {/* testimoneal */}

      <div class="testimoneal_parent parent">
        <div class="testioneal_cont cont">
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            delay={1000}
            navigation={true}
            
            autoplay
            loop={true}
         
            modules={[Autoplay,Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                natus alias harum inventore? Unde commodi delectus adipisci
                architecto, iusto animi ullam et quis odio nesciunt quos
                laborum, incidunt optio culpa.
              </p>
              <h3>
                Lorem Lipsum
              </h3>
            </SwiperSlide>
              <SwiperSlide>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                natus alias harum inventore? Unde commodi delectus adipisci
                architecto, iusto animi ullam et quis odio nesciunt quos
                laborum, incidunt optio culpa.
              </p>
               <h3>
                Lorem Lipsum
              </h3>
            </SwiperSlide>
              <SwiperSlide>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                natus alias harum inventore? Unde commodi delectus adipisci
                architecto, iusto animi ullam et quis odio nesciunt quos
                laborum, incidunt optio culpa.
              </p>
               <h3>
                Lorem Lipsum
              </h3>
            </SwiperSlide>
              <SwiperSlide>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                natus alias harum inventore? Unde commodi delectus adipisci
                architecto, iusto animi ullam et quis odio nesciunt quos
                laborum, incidunt optio culpa.
              </p>
               <h3>
                Lorem Lipsum
              </h3>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

         <Pagebreakertwo />

         <div class="ready_tostart_parent parent">
          <div class="ready_tostart_cont cont">
            <h1> READY TO START </h1>
            <Butoon
            text="BOOK AN APPOINTMENT"
            />
          </div>
         </div>
    </>
  );
};

export default Home;
