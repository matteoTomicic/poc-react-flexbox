# React Flexbox

### Requirements

- [styled-components](https://styled-components.com/)

## Theme Documentation

The theme module (`/src/theme`) provides a centralized configuration for styling elements across your application, including breakpoints for responsive design and container sizes for consistent layout.

Files architecture:

- Theme configuration: `/src/theme/theme.config.ts`
- Default theme definition: `/src/theme/default.theme.ts`
- Styled components declaration: `/src/theme/styled.d.ts`

---

### Theme Configuration (`theme.config.ts`)

The theme.config.ts file defines enums for breakpoints, device media queries, and container sizes. It serves as a central reference for maintaining consistency in styling and layout across your application.

#### Breakpoints Enum

Defines breakpoints for responsive design, specifying minimum screen widths at which the layout changes.

- SM: 576px
- MD: 768px
- LG: 992px
- XL: 1200px
- XXL: 1400px

#### Device Enum

Provides media queries corresponding to each breakpoint, ensuring styles adapt to different screen sizes.

- SM: @media (min-width: 576px)
- MD: @media (min-width: 768px)
- LG: @media (min-width: 992px)
- XL: @media (min-width: 1200px)
- XXL: @media (min-width: 1400px)

#### ContainerSizes Enum

Specifies maximum container widths for different breakpoints, maintaining layout consistency across various screen sizes.

- SM: 540px
- MD: 720px
- LG: 960px
- XL: 1140px
- XXL: 1320px

---

### Customizing the theme

The `theme.config.ts` file serves as a central hub for configuring breakpoints, device media queries, and container sizes to maintain consistency in styling and layout across your application. Follow the guidelines below to customize the theme according to your design requirements:

**For theme customization please refer to following instructions:**
_When adding a new value to any enum, ensure that you update all related enums to reflect this change._

- If you add a new breakpoint in **Breakpoints**, update **Device** to include the corresponding media query. No updates are necessary in **ContainerSizes** since new breakpoints aren't necessarily tied to container widths.

- If you add a new media query in **Device**, ensure that **Breakpoints** has a corresponding breakpoint for that. No updates are necessary in **ContainerSizes** since new media query devices aren't necessarily tied to container widths.

- If you add a new container width in **ContainerSizes**, make sure **Breakpoints** and **Device** have associated breakpoints and media queries, respectively, so you can use it. Subsequently, navigate to `/src/components/Container.ts` and incorporate the newly created media query and max-width into the container component.

Simply follow the established pattern to maintain consistency and coherence within the codebase.

---

## Container Component Documentation

The Container component creates a container with responsive width based on the screen size, providing consistent spacing for content across different devices.

Component path: `/src/components/Container`

**Props:**
The Container component does not accept any props directly. However, its styling and behavior are influenced by the theme settings defined in your styled-components theme.

**Styling:**
The component is styled using styled-components and provides the following styling attributes:

- Responsive Width: Adjusts the maximum width of the container based on
  different screen sizes using media queries defined in the theme.

**Media Queries:**
The container adjusts its maximum width according to the following screen sizes defined in the theme:

- Small Screens (sm): `theme.containerSizes.sm`
- Medium Screens (md): `theme.containerSizes.md`
- Large Screens (lg): `theme.containerSizes.lg`
- Extra Large Screens (xl): `theme.containerSizes.xl`
- Extra Extra Large Screens (xxl): `theme.containerSizes.xxl`

**Theme Settings:**
Ensure that your theme object includes the necessary **containerSizes** settings for each screen size to ensure proper responsiveness.
You can **adjust** theme config in `/src/theme/theme.config.ts` file

### Example:

    import Container from  "/src/components/Container/Container";

    <Container>
    	{children}
    </Container>

---

## Flexbox Components Documentation

This documentation provides comprehensive details about the props available for the Flexbox components, including explanations of each prop and its usage. The components covered in this documentation are FlexContainer and FlexItem.

### FlexContainer Component

The FlexContainer component creates a flex container that allows you to manage the layout of its child elements using Flexbox properties.

Files architecture:

- Component: `/src/components/Flexbox/FlexContainer`
- Types: `/src/components/Flexbox/FlexContainer/types.d.ts`

**FlexContainer props:**

- `$flexDirection`: Specifies the direction of the flex container.
  - Options: `row`, `row-reverse`, `column`, `column-reverse`
- `$flexWrap`: Sets whether the flex items should wrap if they exceed the container's width.
  - Options: `nowrap`, `wrap`, `wrap-reverse`
- `$flexFlow`: Shorthand for the `flex-direction` and `flex-wrap` properties.
- `$justifyContent`: Defines the alignment of flex items along the main axis.
  - Options: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`
- `$alignItems`: Defines the alignment of flex items along the cross axis.
  - Options: `stretch`, `flex-start`, `flex-end`, `center`, `baseline`
- `$alignContent`: Defines the alignment of flex lines within the flex container when there is extra space.
  - Options: `stretch`, `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`
- `$gap`: Sets the gap between flex items.
- `$rowGap`: Sets the gap between rows.
- `$columnGap`: Sets the gap between columns.
- `$margin`: Sets the margin of the flex container ([refer to shared props section](#shared-props)) .
- `$padding`: Sets the padding of the flex container ([refer to shared props section](#shared-props)) .

**Media Query Overrides:** Each of the above props can be overridden for specific screen sizes using props prefixed with the screen size abbreviation (e.g., `$smFlexDirection` for small screens).

### FlexItem Component

The FlexItem component represents a child element of a flex container and allows you to control its flex properties individually.

Files architecture:

- Component: `/src/components/Flexbox/FlexItem`
- Types: `/src/components/Flexbox/FlexItem/types.d.ts`

**FlexItem props:**

- `$flexGrow`: Specifies how much of the flex container's remaining space should be assigned to the flex item's main size.
- `$flexShrink`:  Specifies the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
- `$flexBasis`:  Specifies the initial main size of a flex item.
- `$flex`: Shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.
- `$order`: Specifies the order of the item within the flex container.
- `$alignSelf`: Overrides the alignment set by the parent flex container for the individual item.
  - Options: `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`
- `$margin`: Sets the margin of the flex item ([refer to shared props section](#shared-props)) .
- `$padding`: Sets the padding of the flex item ([refer to shared props section](#shared-props)) .

**Media Query Overrides:** Each of the above props can be overridden for specific screen sizes using props prefixed with the screen size abbreviation (e.g., `$smFlex` for small screens).

### Shared props

These props are shared across both FlexContainer and FlexItem components.

Types path: `/src/components/Flexbox/types.d.ts`

**Spacing props:**

- `$margin`: Sets the margin for both sides of the component.
- `$marginTop`: Sets the margin for the top side of the component.
- `$marginRight`: Sets the margin for the right side of the component.
- `$marginBottom`: Sets the margin for the bottom side of the component.
- `$marginLeft`: Sets the margin for the left side of the component.
- `$padding`: Sets the padding for both sides of the component.
- `$paddingTop`: Sets the padding for the top side of the component.
- `$paddingRight`: Sets the padding for the right side of the component.
- `$paddingBottom`: Sets the padding for the bottom side of the component.
- `$paddingLeft`: Sets the padding for the left side of the component.

**Media Query Overrides:** Each of the above shared props can be overridden for specific screen sizes using props prefixed with the screen size abbreviation (e.g., `$smMargin`, `$smMarginTop` etc., for small screens).

---

### Example:

    import  { FlexContainer, FlexItem }  from  "/src/components/Flexbox";

    <FlexContainer
        $justifyContent="center"
    	$smJustifyContent="flex-start"
    	$alignItems="center"
    	$gap="20px"
    	// ...rest of the props you need (see FlexContainer props section)
    >
    	<FlexItem
    		$flex="1"
    		$alignSelf="center"
    		$mdAlignSelf="flex-end"
    		$margin="5px"
    		// ...rest of the props you need (see FlexItem props section)
    	>
    		{content}
        </FlexItem>
    </FlexContainer>
