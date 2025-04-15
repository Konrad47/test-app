import { ExampleDto, ExampleEntity } from "../models";

const url = "http://localhost:3000/example";

export const fetchExamples = async (): Promise<ExampleEntity[] | null> => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      console.error("fetchExamples Error: ", response.status);
      return null;
    }

    return response.json();
  } catch (error) {
    console.log("fetchExamples Error: ", error);
    return null;
  }
};

export const createExample = async (
  example: ExampleDto
): Promise<ExampleEntity | null> => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(example),
    });

    if (!response.ok) {
      console.error("createExample Error: ", response.status);
      return null;
    }

    return response.json();
  } catch (error) {
    console.log("createExample Error: ", error);
    return null;
  }
};

export const updateExample = async (
  id: number,
  example: ExampleDto
): Promise<ExampleEntity | null> => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(example),
    });

    if (!response.ok) {
      console.error("updateExample Error: ", response.status);
      return null;
    }

    return response.json();
  } catch (error) {
    console.log("updateExample Error: ", error);
    return null;
  }
};

export const deleteExample = async (
  id: number
): Promise<{ success: boolean }> => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      console.error("deleteExample Error: ", response.status);
      return { success: false };
    }

    return response.json();
  } catch (error) {
    console.log("deleteExample Error: ", error);
    return { success: false };
  }
};
