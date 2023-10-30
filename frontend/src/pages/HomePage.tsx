import axios from "axios";
import React from "react";

function HomePage() {
  const testBackend = () => {
    const apiUrl = "http://localhost:5000";

    // Making a GET request using Axios
    axios
      .get(apiUrl)
      .then(function (response) {
        // Handle successful response here
        console.log("Data:", response.data);
      })
      .catch(function (error) {
        // Handle error here
        console.error("Error:", error);
      });
  };
  return (
    <div className="flex flex-col">
      HomePage
      <button
        onClick={() => {
          testBackend();
        }}
      >
        Test
      </button>
    </div>
  );
}

export default HomePage;
