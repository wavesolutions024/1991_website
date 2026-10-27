import PageBreaker from "../pagebreaker/PageBreaker";
import "./PageTop.scss";

const PageTop = () => {
  return (
    <>
      <div class="page_top parent bg-img-cover">
        <div class="page_top_cont cont">
          <h1>About 1991</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos debitis blanditiis enim tempora molestias eos iure amet
            error quam itaque!
          </p>
        </div>
      </div>
      <PageBreaker />
    </>
  );
};

export default PageTop;
