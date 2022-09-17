const getTheme = (isLight) => {
  const light = {
    backgroundMain: '#F4F7FD',
    backgroundSecondary: '#fff',
    textMain: '#000112',
    textAccent: '#828FA3',
    lines: '#E4EBFA;',
  };

  const dark = {
    backgroundMain: '#20212C',
    backgroundSecondary: '#2B2C37',
    textMain: '#FFFFFF',
    textAccent: '#828FA3',
    lines: '#3E3F4E',
  };

  const media = {
    mobile: '768px',
  };

  return isLight
    ? { colors: { ...light }, ...media }
    : { colors: { ...dark }, ...media };
};

export default getTheme;
