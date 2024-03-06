type AlignSelf =
  | "auto"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch";

export interface IFlexItem {
  $flexGrow?: number;
  $smFlexGrow?: number;
  $mdFlexGrow?: number;
  $lgFlexGrow?: number;
  $xlFlexGrow?: number;
  $xxlFlexGrow?: number;

  $flexShrink?: number;
  $smFlexShrink?: number;
  $mdFlexShrink?: number;
  $lgFlexShrink?: number;
  $xlFlexShrink?: number;
  $xxlFlexShrink?: number;

  $flexBasis?: string;
  $smFlexBasis?: string;
  $mdFlexBasis?: string;
  $lgFlexBasis?: string;
  $xlFlexBasis?: string;
  $xxlFlexBasis?: string;

  $flex?: string;
  $smFlex?: string;
  $mdFlex?: string;
  $lgFlex?: string;
  $xlFlex?: string;
  $xxlFlex?: string;

  $order?: number;
  $smOrder?: number;
  $mdOrder?: number;
  $lgOrder?: number;
  $xlOrder?: number;
  $xxlOrder?: number;

  $alignSelf?: AlignSelf;
  $smAlignSelf?: AlignSelf;
  $mdAlignSelf?: AlignSelf;
  $lgAlignSelf?: AlignSelf;
  $xlAlignSelf?: AlignSelf;
  $xxlAlignSelf?: AlignSelf;
}
