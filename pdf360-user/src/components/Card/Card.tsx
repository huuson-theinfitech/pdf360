import { CardProps, Card as MUICard, Stack } from '@mui/material';
import * as React from 'react';
import CardTitle from './CardTitle';

interface ICardProps extends CardProps {
  title?: string;
  titleColor?: string;
  children: React.ReactNode;
}

const Card: React.FC<ICardProps> & {
  Title: typeof CardTitle;
} = ({ title, titleColor = 'info.light', children, ...others }) => {
  return (
    <MUICard component={Stack} gap={4} justifyContent='flex-start' sx={others.sx} {...others}>
      {title && <CardTitle color={titleColor}>{title}</CardTitle>}
      {children}
    </MUICard>
  );
};

Card.Title = CardTitle;

export default Card;
