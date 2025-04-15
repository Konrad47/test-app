import React from "react";
import useExampleData from "./hooks/useExampleData";
import { Link } from "react-router-dom";
import ExamplesData from "./components/examplesData";

const ExampleView = (): React.JSX.Element => {
  const examples = useExampleData();

  return (
    <>
      <div className="example-container">
        <h1>Example</h1>
        <Link to="/">Home</Link>
        {examples !== null ? (
          <ExamplesData examples={examples} />
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </>
  );
};

export default ExampleView;
