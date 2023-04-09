import  "styled-components";
import theme from '../theme'


declare module 'styled-components' {
import theme from '../theme'
  type ThemeType = typeof theme;


  export interface DefaultTheme extends ThemeType {}
}