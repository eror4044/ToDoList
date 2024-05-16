import React from "react";
import css from "./home.module.css"

const Home = () => {
  return (
    <div className={css.home_background}>
      <h1 className={css.home_title}>Welcome to my amazing website!</h1>
      <p className={css.home_article}>
      I'm thrilled to have you here. Explore my site to discover exciting
        content, useful resources, and much more.
      </p>
      <div className={css.home_image} >
        <img
          src="https://cdn.epicstream.com/images/ncavvykf/epicstream/983857d1e06514ea566e7bb109f6358998a07328-800x450.jpg?rect=0,15,800,420&w=1200&h=630&auto=format"
          alt="Welcome to our website"
          style={{ maxWidth: "100%" }}
        />
      </div>
    </div>
  );
};

export default Home;