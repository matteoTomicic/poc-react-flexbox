import { DefaultTheme } from "styled-components";
import { ContainerSizes, Device } from "./theme.config";

const theme: DefaultTheme = {
  device: {
    sm: Device.SM,
    md: Device.MD,
    lg: Device.LG,
    xl: Device.XL,
    xxl: Device.XXL,
  },

  containerSizes: {
    sm: ContainerSizes.SM,
    md: ContainerSizes.MD,
    lg: ContainerSizes.LG,
    xl: ContainerSizes.XL,
    xxl: ContainerSizes.XXL,
  },
};

export default theme;
