import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png'
import ImageSkeleton from '../Skeleton';

import { Restaurant, RestaurantInfo, Content, RestaurantPhoto, Title, Address } from './styles';



const ResturantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title size="large">{restaurant.name}</Title>
        <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        <Content size="medium">{restaurant.formatted_address || restaurant.vicinity}</Content>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        alt="Foto do Restaurante"
      />
      {!imageLoaded && <ImageSkeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default ResturantCard;
