import axios from "axios";
import React, { useState, useEffect } from "react";
import Flickity from "react-flickity-component";
import "./flickity.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/place/ChIJAQCsfRC8EmsRrvtItQ_le8A/reviews"
      )
      .then((response) => {
        const data = response.data;
        setReviews(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderStars = (rating) => {
    switch (rating) {
      case 1:
        return <span>★</span>;
      case 2:
        return <span>★★</span>;
      case 3:
        return <span>★★★</span>;
      case 4:
        return <span>★★★★</span>;
      case 5:
        return <span>★★★★★</span>;
      default:
        return null;
    }
  };
  const options = {
    wrapAround: true,
    fullscreen: true,
    contain: true,
    prevNextButtons: true,
    pageDots: true,
    autoPlay: true,
    selectedAttraction: 0.01,
    friction: 0.15,
  };

  return (
    <section className="my-[200px]">
      <div className="w-[100%] flex justify-center items-center text-3xl font-bold text-primary">
        <h1>HERE'S WHAT OUR CLIENTS HAVE TO SAY ABOUT US</h1>
      </div>

      <Flickity
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        disableImagesLoaded={true} // default false
        reloadOnUpdate // default false
        static // default false
        cellClassName={"carousel-cell"}
        options={options}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="carousel cell w-[1000px] h-[600px] justify-center flex items-center  text-2xl text-alt2 "
          >
            <div className=" p-5 flex justify-center items-center flex-col gap-10">
              <h3 className=" text-2xl  font-semibold">{review.author_name}</h3>
              <img src={review.profile_photo_url} alt="" />
              <p className="max-w-[600px]">{review.text}</p>
              <div className=" text-[#fbbc04]">
                {renderStars(review.rating)}
              </div>
            </div>
          </div>
        ))}
      </Flickity>
    </section>
  );
}

export default Reviews;
