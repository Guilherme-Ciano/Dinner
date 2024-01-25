import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;

  justify-content: space-between;
  align-items: center;

  gap: 4rem;
`;

export const Column = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  text-align: left;
`;

export const Filters = styled.div`
  width: 1fr;
  display: flex;

  align-items: center;

  gap: 1rem;
`;
