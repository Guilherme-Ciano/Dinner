import { Button, Text } from "@geist-ui/core";
import { Wrapper } from "./styles";

export default function Navbar() {
  return (
    <Wrapper>
      <Text h3 b>
        Dinner
      </Text>

      <Button placeholder={"button"} shadow type="secondary" scale={2 / 3}>
        Logout
      </Button>
    </Wrapper>
  );
}
