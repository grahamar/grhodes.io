import { useState } from 'react';

// #004b38 - nice mint green
// #53ffc1

export const themes = {
  minimal: {
    selection: 'rgba(133, 180, 255, 0.4)',
    primary: 'white',
    background: '#000000',
    color: 'white',
    logoColor: 'white',
    logoHoverColor: 'blue',
    helloColor: '#28ffcd',
    contentBackground: 'transparent',
    titleColor: '#28ffcd',
    descriptionColor: 'white',
    postBorderColor: '#eaeaea',
    tagColor: 'white',
    tagBackground: 'rgba(133, 180, 255, 0.2)',
    tagHoverBackground: 'rgba(133, 180, 255, 0.4)',
    blockquoteBackground: '#f4f4f7',
    blockquoteBorder: '#eeedf3',
    linkColor: '#00FFC5',
    linkBorder: '#eee',
    hrColor: 'rgb(223, 224, 238)',
    bullet: '#7b778e',
    inlineCodeColor: 'black',
  },
};

const useTheme = (defaultTheme = 'minimal') => {
  let themeName = defaultTheme;
  const [theme, setTheme] = useState(themes[themeName] || {});

  function changeTheme(newTheme) {
    if (typeof window !== 'undefined' && 'localStorage' in window)
      localStorage.setItem('theme', newTheme);

    setTheme(themes[newTheme]);
    themeName = newTheme;
  }

  return [theme, changeTheme, themeName];
};

export default useTheme;
