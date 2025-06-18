import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AEM Full Stack Developer",
          "Expertise in AEM 6.4 | 6.5 | AEMaaCS",
          "AEM Sites | AEM Assets | AEM Migration JSP to HTL",
          "Building Enterprise Web Platforms",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
