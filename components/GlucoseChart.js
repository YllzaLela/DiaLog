 import React from 'react';
 import { Dimensions, View, Text } from 'react-native';
 import { LineChart } from 'react-native-chart-kit';
 import { theme } from '../config/theme';
 import { Button } from 'react-native-elements';
 import { useState, useEffect } from 'react';
 import { db, auth } from '../firebaseConfig';
 import { collection, collectionGroup, doc, getDocs } from 'firebase/firestore';

 const GlucoseChart = () => {

//   const [glucoseReadings, setGlucoseReadings] = React.useState([]);
//   const [timestamps, setTimestamps] = React.useState([]);
    
    

//    useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const userId = auth.currentUser?.uid;
//                 const glucoseLogRef = collection(db, "Users", userId, "glucoseLog");
            

//                 const querySnapshot = await getDocs(query(glucoseLogRef, orderBy("timestamp")));
                
//                 const readings = [];
//                 const times = [];
    
//                 querySnapshot.forEach((doc) => {
//                     const data = doc.data();
//                     readings.push(data.glucose);
//                     times.push(data.timestamp.toDate().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
//                 });
    
//                 setGlucoseReadings(readings);
//                 setTimestamps(times);
                
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
    
//         fetchData();
//     }, []);

  const data = {
      labels: ['12:00 AM', '3:00 AM', '6:00 AM', '9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM', '9:00 PM'],
      datasets: [{ 
          data: [ 100, 110, 120, 130, 140, 150, 160, 170,],
          strokeWidth: 3,
      }],
  };

     const screenWidth = Dimensions.get('window').width - 30;

     return (
         <View style={{ margin: 20, marginTop: 30 }}>
            
             <Text style=
             {{
                 fontSize: 20,
                 fontFamily: theme.fonts.bold,
                 color: theme.colors.text,
                 textAlign: 'left',
             }}>Today's Glucose</Text>
             <LineChart
                data={data}
                 width={screenWidth}
                 height={200}
                 chartConfig={{
                     backgroundGradientFrom: theme.colors.card,
                     backgroundGradientTo: theme.colors.tertiary,
                     decimalPlaces: 0,
                     color: (opacity = 1) => theme.colors.accent,
                     labelColor: (opacity = 1) => theme.colors.text,
                     style: {
                         borderRadius: 16,
                         alignSelf: 'center',
                     },
                     propsForDots: {
                         r: '3',
                         strokeWidth: '1',
                         stroke: theme.colors.text,
                     },
                 }}
                 bezier
                 style={{
                     marginVertical: 5,
                     borderRadius: 20, 
                 }}
             />
         <Button
          buttonStyle={{
             backgroundColor: theme.colors.primary,
             borderRadius: 16,
             paddingHorizontal: 10, 
             alignSelf: 'flex-start',
             }}
             onPress={() => navigation.navigate('Glucose Log')}
             title="Log Glucose"
             titleStyle={{
               color: theme.colors.text,
               fontFamily: 'Montserrat_400Regular',
             }}/>

         </View>
     );
 };


 export default GlucoseChart;
