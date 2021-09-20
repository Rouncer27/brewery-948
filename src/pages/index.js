import * as React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import {
  H1Black,
  H1White,
  H2Black,
  H2White,
  H2Orange,
  H3Black,
  H3Orange,
  H3White,
  IntroOrange,
  IntroWhite,
  IntroBlack,
  B1Black,
  B1White,
  standardWrapper,
  Nav1Black,
} from "../styles/helpers"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Typography>
      <div className="wrapper">
        <p className="h1">Aliquam tincidunt mauris eu risus.</p>
        <p className="h1-white">Aliquam tincidunt mauris eu risus.</p>
        <p className="h2">Aliquam tincidunt mauris eu risus.</p>
        <p className="h2-white">Aliquam tincidunt mauris eu risus.</p>
        <p className="h2-orange">Aliquam tincidunt mauris eu risus.</p>
        <p className="h3">Aliquam tincidunt mauris eu risus.</p>
        <p className="h3-white">Aliquam tincidunt mauris eu risus.</p>
        <p className="h3-orange">Aliquam tincidunt mauris eu risus.</p>
        <p className="intro">Aliquam tincidunt mauris eu risus.</p>
        <p className="intro-white">Aliquam tincidunt mauris eu risus.</p>
        <p className="intro-orange">Aliquam tincidunt mauris eu risus.</p>

        <p className="p">
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
          lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
          sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
          dapibus sed, urna.
        </p>
        <p className="p-white">
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
          lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
          sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
          dapibus sed, urna.
        </p>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>contact</li>
          <li>services</li>
        </ul>
      </div>
    </Typography>
  </Layout>
)

const Typography = styled.div`
  .wrapper {
    ${standardWrapper};
  }
  ul {
    li {
      ${Nav1Black};
    }
  }

  p {
    width: 100%;
    padding: 2rem;
  }

  .p {
    ${B1Black};
  }

  .p-white {
    ${B1White};
    background: black;
  }

  .h1 {
    ${H1Black};
  }

  .h1-white {
    ${H1White};
    background: black;
  }

  .h2 {
    ${H2Black};
  }

  .h2-white {
    ${H2White};
    background: black;
  }

  .h2-orange {
    ${H2Orange};
  }

  .h3 {
    ${H3Black};
  }

  .h3-white {
    ${H3White};
    background: black;
  }

  .h3-orange {
    ${H3Orange};
  }

  .intro {
    ${IntroBlack};
  }

  .intro-white {
    ${IntroWhite};
    background: black;
  }

  .intro-orange {
    ${IntroOrange};
  }
`
export default IndexPage
