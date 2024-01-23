import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import Card from './Card';
import AOS from "aos";
import "aos/dist/aos.css";

const Review = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
       
        fetch('/review.json')
          .then(response => response.json())
          .then(data => {
            
            setReviews(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
    return (
        <div className="mt-4 " data-aos="fade-left">
        <h1 className="text-center text-4xl font-bold mb-4 "> <span className="text-blue-700 ml-2">Reviews</span> </h1>
        <div className="gap-4">
        <Marquee  pauseOnHover={true} speed={150} >
                 {
                     
                         reviews.map(reviews =>
                             
                             <Card key={reviews.id} reviews={reviews}></Card>)
                     
                 }
             </Marquee>           
         </div>
         </div>
    );
};

export default Review;