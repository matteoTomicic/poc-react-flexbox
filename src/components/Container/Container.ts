import styled from "styled-components";

const Container = styled.div`
  width: calc(100% - 24px);
  margin-left: auto;
  margin-right: auto;

  ${({ theme }) => theme.device.sm} {
    max-width: ${({ theme }) => theme.containerSizes.sm};
    width: 100%;
  }

  ${({ theme }) => theme.device.md} {
    max-width: ${({ theme }) => theme.containerSizes.md};
  }

  ${({ theme }) => theme.device.lg} {
    max-width: ${({ theme }) => theme.containerSizes.lg};
  }

  ${({ theme }) => theme.device.xl} {
    max-width: ${({ theme }) => theme.containerSizes.xl};
  }

  ${({ theme }) => theme.device.xxl} {
    max-width: ${({ theme }) => theme.containerSizes.xxl};
  }
`;

export default Container;
