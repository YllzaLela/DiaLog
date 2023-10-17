import { ThemeProvider, createTheme
} from "@rneui/themed";

export const theme = createTheme({
    //I'm using only one color scheme: dark
    //Remember that the type of the styles is an array
    colors: 
    {
        mode: 'dark',
        primary: '#3A8DFF',      // Primary Blue 
        secondary: '#29CC97',    // Secondary Green 
        tertiary: '#9B5DE5',   // Purple accent
        accent: '#FF6B6B',       // Coral Accent
        background: '#121212',  // Dark Background
        text: '#EAEAEA',         // Primary Text Color
        border: '#2c3e50',       // Border color
        card: '#1F1F1F',         // Slightly Lighter Background for Cards/Sections
        notification: '#3A8DFF', // Purple for notifications or accent
        disabled: '#434343',     // Slightly brighter than background but still dim
        placeholder: '#B0B0B0',  // Placeholder Text Color
        backdrop: '#00000080',   // Black with some opacity, useful for modals/backdrops
        onSurface: '#EAEAEA',    // Color for elements on top of a surface
        surface: '#2c3e50',      // Surface Color
        error: '#FF3D71',        // Error Red
        warning: '#FFAA00',      // Warning Orange
        info: '#3A8DFF',         // Information Blue (can be the same as primary)
        success: '#00D68F',      // Success Green
        textContrast: '#121212', // Dark Text, maybe for light backgrounds or buttons
        disabledContrast: '#7A7A7A',// Disabled Text with a contrast
        //sectionTitle: '#EAEAEA', // Section Title Color 
    },
    fonts: 
    {
        regular: {
            fontFamily: 'System',
            fontWeight: '400',
        },
        bold: {
            fontFamily: 'System',
            fontWeight: '700',
        },
        sizes: {
            small: 12,
            medium: 16,
            large: 20,
            xlarge: 24,
        }
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
});
