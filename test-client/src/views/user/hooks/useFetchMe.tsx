import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchMe } from "../api/userApi";
import { RootState } from "../../../store/store";

export const useFetchMe = () => {
  const [me, setMe] = useState<{ username: string } | null>(null);
  const { id, access_token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const getMe = async () => {
      const meApi = await fetchMe(id, access_token);
      setMe(meApi);
    };
    getMe();
  }, [id, access_token]);

  return me;
};
