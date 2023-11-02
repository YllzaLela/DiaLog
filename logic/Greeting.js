import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';


function Greeting() {
  const [greeting, setGreeting] = useState(() => getGreeting(name));
  
  useEffect(() => {
    const fetchUserName = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userId = currentUser.uid;
        const userRef = doc(db, 'User', userId);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists() && userDoc.data().name) {
          setUserName(userDoc.data().name);
        }
      }
    };
    fetchUserName();
  }, []);
  const [name, setUserName] = useState('User'); 
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentGreeting = getGreeting(name);
      if (currentGreeting !== greeting) {
        setGreeting(currentGreeting);
      }
    }, 60000); // Checks time every minute

    return () => clearInterval(intervalId); //cleanup
  }, [greeting, name]); 

  return greeting;
}

function getGreeting(name) {
  const currentHour = new Date().getHours();
  if (currentHour >= 0 && currentHour < 12) {
    return "Good Morning" + " " + name + "!";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Hello" + " " + name + "!";
  } else {
    return "Good Evening" + ' ' + name + "!";
  }
}

export default Greeting; 