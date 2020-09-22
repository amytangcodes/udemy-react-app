import React, { useState, useEffect } from "react";

const ConvertComponent = ({ language, text }) => {
  useEffect(() => {
    console.log("New language or text");
  }, [language, text]);

  return (
    <div>
      <p>convert</p>
    </div>
  );
};

export default ConvertComponent;
