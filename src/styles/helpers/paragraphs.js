import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"

// Body copy ONE //
export const B1Base = css`
  ${fontSizer(1.6, 2.1, 76.8, 150, 1.8)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: normal;
`

export const B1Black = css`
  ${B1Base};
  color: ${colors.black};
`

export const B1White = css`
  ${B1Base};
  color: ${colors.white};
`

// Body copy TWO //
export const B2Base = css`
  ${fontSizer(1.4, 1.6, 76.8, 150, 1.4)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
`

export const B2Black = css`
  ${B2Base};
  color: ${colors.black};
`

export const B2White = css`
  ${B2Base};
  color: ${colors.white};
`
