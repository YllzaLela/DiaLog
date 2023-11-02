export function MacroCalculations(age, gender, weight, height, activityLevel, goal) {
    
    
        let numericAge = Number(age);
        let numericWeight = Number(weight);
        let numericHeight = Number(height);

        let BMR;
        let TDEE;
        let protein;

        if (gender === "female")
        {
                BMR= 655 + (9.6 * numericWeight) + (1.8 * numericHeight) - (4.7 * numericAge);
        }
        else
        {
                BMR= 66 + (13.7 * numericWeight) + (5 * numericHeight) - (6.8 * numericAge);
        }

        //protein is calculate in here too for the reduction of code lines
        switch(activityLevel)
        {
                case "1.2": // sedentary
                TDEE = BMR * 1.2;
                protein = 1 * numericWeight;
                break;
        case "1.3": // lightly active
                TDEE = BMR * 1.375;
                protein = 1.2 * numericWeight;
                break;
        case "1.5": // moderately active
                TDEE = BMR * 1.55;
                protein = 1.3 * numericWeight;
                break;
        case "1.7": // highly active
                TDEE = BMR * 1.725;
                protein = 1.5 * numericWeight;
                break;
        case "1.9": // athlete
                TDEE = BMR * 1.9;
                protein = 1.7 * numericWeight;
                break;
        }

        switch (goal) {
            case "Lose":
                TDEE -= 500;
                break;
            case "Gain":
                TDEE += 500;
                break;
            default:
                break;
        }

        //Macros

        //Protein
        const proteinFinal= protein;

        //Fats
        const fats= (TDEE * 0.25) / 9;

        //Carbs
        const carbs = (TDEE - (protein * 4) - (fats * 9)) / 4;
        
        //total calories
        const calories= TDEE;

        return {
            calories: calories,
            protein: proteinFinal,
            fats: fats,
            carbs: carbs
        };
    }
    
