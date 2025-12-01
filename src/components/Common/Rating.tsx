import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
export const RenderStars = (rating: number) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    const empty = 5 - full - (half ? 1 : 0);

    for (let i = 0; i < full; i++) stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    if (half) stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    // for (let i = 0; i < empty; i++) stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
    return stars;
  };
