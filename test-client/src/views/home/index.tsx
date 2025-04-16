import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const HomeView = (): React.JSX.Element => {
  const url = "http://localhost:3000/user";

  const fetchMe = async (id: number): Promise<any> => {
    try {
      const response = await fetch(`${url}/me/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        console.error("Error: ", response.status);
        return null;
      }

      return response.json();
    } catch (error) {
      console.log("fetchExamples Error: ", error);
      return null;
    }
  };

  const [me, setMe] = useState(null);

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
        <h1>Home</h1>
        <div className="links-container">
          <Link to="/example">Example</Link>
          <Link to="/login">Login</Link>
        </div>
        {me !== null ? <div>{me.username}</div> : <p>Loading...</p>}
      </div>
    </>
  );
};

export default HomeView;
