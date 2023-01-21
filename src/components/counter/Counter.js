import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState("0");

  useEffect(() => {
    /*eslint-disable-next-line no-restricted-globals*/
    const data = fetch(
      "https://api.countapi.xyz/hit/srijan-iitism.com/5d7ce94c-8475-4035-bc66-cd743c5c40c0"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
    setCount(data.value);
  }, []);
  return <div></div>;
}
