import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png'
import ImageSkeleton from '../Skeleton';

import { Restaurant, RestaurantInfo, Content, RestaurantPhoto, Title, Address } from './styles';
import Text from '../Text';


const ResturantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Text size="large">{restaurant.name}</Text>
        <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c" />
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
