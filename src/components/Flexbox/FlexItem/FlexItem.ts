import { styled } from "styled-components";
import { IFlexItem } from "./FlexItem.types";
import { ISpacing } from "../Shared.types";

const FlexItem = styled.div<IFlexItem & ISpacing>`
  flex-grow: ${({ $flexGrow }) => $flexGrow && $flexGrow};
  flex-shrink: ${({ $flexShrink }) => $flexShrink && $flexShrink};
  flex-basis: ${({ $flexBasis }) => $flexBasis && $flexBasis};
  flex: ${({ $flex }) => $flex && $flex};
  order: ${({ $order }) => $order && $order};
  align-self: ${({ $alignSelf }) => $alignSelf && $alignSelf};
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
    flex-grow: ${({ $smFlexGrow }) => $smFlexGrow && $smFlexGrow};
    flex-shrink: ${({ $smFlexShrink }) => $smFlexShrink && $smFlexShrink};
    flex-basis: ${({ $smFlexBasis }) => $smFlexBasis && $smFlexBasis};
    flex: ${({ $smFlex }) => $smFlex && $smFlex};
    order: ${({ $smOrder }) => $smOrder && $smOrder};
    align-self: ${({ $smAlignSelf }) => $smAlignSelf && $smAlignSelf};
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
    flex-grow: ${({ $mdFlexGrow }) => $mdFlexGrow && $mdFlexGrow};
    flex-shrink: ${({ $mdFlexShrink }) => $mdFlexShrink && $mdFlexShrink};
    flex-basis: ${({ $mdFlexBasis }) => $mdFlexBasis && $mdFlexBasis};
    flex: ${({ $mdFlex }) => $mdFlex && $mdFlex};
    order: ${({ $mdOrder }) => $mdOrder && $mdOrder};
    align-self: ${({ $mdAlignSelf }) => $mdAlignSelf && $mdAlignSelf};
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
    flex-grow: ${({ $lgFlexGrow }) => $lgFlexGrow && $lgFlexGrow};
    flex-shrink: ${({ $lgFlexShrink }) => $lgFlexShrink && $lgFlexShrink};
    flex-basis: ${({ $lgFlexBasis }) => $lgFlexBasis && $lgFlexBasis};
    flex: ${({ $lgFlex }) => $lgFlex && $lgFlex};
    order: ${({ $lgOrder }) => $lgOrder && $lgOrder};
    align-self: ${({ $lgAlignSelf }) => $lgAlignSelf && $lgAlignSelf};
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
    flex-grow: ${({ $xlFlexGrow }) => $xlFlexGrow && $xlFlexGrow};
    flex-shrink: ${({ $xlFlexShrink }) => $xlFlexShrink && $xlFlexShrink};
    flex-basis: ${({ $xlFlexBasis }) => $xlFlexBasis && $xlFlexBasis};
    flex: ${({ $xlFlex }) => $xlFlex && $xlFlex};
    order: ${({ $xlOrder }) => $xlOrder && $xlOrder};
    align-self: ${({ $xlAlignSelf }) => $xlAlignSelf && $xlAlignSelf};
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
    flex-grow: ${({ $xxlFlexGrow }) => $xxlFlexGrow && $xxlFlexGrow};
    flex-shrink: ${({ $xxlFlexShrink }) => $xxlFlexShrink && $xxlFlexShrink};
    flex-basis: ${({ $xxlFlexBasis }) => $xxlFlexBasis && $xxlFlexBasis};
    flex: ${({ $xxlFlex }) => $xxlFlex && $xxlFlex};
    order: ${({ $xxlOrder }) => $xxlOrder && $xxlOrder};
    align-self: ${({ $xxlAlignSelf }) => $xxlAlignSelf && $xxlAlignSelf};
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

export default FlexItem;
