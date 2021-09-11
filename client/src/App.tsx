import Select from "components/forms/Select/Select";
import Option from "components/forms/Select/Option";
import React, { useState } from "react";
import "./styles/App.css";

function App(): JSX.Element {
  const [value, setValue] = useState<string | number>("");

  const handleChange = (e: React.ChangeEvent<{value: string | number}>) => {
    console.log(e.target.value);

    setValue(e.target.value);
  };

  console.log(value);

  return (
    <div className="App">
      <Select
        value={value}
        onChange={handleChange}
        label="לייבל"
      >
        <Option value="1">אפשרות 1</Option>
        <Option value="2">אפשרות 1</Option>
        <Option value="3">אפשרות 1</Option>
        <Option value="4">אפשרות 1</Option>
      </Select>
    </div>
  );
}

export default App;
