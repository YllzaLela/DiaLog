import React, { useState, useEffect } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState(getGreeting());
  useEffect(() => {
      const intervalId = setInterval(() => {
          const currentGreeting = getGreeting();
          if (currentGreeting !== greeting) {
              setGreeting(currentGreeting);
            }
        }, 60000); // Checks time every minute
        
        return () => clearInterval(intervalId); //cleanup
    }, [greeting]);
    
    return greeting;
}

function getGreeting() {
  const name= 'User';
  const currentHour = new Date().getHours();
  if (currentHour >= 0 && currentHour < 12) {
    return "Good Morning" + " " + name + "!";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good Afternoon" + " " + name + "!";
  } else {
    return "Good Evening" + ' ' + name + "!";
  }
}

export default getGreeting;