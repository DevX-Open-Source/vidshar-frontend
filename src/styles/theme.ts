const theme = {
  boxShadow: {
    modal: '1px 3px 6px rgba(0, 0, 0, 0.1)',
    tooltip: '0px 4px 8px rgba(0, 0, 0, 0.04)'
  },
  border: {
    solid: (color: string) => `0.1rem solid ${color}`,
    dashed: (color: string) => `0.1rem dashed ${color}`
  },
  borderRadius: {
    button: '0.25rem',
    input: '0.4rem',
    card: '0.8rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    regular: 400,
    medium: 500,
    bold: 700,
    sizes: {
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      xxxlarge: '3.2rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: {
      orange: '#f58031'
    },
    secondary: {
      green: '#008014',
      lightGreen: '#94d376',
      red: '#e74c3c',
      darkBlue: '#1d2236',
      blue: '#3498db'
    },
    neutral: {
      black: '#111820',
      darkGrey: '#696969',
      grey: '#ccc',
      lightGrey: '#efefef',
      extraLightGrey: '#f8f8f8',
      white: '#fff'
    },
    shades: {
      orange: (opacity: number) => `rgba(245, 128, 49, ${opacity})`,
      black: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
      darkGrey: (opacity: number) => `rgba(105, 105, 105, ${opacity})`,
      white: (opacity: number) => `rgba(255, 255, 255, ${opacity})`
    },
    linear: {
      darkBlue: `linear-gradient(89.66deg, #1D2236 0.42%, rgba(29, 34, 54, 0.8) 32.52%, rgba(29, 34, 54, 0.4) 99.84%)`,
      black: `linear-gradient(180deg, rgba(17, 24, 32, 0.4) 0%, #111820 100%)`,
      lightOrange: `linear-gradient(rgba(245, 143, 49, 0.71), rgba(245, 167, 49, 0.18))`
    }
  },
  effects: {
    dropShadow: {
      elev1: '0 0.2rem 0.4rem rgba(0, 0, 0, 0.04)',
      elev2: '0 0.4rem 0.8rem rgba(0, 0, 0, 0.04)',
      elev3: '0 0.8rem 1.6rem rgba(0, 0, 0, 0.08)',
      elev4: '0.3rem 0.3rem 0.5rem rgba(105, 105, 105, 0.1)',
      leftSidebars: '0.4rem 0 0.8rem rgba(0, 0, 0, 0.04)',
      rightSidebars: '-0.4rem 0 0.8rem rgba(0, 0, 0, 0.04)'
    }
  },
  layers: {
    toast: 2,
    testerMessage: 2,
    tooltip: 1,
    popperDialog: 2,
    popperBackdrop: 2,
    spinner: 0,
    headerMultiCompaniesModal: 1,
    backdrop: 1,
    profilePageHeader: 1,
    profilePageCard: 1,
    appBar: 2,
    sidePanel: 2,
    columnList: 1
  },
  spacings: {
    xxxsmall: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    huge: '6.4em',
    xxhuge: '8rem'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
    slow: '1s ease-in-out'
  }
}

export default theme
