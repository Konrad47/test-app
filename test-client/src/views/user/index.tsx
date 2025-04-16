import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMe } from "./api/userApi";

const AuthorizedView = (): React.JSX.Element => {
  const [me, setMe] = useState<{ username: string } | null>(null);

  useEffect(() => {
    const getMe = async () => {
      const meApi = await fetchMe(1);
      console.log(meApi);
      setMe(meApi);
    };
    getMe();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Authorized View</h1>
        <div className="links-container">
          <Link to="/">Home</Link>
        </div>
      </div>
    </>
  );
};

export default AuthorizedView;
