import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Component that checks if it's inside Router context
export const RouterAwareLink = ({ to, children, ...props }) => {
  // Try to use a React Router hook to detect if we're in Router context
  try {
    // This will throw an error if not in Router context
    useNavigate();

    // If no error, we're in Router context, so use Link
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    );
  } catch (error) {
    // Not in Router context, render just the children without Link functionality
    return <>{children}</>;
  }
};

export default RouterAwareLink;
