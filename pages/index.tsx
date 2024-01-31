import Container from "../src/components/Container/Container";
import { FlexContainer, FlexItem } from "../src/components/Flexbox";

export default function Home() {
  return (
    <Container style={{ height: "100vh" }}>
      <FlexContainer
        $justifyContent="center"
        $alignItems="center"
        style={{ height: "100%" }}
      >
        <FlexItem>
          <h1 style={{ marginBottom: "20px" }}>Welcome to React Flexbox</h1>
          <p style={{ textAlign: "center" }}>
            For instructions see README.md file
          </p>
        </FlexItem>
      </FlexContainer>
    </Container>
  );
}
