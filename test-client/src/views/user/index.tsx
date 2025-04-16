import React from "react";
import { Link } from "react-router-dom";
import { useFetchMe } from "./hooks/useFetchMe";

const AuthorizedView = (): React.JSX.Element => {
  const me = useFetchMe();

  return (
    <>
      <div className="container">
        <h1>Authorized View</h1>
        <div className="links-container">
          <Link to="/">Home</Link>
        </div>
        {me !== null ? <h3>Welcome {me.username}</h3> : <p>Loading...</p>}
      </div>
    </>
  );
};

export default AuthorizedView;
