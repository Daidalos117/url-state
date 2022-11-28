import * as React from "react";
import Container from "@mui/material/Container";
import { atom, useRecoilState } from "recoil";
import { Box, Button } from "@mui/material";
import { colors } from "../src/colors";
import { syncEffect } from "recoil-sync";
import { string, number } from "@recoiljs/refine";

const colorState = atom({
  key: "colorState",
  default: "",
  effects: [syncEffect({ refine: string() })]
});

const sizeState = atom({
  key: "sizeState",
  default: 0,
  effects: [syncEffect({ refine: number() })]
});

export default function Recoil2() {
  const [selectedColor, setSelectedColor] = useRecoilState(colorState);
  const [size, setSize] = useRecoilState(sizeState);

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
      <Box>
        {[...Array(10).keys()].map((number) => (
          <Button
            key={number}
            onClick={() => setSize(number * 100)}
            variant="contained"
            style={{ marginRight: 20 }}
          >
            {number * 100}
          </Button>
        ))}
      </Box>

      <Box
        bgcolor={selectedColor}
        width={size}
        height={size}
        mt={5}
        style={{ transition: ".2s all" }}
      />
    </Container>
  );
}
