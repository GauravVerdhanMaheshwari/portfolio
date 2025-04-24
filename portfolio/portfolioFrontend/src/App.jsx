import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <h1 className="text-white h-dvh content-center text-center text-3xl">
      {" "}
      hello {msg}
    </h1>
  );
}

export default App;
