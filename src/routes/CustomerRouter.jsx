import React from "react";
import PropTypes from "prop-types";
import { Router } from "react-router-dom";

// I must create this CustomRoute because i have can`t use the history with default router.

export default function CustomRouter({ basename, children, history }) {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);
  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

CustomRouter.defaultProps = {
  basename: "",
  history: {},
};

CustomRouter.propTypes = {
  basename: PropTypes.string,
  children: PropTypes.node.isRequired,
  history: PropTypes.shape(),
};
