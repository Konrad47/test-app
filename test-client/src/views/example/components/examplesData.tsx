import React from "react";
import { ExampleEntity } from "../models";

interface ExamplesDataProps {
  examples: ExampleEntity[];
}

const ExamplesData = ({ examples }: ExamplesDataProps): React.JSX.Element => {
  return (
    <>
      {examples.map((example) => (
        <div key={example.id}>
          <p>{example.title}</p>
        </div>
      ))}
    </>
  );
};

export default ExamplesData;
