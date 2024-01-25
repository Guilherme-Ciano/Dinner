import { Link } from "@geist-ui/core";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  width: 11rem;

  border-right: 1px solid #eaeaea;

  & .title h3 {
    font-size: 1rem !important;
  }
`;

export const LinkCustomized = styled(Link)`
  cursor: pointer;
  font-size: 0.8rem !important;
  text-align: left !important;
  width: 100% !important;
  padding-left: 1rem !important;
`;
