import React from "react";
import "./custom-button.styles.scss";
function customButton({ children,isGoogleSignIn, ...otherProps }) {
  return (
    <button className={`${isGoogleSignIn?'google-sign-in':''} custom-button`} {...otherProps}>
      {children}
    </button>
  );
}

export default customButton;
