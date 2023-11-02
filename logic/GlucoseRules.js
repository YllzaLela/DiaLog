import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { db, auth } from "../firebaseConfig";
import { doc, getDoc, query, collection, orderBy, limit, getDocs } from "firebase/firestore";

export default GlucoseRules = () => {

const [glucoseFeedback, setGlucoseFeedback] = useState('');

const GlucoseFeedback = (reading, diagnosis, propTag) => {
    switch (diagnosis) {
        case 'diabetic':
            if (propTag === "Fasted") {
                if (reading <= 126) {
                    return "Your fasted glucose level are normal. Keep up the good work!";
                } else {
                    return "Your fasted glucose level is high. Please monitor and contact healthcare provider.";
                }
            } else if (propTag === "Post Meal") {
                if (reading <= 200) {
                    return "Your post-meal glucose levels are in the normal range.";
                } else {
                    return "Your post-meal glucose level is high. Please monitor and contact healthcare provider.";
                }
            }
            break;

        case 'pre-diabetic':
            if (propTag === "Fasted") {
                if (reading >= 100 && reading <= 125) {
                    return "Your fasted glucose level is in the normal range. Keep up the good work!";
                } else {
                    return "Your fasted glucose level is outside the normal range. Please monitor.";
                }
            } else if (propTag === "Post Meal") {
                if (reading >= 140 && reading <= 180) {
                    return "Your post-meal glucose level is normal. Aim to keep glucose levels stable.";
                } else {
                    return "Your post-meal glucose level is outside the normal range for a pre-diabetic. Please monitor.";
                }
            }
            break;

        case 'non-diabetic':
        default: // General public
            if (propTag === "Fasted") {
                if (reading >= 70 && reading <= 99) {
                    return "Your fasted glucose level is normal.";
                } else {
                    return "Your fasted glucose level is outside the normal range. Please monitor.";
                }
            } else if (propTag === "Post Meal") {
                if (reading < 140) {
                    return "Your post-meal glucose level is normal.";
                } else {
                    return "Your post-meal glucose level is outside the normal range. Please monitor.";
                }
            }
            break;
    }
};

useEffect(() => {
    const fetchData = async () => {
        try {
            const userId = auth.currentUser.uid;
            const userDoc = doc(db, "Users", userId);
            const userSnap = await getDoc(userDoc);
            
            if (userSnap.exists) {
                const healthStatus = userSnap.data.diagnosis || 'non-diabetic'; // default to 'non-diabetic' if not specified
                
                const glucoseLogQuery = query(
                    collection(db, `Users/${userId}/glucoseLog`),
                    orderBy("timestamp", "desc"),
                    limit(1)
                );
                
                const querySnapshot = await getDocs(glucoseLogQuery);
                const latestLog = querySnapshot.docs[0];
                
                if (latestLog) {
                    const glucoseReading = latestLog.data().glucose;
                    const propTag = latestLog.data().tags;
                    
                    setGlucoseFeedback(GlucoseFeedback(glucoseReading, healthStatus, propTag));
                } else {
                    console.log("No glucose logs found!");
                }
            } else {
                console.log("No such user document!");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, []);

};