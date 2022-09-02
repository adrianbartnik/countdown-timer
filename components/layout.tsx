import { Spacer, styled } from "@nextui-org/react"
import { ReactNode } from "react";

const Box = styled("div", {
  boxSizing: "border-box",
});

interface Props {
    children?: ReactNode
}

export const Layout = ({ children }: Props) => (
  <Box
    css={{
      maxW: "100%",
      position: "relative",
      overflow: "visible scroll",
    }}
  >
    {children}
    <Spacer y={1} />

  </Box>
);
