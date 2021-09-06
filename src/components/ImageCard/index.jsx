import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Skeleton from '../Skeleton';

export const Card = styled.div`
  display: flex;
  justufy-content: center;
  pandding: 5xp;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  p {
    margin-left: 6px;
    margin-top: 10px;
  }
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.reular};
  color: #ffffff;
  font-size: 16px;
`;

const ImageCard = ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoaded = new Image();
    imageLoaded.src = photo;
    imageLoaded.onload = () => setImageLoaded(true);
  }, [photo]);

  return ( 
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  );
};

export default ImageCard;