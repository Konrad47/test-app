import { AuthDto, AuthPayload } from "../models";

const url = "http://localhost:3000/auth";

export const login = async (example: AuthDto): Promise<AuthPayload | null> => {
  try {
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(example),
    });

    if (!response.ok) {
      console.error("login Error: ", response.status);
      return null;
    }

    return response.json();
  } catch (error) {
    console.error("login Error: ", error);
    return null;
  }
};
