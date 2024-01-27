import { useEffect, useState } from "react";

const Percentage = () => {
  const [data, setData] = useState({ maths: 0, physics: 0, chem: 0 });
  const [percentage, setPercentage] = useState(0);

  const fields = [
    { name: "maths", value: data.maths },
    { name: "physics", value: data.physics },
    { name: "chem", value: data.chem }
  ];

  useEffect(() => {
    // Not sure but percentage should be divided 300 I guess
    const per = ((data.maths + data.physics + data.chem) / 300) * 100;
    setPercentage(per);
  }, [data]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: parseInt(e.target.value)
    });
  };

  return (
    <center>
      <h3>Percentage: {percentage}</h3>
      {fields.map((field, idx) => (
        <input
          key={idx}
          placeholder={field.name}
          name={field.name}
          value={field.value}
          onChange={handleChange}
        /> 
       
      ))}
       <hr></hr>
    </center>

   
  );
};

export default Percentage;
