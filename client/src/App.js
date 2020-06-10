import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const { data } = await axios.get("/api/v1/message");
      setMessage(data.message);
    };

    fetchMessage();
  }, []);

  return (
    <div>
      <p>{message}</p>
      <p>4</p>
    </div>
  );
}

export default App;
