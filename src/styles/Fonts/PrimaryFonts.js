import * as primary from "./primary"
import { css } from "styled-components"

const PrimaryFonts = css`
  @font-face {
    font-family: "Georama";
    font-style: normal;
    font-weight: 400;
    src: local(""), url("${primary.WOFF2_4}") format("woff2"),
      url("${primary.WOFF_4}") format("woff");
  }

  @font-face {
    font-family: "Georama";
    font-style: italic;
    font-weight: 400;
    src: local(""), url("${primary.WOFF2_4I}") format("woff2"),
      url("${primary.WOFF_4I}") format("woff");
  }

  @font-face {
    font-family: "Georama";
    font-style: normal;
    font-weight: 500;
    src: local(""), url("${primary.WOFF2_5}") format("woff2"),
      url("${primary.WOFF_5}") format("woff");
  }

  @font-face {
    font-family: "Georama";
    font-style: italic;
    font-weight: 500;
    src: local(""), url("${primary.WOFF2_5I}") format("woff2"),
      url("${primary.WOFF_5I}") format("woff");
  }

  @font-face {
    font-family: "Georama";
    font-style: normal;
    font-weight: 600;
    src: local(""), url("${primary.WOFF2_6}") format("woff2"),
      url("${primary.WOFF_6}") format("woff");
  }

  @font-face {
    font-family: "Georama";
    font-style: italic;
    font-weight: 600;
    src: local(""), url("${primary.WOFF2_6I}") format("woff2"),
      url("${primary.WOFF_6I}") format("woff");
  }

  @font-face {
    font-family: "Georama";
    font-style: normal;
    font-weight: 800;
    src: local(""), url("${primary.WOFF2_8}") format("woff2"),
      url("${primary.WOFF_8}") format("woff");
  }

  @font-face {
    font-family: "Georama";
    font-style: italic;
    font-weight: 800;
    src: local(""), url("${primary.WOFF2_8I}") format("woff2"),
      url("${primary.WOFF_8I}") format("woff");
  }
`

export default PrimaryFonts
