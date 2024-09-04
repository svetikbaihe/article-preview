export type TypographyType = "subtitle" | "body" | "overline";

export type TypographyColor = "dark-grayish" | "grayish" | "light";

export type TypographyWeight = "medium" | "bold";

export type TypographyElement = "h1" | "p" | 'span';

export interface TypographyProps {
  text: string;
  type: TypographyType;
  color: TypographyColor;
  weight: TypographyWeight;
  element: TypographyElement;
  className?: string;
}