import { Divider, Text } from "@geist-ui/core";
import { Column, Wrapper } from "../styles";
import Informations from "../informations";
import ClientTable from "../table";

export default function HomepagePage() {
  return (
    <Wrapper>
      <Column>
        <Text
          h1
          style={{
            margin: "0",
          }}
        >
          Homepage
        </Text>
        <Text
          small
          style={{
            fontWeight: "200",
          }}
        >
          All informations about your business
        </Text>
        <Divider />
      </Column>

      <Column>
        <Informations />
      </Column>

      <Column>
        <ClientTable />
      </Column>
    </Wrapper>
  );
}
