import React, { useState } from "react";

const Server = () => {
  const [first, setfirst] = useState("");
  console.log(first);
  const onIpSubmit = () => {
    const str = `http://${first}`;
    localStorage.setItem("ip", str);
  };
  return (
    <div className="input">
      <input
        placeholder="ip"
        name="ipadress"
        onChange={(e) => {
          setfirst(e.target.value);
        }}
      />
      <input type="submit" onClick={onIpSubmit} />
    </div>
  );
};

export default Server;
