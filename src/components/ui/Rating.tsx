import React, { ReactNode } from 'react';
import { FaRegStar, FaStar, FaStarHalf } from 'react-icons/fa';

type TRatingProps = {
  rating: number;
};

const renderRating = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);
  const stars = [];

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar />);
  }

  // Half star (if applicable)
  if (halfStar) {
    stars.push(<FaStarHalf />);
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar />);
  }

  return stars;
};

const Rating = ({ rating }: TRatingProps) => {
  return (
    <div className=" flex items-center gap-1 text-secondary_color">
      {renderRating(rating).map((item: ReactNode, index: number) => item)}
    </div>
  );
};

export default Rating;
