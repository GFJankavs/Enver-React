import React, { FC } from 'react';
import styles from '../Buttons.module.scss';

interface Props {
  children: React.ReactNode;
}

const ButtonNavigate: FC<Props> = ({ children }) => {
  console.log(123);
  return (
    <>
      <button
        className={`${styles.button} ${styles.navigate}`}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonNavigate;
