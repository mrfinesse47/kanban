const getTheme = (isLight) => {
  const light = {
    backgroundMain: '#F4F7FD',
    backgroundSecondary: '#fff',
    backgroundGradient:
      'linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%)',
    buttonMain: '#635FC7',
    textMain: '#000112',
    textAccent: '#828FA3',
    buttonText: '#FFF',
    lines: '#E4EBFA;',
    mediumGray: '#828FA3',
  };

  const dark = {
    backgroundMain: '#20212C',
    backgroundSecondary: '#2B2C37',
    backgroundGradient:
      'linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.125) 100%);',
    buttonMain: '#635FC7',
    textMain: '#FFFFFF',
    textAccent: '#828FA3',
    ButtonText: '#FFF',
    lines: '#3E3F4E',
    mediumGray: '#828FA3',
  };

  const media = {
    mobile: '768px',
  };

  return isLight
    ? { colors: { ...light }, ...media }
    : { colors: { ...dark }, ...media };
};

export default getTheme;
