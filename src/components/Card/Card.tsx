import React from 'react';

import styles from './Card.module.scss';

export interface CardProps {
  header: React.ReactNode;
  content: React.ReactNode;
  bigSize?: boolean
}

const Card = (props: CardProps): JSX.Element => {
  return (
    <div className={`${styles.card} ${props.bigSize ? styles.bigSize : ''}`}>
      <div className={styles.cardHeader}>
        {props.header}
      </div>
      <div className={styles.cardContent}>
        {props.content}
      </div>
    </div>
  );
}

export default Card;
