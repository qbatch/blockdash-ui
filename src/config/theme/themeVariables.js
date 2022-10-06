const fsxl = '32px';
const fslg  = '24px';
const fsmd  = '20px';
const fssm  = '16px';
const fsxs  = '13px';
const fsXxs  = '11px';
const bxShaddow = '6px 6px 12px rgba(0, 0, 0, 0.16)';

const theme = {
  'primary-color': '#2589FF', // primary color for all components
  'on-primary': '#FFFFFF',
  'primary-variant': '#1565D8',
  'secondary-color': '#F8FAFB',
  'secondary-variant': '#E6E6E6', // secondary color for all components
  'on-secondary': '#000000',
  'background': '#030715',
  'on-background': '#000000',
  'surface': '#F8FAFB',
  'on-surface': '#000000',
  'body-text': '#515D70',
  'body-text-variant': '#4E5969',
  'label-color': '#77838E',
  // Accent Colors
  'accent-color-error': '#EA0312',
  'accent-color-success': '#009C34',

  'base-font-size-xl': fsxl,
  'base-font-size-lg': fslg,
  'base-font-size-md': fsmd,
  'base-font-size': fssm,
  'base-font-size-sm': fsxs,
  'box-shadow': bxShaddow,

}
 const lightTheme = {
  name: "light-theme",
  colors: {
    primaryColor: '#1976D2', // primary color for all components
    onPrimary: '#EFF2F3',
    primaryVariant: '#1565D8',
    secondaryColor: '#019371',
    secondaryVariant: '#E6E6E6', // secondary color for all components
    onSecondary: '#000000',
    background: '#030715',
    onBackground: '#000000',
    surface: '#151A26',
    onSurface: '#EFF2F3',
    bodyText: '#BFCBD1',
    bodyTextVariant: '#4E5969',
    labelColor: '#707C94',
    borderColor:'#2E3846',
    whiteColor:'#ffff',
    gradient:"linear-gradient(135deg, #FF0080 0%, #7928CA 100%)",
    // Accent Colors
    accentColorError: '#F31819',
    onaccentColorError: '#F31819',
    accentColorSuccess: '#13D802',
    accentOutlineSuccess: 'rgba(0, 156, 52, 0.05)',
    accentColorWarning: '#FF7B00',
    accentOutlineWarning:'rgba(255, 153, 0, 0.05)',
    baseFontSizeXl: fsxl,
    baseFontSizeLg: fslg,
    baseFontSizeMd: fsmd,
    baseFontSizeSm: fssm,
    baseFontSize: fsxs,
    baseFontSizeXs: fsXxs,
    baseFontSizeSmall: '11px',
    boxShadow: bxShaddow,
  },
};

const darkTheme = {
  name: "dark-theme",
  colors: {
    primaryColor: '#1976D2', // primary color for all components
    onPrimary: '#EFF2F3',
    primaryVariant: '#1565D8',
    secondaryColor: '#019371',
    secondaryVariant: '#E6E6E6', // secondary color for all components
    onSecondary: '#000000',
    background: '#030715',
    onBackground: '#000000',
    surface: '#151A26',
    onSurface: '#000000',
    bodyText: '#515D70',
    bodyTextVariant: '#4E5969',
    labelColor: '#707C94',
    borderColor:'#2E3846',
    // Accent Colors
    accentColorError: '#EA0312',
    accentColorSuccess: '#009C34',
  
    baseFontSizeXl: fsxl,
    baseFontSizeLg: fslg,
    baseFontSizeMd: fsmd,
    baseFontSizeSm: fssm,
    baseFontSize: fsxs,
    baseFontSizeXs: fsXxs,
    baseFontSizeSmall: '11px',
    boxShadow: bxShaddow,
  },
};
  
  export { theme,lightTheme,darkTheme };
  
  
