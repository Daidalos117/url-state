import * as React from "react";
import Container from "@mui/material/Container";
import { atom, useRecoilState } from "recoil";
import { Box, Button } from "@mui/material";
import { colors } from "../src/colors";
import { syncEffect } from "recoil-sync";
import { string } from "@recoiljs/refine";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const onButtonClick = async (color: string) => {
    await router.push({
      query: { ...router.query, color }
    });
  };

  return (
    <Container maxWidth="lg">
      <Box>
        {colors.map((color) => (
          <Button
            key={color}
            onClick={() => onButtonClick(color)}
            style={{ background: color, marginRight: 20 }}
          >
            {color}
          </Button>
        ))}
      </Box>

      <Box bgcolor={router.query.color} width="100%" height="400px" mt={5} />
    </Container>
  );
}
