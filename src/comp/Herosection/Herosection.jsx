import Butoon from "../button/Butoon";
import "./Herosection.scss";

const Herosection = () => {
  return (
    <>
      <div class="hero_section_parent bg-img-cover parent">
        <div class="hero_section_cont cont">
          <div class="content">
            <h1>
              CREATING GREAT TATTOOS
              <br />
              FOR OVER <strong>25 YEARS</strong>
            </h1>
            <p className="hero_para">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution
            </p>
            <div class="btn_list">
              <Butoon
               text="BOOK APPOINTMENT"
              />
               <Butoon
               
                 text="Explore Tattoos"
               btn={true}
               />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
