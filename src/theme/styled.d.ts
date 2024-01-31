import {} from "styled-components";

import { ThemeType } from "./default.theme";

import { ContainerSizes, Device } from "./theme.config";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    containerSizes: {
      sm: ContainerSizes.SM;
      md: ContainerSizes.MD;
      lg: ContainerSizes.LG;
      xl: ContainerSizes.XL;
      xxl: ContainerSizes.XXL;
    };

    device: {
      sm: Device.SM;
      md: Device.MD;
      lg: Device.LG;
      xl: Device.XL;
      xxl: Device.XXL;
    };
  }
}
