const url = "http://localhost:3000/user";

export const fetchMe = async (
  id: number
): Promise<{ username: string } | null> => {
  try {
    const response = await fetch(`${url}/me/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      console.error("fetchMe Error: ", response.status);
      return null;
    }

    return response.json();
  } catch (error) {
    console.log("fetchMe Error: ", error);
    return null;
  }
};
