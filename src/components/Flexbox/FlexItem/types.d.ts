declare module "types/flex-item" {
  type AlignSelf =
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";

  interface IFlexItem {
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
}
