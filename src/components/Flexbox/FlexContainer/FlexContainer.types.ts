type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

type FlexFlow = `${FlexDirection} ${FlexWrap}`;

type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

type AlignItems = "stretch" | "flex-start" | "flex-end" | "center" | "baseline";

type AlignContent =
  | "normal"
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export interface IFlexContainer {
  $flexDirection?: FlexDirection;
  $smFlexDirection?: FlexDirection;
  $mdFlexDirection?: FlexDirection;
  $lgFlexDirection?: FlexDirection;
  $xlFlexDirection?: FlexDirection;
  $xxlFlexDirection?: FlexDirection;

  $flexWrap?: FlexWrap;
  $smFlexWrap?: FlexWrap;
  $mdFlexWrap?: FlexWrap;
  $lgFlexWrap?: FlexWrap;
  $xlFlexWrap?: FlexWrap;
  $xxlFlexWrap?: FlexWrap;

  $flexFlow?: FlexFlow;
  $smFlexFlow?: FlexFlow;
  $mdFlexFlow?: FlexFlow;
  $lgFlexFlow?: FlexFlow;
  $xlFlexFlow?: FlexFlow;
  $xxlFlexFlow?: FlexFlow;

  $justifyContent?: JustifyContent;
  $smJustifyContent?: JustifyContent;
  $mdJustifyContent?: JustifyContent;
  $lgJustifyContent?: JustifyContent;
  $xlJustifyContent?: JustifyContent;
  $xxlJustifyContent?: JustifyContent;

  $alignItems?: AlignItems;
  $smAlignItems?: AlignItems;
  $mdAlignItems?: AlignItems;
  $lgAlignItems?: AlignItems;
  $xlAlignItems?: AlignItems;
  $xxlAlignItems?: AlignItems;

  $alignContent?: AlignContent;
  $smAlignContent?: AlignContent;
  $mdAlignContent?: AlignContent;
  $lgAlignContent?: AlignContent;
  $xlAlignContent?: AlignContent;
  $xxlAlignContent?: AlignContent;

  $gap?: string;
  $smGap?: string;
  $mdGap?: string;
  $lgGap?: string;
  $xlGap?: string;
  $xxlGap?: string;

  $rowGap?: string;
  $smRowGap?: string;
  $mdRowGap?: string;
  $lgRowGap?: string;
  $xlRowGap?: string;
  $xxlRowGap?: string;

  $columnGap?: string;
  $smColumnGap?: string;
  $mdColumnGap?: string;
  $lgColumnGap?: string;
  $xlColumnGap?: string;
  $xxlColumnGap?: string;
}
