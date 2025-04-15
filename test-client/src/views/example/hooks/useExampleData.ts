import { useEffect, useState } from "react";
import { ExampleEntity } from "../models";
import { fetchExamples } from "../api/exampleApi";

const useExampleData = () => {
  const [examples, setExamples] = useState<ExampleEntity[] | null>(null);

  useEffect(() => {
    const getExamples = async () => {
      const examplesFromApi = await fetchExamples();
      setExamples(examplesFromApi);
    };
    getExamples();
  }, []);

  return examples;
};

export default useExampleData;
