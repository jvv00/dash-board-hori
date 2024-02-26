import { mode } from '@chakra-ui/theme-tools'
import { lighten } from 'polished'
import '../../src/assets/css/style.css'
export const variablesC = {
    $maxW: '80rem',
}

export const globalStyles = {

    colors: {
        primary: '#422AFB',
        pirmaryLight: lighten(0.1, '#422AFB'),
        secondary: '#83D9FB',
        secondaryLight: lighten(0.1, '#83D9FB'),
        tertiary: '#22C55F',
        tertiaryLight: lighten(0.1, '#22C55F'),

        bgDefault: '#F5F7FF',

        lineDefault: '#E5E7EB',

        white: '#FFF',
        black: '#000',

        gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
        },
        brandScheme: {
            100: "#E9E3FF",
            200: "#7551FF",
            300: "#7551FF",
            400: "#7551FF",
            500: "#422AFB",
            600: "#3311DB",
            700: "#02044A",
            800: "#190793",
            900: "#02044A",
          },
    },
    radii: {
        none: '0',
        sm: '.5rem',
        md: '.75rem',
        lg: '1rem',
        xl: '1.25rem',
        full: '9999px',
    },
    styles: {
        global: (props) => ({
            body: {
                minW: '20.625rem',
                // overflowX: 'hidden',
                bg: mode('bgDefault', 'navy.900')(props),
                fontFamily: '"DM Sans", "sans-serif"',
                letterSpacing: '-0.0313rem',
                fontSize: '1rem',
                fontWeight: '400',
                lineHeight: '1.5',
                color: mode('gray.900', 'white')(props),
                // bg: 'url("/-bg/pc.png") no-repeat 0 0 / 111.875rem auto',
            },
            '#root': {
                // opacity: 0.7,
            },
            input: {
                color: 'gray.700',
            },
            html: {
                fontFamily: '"DM Sans", "sans-serif"',
            },
            'ul > li': {
                listStyle: 'none',
            },
            '.chakra-container': {
                // maxWidth: 'calc(80rem + var(--chakra-space-4) * 2) !important',
            },

        }),
    },
}
