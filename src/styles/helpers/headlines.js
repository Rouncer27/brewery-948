import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"

// Headline Styles #1 //
export const H1Base = css`
  ${fontSizer(2.8, 4, 76.8, 150, 3.0)};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`

export const H1Black = css`
  ${H1Base};
  color: ${colors.black};
`

export const H1White = css`
  ${H1Base};
  color: ${colors.white};
`

// Headline Styles #2 //
export const H2Base = css`
  ${fontSizer(2.8, 4, 76.8, 150, 3.0)};
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
`

export const H2White = css`
  ${H2Base};
  color: ${colors.white};
`

export const H2Black = css`
  ${H2Base};
  color: ${colors.black};
`

export const H2Orange = css`
  ${H2Base};
  color: ${colors.colorSecondary};
`

// Headline Styles #3 //
export const H3Base = css`
  ${fontSizer(2.4, 3.0, 76.8, 150, 2.2)}
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
`

export const H3Black = css`
  ${H3Base};
  color: ${colors.black};
`

export const H3White = css`
  ${H3Base};
  color: ${colors.white};
`

export const H3Orange = css`
  ${H3Base};
  color: ${colors.colorSecondary};
`

// Headline Styles #4 //
export const H4Base = css`
  ${fontSizer(2.2, 2.5, 76.8, 160, 2)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
`

export const H4Black = css`
  ${H4Base};
  color: ${colors.black};
`

export const H4White = css`
  ${H4Base};
  color: ${colors.white};
`

// Headline Styles #5 //
export const HCalloutBase = css`
  ${fontSizer(2.4, 3.4, 76.8, 160, 2.2)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
`
// Headline Styles #6 //
export const HIntroBase = css`
  ${fontSizer(2, 2.5, 76.8, 160, 2)};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
`

export const IntroBlack = css`
  ${HIntroBase};
  color: ${colors.black};
`

export const IntroWhite = css`
  ${HIntroBase};
  color: ${colors.white};
`

export const IntroOrange = css`
  ${HIntroBase};
  color: ${colors.colorSecondary};
`
