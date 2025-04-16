import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMe } from "./api/userApi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const AuthorizedView = (): React.JSX.Element => {
  const [me, setMe] = useState<{ username: string } | null>(null);
  const { id, access_token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const getMe = async () => {
      const meApi = await fetchMe(id, access_token);
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
        {me !== null ? <h3>Welcome {me.username}</h3> : <p>Loading...</p>}
      </div>
    </>
  );
};

export default AuthorizedView;
