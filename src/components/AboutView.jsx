import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About Us first prop" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            {/*offset-lg-2 centers 8 out of 12 columns */}
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, assumenda. Molestiae consequatur a atque doloribus
              nihil, reprehenderit consectetur libero qui nemo obcaecati autem
              at, dolore illo neque. Odit aperiam eos atque inventore illo
              cupiditate voluptatem hic alias, ullam officia tenetur consectetur
              laudantium repellat praesentium cum corrupti, in, suscipit minima.
              Delectus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
