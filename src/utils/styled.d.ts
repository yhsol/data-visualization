import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    purple: string;
    green: string;
    yellow: string;
    pink: string;
    gray: string;
  }
}
