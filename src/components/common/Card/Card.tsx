import React from "react";
import { CardProps } from './Card.types';

import './Card.scss';

const Card = ({ children }: CardProps): React.ReactElement => {
  return <div className="card">{children}</div>;
};

export default Card;
