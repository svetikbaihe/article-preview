export type TypographyType = "subtitle" | "body" | "overline-1" | 'overline-2';

export type TypographyColor = "dark-grayish" | "dark-blue" | "grayish-blue";

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