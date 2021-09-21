import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"
import fonts from "./fonts"

const Btn1Base = css`
  ${fontSizer(1.4, 1.6, 76.8, 150, 1.8)};
  display: inline-block;
  padding: 1rem 3rem;
  border: none;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: center;
  text-transform: uppercase;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Btn1Orange = css`
  ${Btn1Base};
  background: transparent;
  border: solid 0.4rem ${colors.colorSecondary};
  color: ${colors.colorSecondary};
  font-weight: bold;

  &:hover {
    border-color: ${colors.colorSecondary};
    background: ${colors.colorSecondary};
    color: ${colors.white};
  }

  &:focus {
    outline: 0.4rem solid #003b49;
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    &:hover {
      background: ${colors.colorTertiary};
      color: ${colors.colorPrimary};
    }
  }
`

export const Btn1GreyBlue = css`
  ${Btn1Base};
  background: ${colors.colorTertiary};
  border: solid 0.2rem ${colors.colorTertiary};
  color: ${colors.white};

  &:hover {
    border-color: ${colors.colorSecondary};
    background: ${colors.colorSecondary};
    color: ${colors.white};
  }

  &:focus {
    outline: 0.4rem solid #003b49;
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    &:hover {
      background: ${colors.colorTertiary};
      color: ${colors.colorPrimary};
    }
  }
`

export const Btn1Grey = css`
  ${Btn1Base};
  background: ${colors.colorAccent};
  border: solid 0.2rem ${colors.colorAccent};
  color: ${colors.white};

  &:hover {
    background: ${colors.colorPrimary};
    border-color: ${colors.colorPrimary};
    color: ${colors.white};
  }

  &:focus {
    outline: 0.4rem solid #003b49;
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    &:hover {
      background: ${colors.colorTertiary};
      color: ${colors.colorPrimary};
    }
  }
`
