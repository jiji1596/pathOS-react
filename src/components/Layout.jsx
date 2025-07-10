import { Navbar } from "./elements/Navbar";
import PropTypes from "prop-types";

export const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};


Layout.PropTypes = {
  children: PropTypes.node.isRequired
}
