import { ThemeProvider, createTheme
} from "@rneui/themed";
import '@expo-google-fonts/montserrat'

export const theme = createTheme({
    //I'm using only one color scheme: dark
    //Remember that the type of the styles is an array
    colors: 
    {
        mode: 'dark',
        primary: '#FF6347',      // Primary Coral-Orange
        secondary: '#FFFFFF',    // Secondary White
        tertiary: '#0656B2',     // Tertiary Blue
        accent: '#FF4500',       // Accent Dark Orange
        background: '#1A1A1A',   // Dark Background
        text: '#FFFFFF',         // Primary Text Color
        border: '#2c3e50',       // Border color
        card: '#242424',         // Slightly Lighter Background for Cards/Sections
        notification: '#FF6347', // Coral-Orange for notifications or accent
        disabled: '#434343',     // Slightly brighter than background but still dim
        placeholder: '#B0B0B0',  // Placeholder Text Color
        backdrop: '#00000080',   // Black with some opacity, useful for modals/backdrops
        onSurface: '#FFFFFF',    // Color for elements on top of a surface
        surface: '#2c3e50',      // Surface Color
        gray: '#7A7A7A',         // The Gray from the design
        error: '#FF4500',        // Error Dark Orange
        warning: '#FF8C00',      // Warning Light Orange
        info: '#FF6347',         // Coral-Orange (similar to primary)
        success: '#00D68F',      // Success Green from your old theme
        textContrast: '#121212', // Dark Text
        disabledContrast: '#7A7A7A',// Disabled Text with a contrast
    },
    fonts: 
    {
        regular: 'Montserrat_400Regular',
        bold: 'Montserrat_700Bold',
        sizes: {
            tiny: 8,
            small: 12,
            medium: 16,
            large: 20,
            xlarge: 24,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            fontFamily: 'Montserrat_600SemiBold',

        },
    },

    spacing: {
        tiny: 4,
        small: 8,
        medium: 16,
        large: 32,
        xlarge: 64,
    },

    components: 
    {
        Button: 
        {
            raised: true,
        },
    },
    container: {
        flex: 1,
        padding: 20,
     },
});

export default theme;