import {
  Flex,
  Button,
  Divider,
  Grid,
  SegmentedControl,
  Switch,
  MediaQuery,
} from "@mantine/core";

import { useState } from "react";
import { ButtonVariant } from "./ButtonVariant";
export default function BaiLam2() {
  const [value, setValue] = useState<string>("outline");
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <>
      <Flex direction="column">
        <MediaQuery
          largerThan="md"
          styles={{ paddingLeft: "72px", paddingRight: "150px" }}
        >
          <Grid justify="center" w="100%" pb={25} mt={24}>
            <Grid.Col lg={9} sm={9}>
              <SegmentedControl
                value={value}
                color="pink.8"
                style={{ flexWrap: "wrap" }}
                onChange={setValue}
                data={[
                  { label: "Ouline", value: "outline" },
                  { label: "Light", value: "light" },
                  { label: "Filled", value: "filled" },
                  { label: "Subtle", value: "subtle" },
                  { label: "Default", value: "default" },
                ]}
              />
            </Grid.Col>
                
            <Grid.Col lg={3} sm={3} mt={20} w="100%">
              <Flex justify="center">
                <Switch
                  checked={checked}
                  onChange={(event) => setChecked(event.currentTarget.checked)}
                  label="Disabled"
                />
              </Flex>
            </Grid.Col>
          </Grid>
        </MediaQuery>
        <Divider size="xs" w="100%" />
        <Flex justify="center" w="100%">
          <ButtonVariant checked={checked} style={value} />
        </Flex>
      </Flex>
    </>
  );
}
