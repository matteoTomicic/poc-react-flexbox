import { styled } from "styled-components";
import { IFlexContainer } from "types/flex-container";
import { ISpacing } from "types/shared";

const FlexContainer = styled.div<IFlexContainer & ISpacing>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection && $flexDirection};
  flex-wrap: ${({ $flexWrap }) => ($flexWrap ? $flexWrap : "wrap")};
  justify-content: ${({ $justifyContent }) =>
    $justifyContent && $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems && $alignItems};
  align-content: ${({ $alignContent }) => $alignContent && $alignContent};
  gap: ${({ $gap }) => $gap && $gap};
  row-gap: ${({ $rowGap }) => $rowGap && $rowGap};
  column-gap: ${({ $columnGap }) => $columnGap && $columnGap};
  margin: ${({ $margin }) => $margin && $margin};
  margin-top: ${({ $marginTop }) => $marginTop && $marginTop};
  margin-right: ${({ $marginRight }) => $marginRight && $marginRight};
  margin-bottom: ${({ $marginBottom }) => $marginBottom && $marginBottom};
  margin-left: ${({ $marginLeft }) => $marginLeft && $marginLeft};
  padding: ${({ $padding }) => $padding && $padding};
  padding-top: ${({ $paddingTop }) => $paddingTop && $paddingTop};
  padding-right: ${({ $paddingRight }) => $paddingRight && $paddingRight};
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom && $paddingBottom};
  padding-left: ${({ $paddingLeft }) => $paddingLeft && $paddingLeft};

  ${({ theme }) => theme.device.sm} {
    flex-direction: ${({ $smFlexDirection }) =>
      $smFlexDirection && $smFlexDirection};
    flex-wrap: ${({ $smFlexWrap }) => $smFlexWrap && $smFlexWrap};
    justify-content: ${({ $smJustifyContent }) =>
      $smJustifyContent && $smJustifyContent};
    align-items: ${({ $smAlignItems }) => $smAlignItems && $smAlignItems};
    align-content: ${({ $smAlignContent }) =>
      $smAlignContent && $smAlignContent};
    gap: ${({ $smGap }) => $smGap && $smGap};
    row-gap: ${({ $smRowGap }) => $smRowGap && $smRowGap};
    column-gap: ${({ $smColumnGap }) => $smColumnGap && $smColumnGap};
    margin: ${({ $smMargin }) => $smMargin && $smMargin};
    margin-top: ${({ $smMarginTop }) => $smMarginTop && $smMarginTop};
    margin-right: ${({ $smMarginRight }) => $smMarginRight && $smMarginRight};
    margin-bottom: ${({ $smMarginBottom }) =>
      $smMarginBottom && $smMarginBottom};
    margin-left: ${({ $smMarginLeft }) => $smMarginLeft && $smMarginLeft};
    padding: ${({ $smPadding }) => $smPadding && $smPadding};
    padding-top: ${({ $smPaddingTop }) => $smPaddingTop && $smPaddingTop};
    padding-right: ${({ $smPaddingRight }) =>
      $smPaddingRight && $smPaddingRight};
    padding-bottom: ${({ $smPaddingBottom }) =>
      $smPaddingBottom && $smPaddingBottom};
    padding-left: ${({ $smPaddingLeft }) => $smPaddingLeft && $smPaddingLeft};
  }

  ${({ theme }) => theme.device.md} {
    flex-direction: ${({ $mdFlexDirection }) =>
      $mdFlexDirection && $mdFlexDirection};
    flex-wrap: ${({ $mdFlexWrap }) => $mdFlexWrap && $mdFlexWrap};
    justify-content: ${({ $mdJustifyContent }) =>
      $mdJustifyContent && $mdJustifyContent};
    align-items: ${({ $mdAlignItems }) => $mdAlignItems && $mdAlignItems};
    align-content: ${({ $mdAlignContent }) =>
      $mdAlignContent && $mdAlignContent};
    gap: ${({ $mdGap }) => $mdGap && $mdGap};
    row-gap: ${({ $mdRowGap }) => $mdRowGap && $mdRowGap};
    column-gap: ${({ $mdColumnGap }) => $mdColumnGap && $mdColumnGap};
    margin: ${({ $mdMargin }) => $mdMargin && $mdMargin};
    margin-top: ${({ $mdMarginTop }) => $mdMarginTop && $mdMarginTop};
    margin-right: ${({ $mdMarginRight }) => $mdMarginRight && $mdMarginRight};
    margin-bottom: ${({ $mdMarginBottom }) =>
      $mdMarginBottom && $mdMarginBottom};
    margin-left: ${({ $mdMarginLeft }) => $mdMarginLeft && $mdMarginLeft};
    padding: ${({ $mdPadding }) => $mdPadding && $mdPadding};
    padding-top: ${({ $mdPaddingTop }) => $mdPaddingTop && $mdPaddingTop};
    padding-right: ${({ $mdPaddingRight }) =>
      $mdPaddingRight && $mdPaddingRight};
    padding-bottom: ${({ $mdPaddingBottom }) =>
      $mdPaddingBottom && $mdPaddingBottom};
    padding-left: ${({ $mdPaddingLeft }) => $mdPaddingLeft && $mdPaddingLeft};
  }

  ${({ theme }) => theme.device.lg} {
    flex-direction: ${({ $lgFlexDirection }) =>
      $lgFlexDirection && $lgFlexDirection};
    flex-wrap: ${({ $lgFlexWrap }) => $lgFlexWrap && $lgFlexWrap};
    justify-content: ${({ $lgJustifyContent }) =>
      $lgJustifyContent && $lgJustifyContent};
    align-items: ${({ $lgAlignItems }) => $lgAlignItems && $lgAlignItems};
    align-content: ${({ $lgAlignContent }) =>
      $lgAlignContent && $lgAlignContent};
    gap: ${({ $lgGap }) => $lgGap && $lgGap};
    row-gap: ${({ $lgRowGap }) => $lgRowGap && $lgRowGap};
    column-gap: ${({ $lgColumnGap }) => $lgColumnGap && $lgColumnGap};
    margin: ${({ $lgMargin }) => $lgMargin && $lgMargin};
    margin-top: ${({ $lgMarginTop }) => $lgMarginTop && $lgMarginTop};
    margin-right: ${({ $lgMarginRight }) => $lgMarginRight && $lgMarginRight};
    margin-bottom: ${({ $lgMarginBottom }) =>
      $lgMarginBottom && $lgMarginBottom};
    margin-left: ${({ $lgMarginLeft }) => $lgMarginLeft && $lgMarginLeft};
    padding: ${({ $lgPadding }) => $lgPadding && $lgPadding};
    padding-top: ${({ $lgPaddingTop }) => $lgPaddingTop && $lgPaddingTop};
    padding-right: ${({ $lgPaddingRight }) =>
      $lgPaddingRight && $lgPaddingRight};
    padding-bottom: ${({ $lgPaddingBottom }) =>
      $lgPaddingBottom && $lgPaddingBottom};
    padding-left: ${({ $lgPaddingLeft }) => $lgPaddingLeft && $lgPaddingLeft};
  }

  ${({ theme }) => theme.device.xl} {
    flex-direction: ${({ $xlFlexDirection }) =>
      $xlFlexDirection && $xlFlexDirection};
    flex-wrap: ${({ $xlFlexWrap }) => $xlFlexWrap && $xlFlexWrap};
    justify-content: ${({ $xlJustifyContent }) =>
      $xlJustifyContent && $xlJustifyContent};
    align-items: ${({ $xlAlignItems }) => $xlAlignItems && $xlAlignItems};
    align-content: ${({ $xlAlignContent }) =>
      $xlAlignContent && $xlAlignContent};
    gap: ${({ $xlGap }) => $xlGap && $xlGap};
    row-gap: ${({ $xlRowGap }) => $xlRowGap && $xlRowGap};
    column-gap: ${({ $xlColumnGap }) => $xlColumnGap && $xlColumnGap};
    margin: ${({ $xlMargin }) => $xlMargin && $xlMargin};
    margin-top: ${({ $xlMarginTop }) => $xlMarginTop && $xlMarginTop};
    margin-right: ${({ $xlMarginRight }) => $xlMarginRight && $xlMarginRight};
    margin-bottom: ${({ $xlMarginBottom }) =>
      $xlMarginBottom && $xlMarginBottom};
    margin-left: ${({ $xlMarginLeft }) => $xlMarginLeft && $xlMarginLeft};
    padding: ${({ $xlPadding }) => $xlPadding && $xlPadding};
    padding-top: ${({ $xlPaddingTop }) => $xlPaddingTop && $xlPaddingTop};
    padding-right: ${({ $xlPaddingRight }) =>
      $xlPaddingRight && $xlPaddingRight};
    padding-bottom: ${({ $xlPaddingBottom }) =>
      $xlPaddingBottom && $xlPaddingBottom};
    padding-left: ${({ $xlPaddingLeft }) => $xlPaddingLeft && $xlPaddingLeft};
  }

  ${({ theme }) => theme.device.xxl} {
    flex-direction: ${({ $xxlFlexDirection }) =>
      $xxlFlexDirection && $xxlFlexDirection};
    flex-wrap: ${({ $xxlFlexWrap }) => $xxlFlexWrap && $xxlFlexWrap};
    justify-content: ${({ $xxlJustifyContent }) =>
      $xxlJustifyContent && $xxlJustifyContent};
    align-items: ${({ $xxlAlignItems }) => $xxlAlignItems && $xxlAlignItems};
    align-content: ${({ $xxlAlignContent }) =>
      $xxlAlignContent && $xxlAlignContent};
    gap: ${({ $xxlGap }) => $xxlGap && $xxlGap};
    row-gap: ${({ $xxlRowGap }) => $xxlRowGap && $xxlRowGap};
    column-gap: ${({ $xxlColumnGap }) => $xxlColumnGap && $xxlColumnGap};
    margin: ${({ $xxlMargin }) => $xxlMargin && $xxlMargin};
    margin-top: ${({ $xxlMarginTop }) => $xxlMarginTop && $xxlMarginTop};
    margin-right: ${({ $xxlMarginRight }) =>
      $xxlMarginRight && $xxlMarginRight};
    margin-bottom: ${({ $xxlMarginBottom }) =>
      $xxlMarginBottom && $xxlMarginBottom};
    margin-left: ${({ $xxlMarginLeft }) => $xxlMarginLeft && $xxlMarginLeft};
    padding: ${({ $xxlPadding }) => $xxlPadding && $xxlPadding};
    padding-top: ${({ $xxlPaddingTop }) => $xxlPaddingTop && $xxlPaddingTop};
    padding-right: ${({ $xxlPaddingRight }) =>
      $xxlPaddingRight && $xxlPaddingRight};
    padding-bottom: ${({ $xxlPaddingBottom }) =>
      $xxlPaddingBottom && $xxlPaddingBottom};
    padding-left: ${({ $xxlPaddingLeft }) =>
      $xxlPaddingLeft && $xxlPaddingLeft};
  }
`;

export default FlexContainer;
