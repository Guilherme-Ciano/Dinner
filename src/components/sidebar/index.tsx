import { Collapse } from "@geist-ui/core";
import { LinkCustomized, Wrapper } from "./style";

const Sidebar = () => {
  return (
    <Wrapper>
      <Collapse.Group>
        <Collapse initialVisible title="Routes">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <LinkCustomized placeholder={"link"} href="/orders">
              Orders
            </LinkCustomized>

            <LinkCustomized placeholder={"link"} href="/dashboard">
              Dashboard
            </LinkCustomized>
          </div>
        </Collapse>
      </Collapse.Group>

      <Collapse.Group>
        <Collapse initialVisible title="Configurations">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <LinkCustomized placeholder={"link"} href="/profile">
              Profile
            </LinkCustomized>

            <LinkCustomized placeholder={"link"} href="/access">
              Access
            </LinkCustomized>
          </div>
        </Collapse>
      </Collapse.Group>
    </Wrapper>
  );
};

export default Sidebar;
