import * as React from "react";
import Container from "@mui/material/Container";
import { atom, useRecoilState } from "recoil";
import { Box, Button } from "@mui/material";
import { colors } from "../src/colors";
import { syncEffect } from "recoil-sync";
import { string } from "@recoiljs/refine";

const colorState = atom({
  key: "colorState",
  default: "",
  effects: [syncEffect({ refine: string() })]
});

export default function Home() {
  const [selectedColor, setSelectedColor] = useRecoilState(colorState);

  return (
    <Container maxWidth="lg">
      <Box>
        {colors.map((color) => (
          <Button
            key={color}
            onClick={() => setSelectedColor(color)}
            style={{ background: color, marginRight: 20 }}
          >
            {color}
          </Button>
        ))}
      </Box>

      <Box bgcolor={selectedColor} width="100%" height="400px" mt={5} />
    </Container>
  );
}
