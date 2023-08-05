import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to React 201 first prop" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            {/*offset-lg-2 centers 8 out of 12 columns */}
            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
              suscipit, aliquam quidem ipsam, nobis inventore quos, accusantium
              quas culpa qui eum dolorum assumenda exercitationem. Itaque
              corrupti quisquam nemo sed perspiciatis!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
