
export const dummyUser = {
    email: 'user1@gmail.com',
    name: "User1",
    age: "30",
    gender: "male",
    weight: "70",
    height: "175",
    diagnosis: "Type 2 Diabetes",
    activityLevel: "1.5",
    goal: "Maintain",
  };

 export const medicationData = [
    {
      id: 1,
      name: "Metformin",
      dosage: "500",
      dosageUnit: "mg",
      time: "8:00 AM",
      notes: "Take before food",
    },
    {
      id: 2,
      name: "Insulin",
      dosage: "10",
      dosageUnit: "units",
      time: "12:00 PM",
      notes: "Take after food",
    },
    {
      id: 3,
      name: "Lisinopril",
      dosage: "20",
      dosageUnit: "mg",
      time: "6:00 PM",
      notes: "Take with food",
    },
  ];


  const userMedications = [
    {
      id:0,
      name: "Insulin",
      dosage: 10,
      dosageUnit: "mg",
      reminders: true,
      note: "Take after meals",
      schedule: {
        daysOfWeek: [1, 3, 5, 7], // Monday, Wednesday, Friday, Sunday
        times: [
          { hour: 9, minute: 0 },  // 9:00 AM
          { hour: 21, minute: 0 }, // 9:00 PM
        ]
      },
      specificDate: [
        {
          date: "2023-10-31",
          times: [
            { hour: 10, minute: 30 }, // 10:30 AM
          ]
        },
        {
          date: "2023-11-05",
          times: [
            { hour: 10, minute: 45 }, // 10:45 AM
          ]
        }
      ]
    },
    {
      id:1,
      name: "Aleve",
      dosage: 200,
      dosageUnit: "mg",
      reminders: true,
      note: "Take with water",
      schedule: {
        daysOfWeek: [1, 2, 3, 4, 5, 6, 7], // Every day
        times: [
          { hour: 7, minute: 0 }, // 7:00 AM
        ]
      },
      specificDate: [
        {
          date: "2023-11-01",
          times: [
            { hour: 8, minute: 0 }, // 8:00 AM
          ]
        }
      ]
    }
  ];
  
  export default userMedications;