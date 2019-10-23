import React from 'react';

// import './custom-button.styles.scss';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({
  // These props are for non-styled components
  // children,
  // isGoogleSignIn,
  // inverted,
  // ...otherProps
  children,
  ...props
}) => {
  return (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
    // Original code used with scss file (i.e. non-styled component)
    // <button
    //   className={`${inverted ? 'inverted-sign-in' : ''} ${
    //     isGoogleSignIn ? 'google-sign-in' : ''
    //   } custom-button`}
    //   {...otherProps}
    // >
    //   {children}
    // </button>
  );
};

export default CustomButton;
