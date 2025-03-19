import { Box, Button } from "@mui/material";
import theme from "../../../theme/Theme";

interface SingleButtonProps {
  text: string;
  style?: "main" | "light";
}

export default function SolidButton({
  text,
  style = "main",
}: SingleButtonProps) {
  const { backgroundColor, color } = {
    backgroundColor:
      style === "main"
        ? theme.palette.primary.main
        : theme.palette.primary.light,
    color: style === "light" ? theme.palette.primary.main : "white",
  };

  return (
    <Box>
      <Button
        id="solidButton"
        variant="outlined"
        sx={{
          marginRight: "1rem",
          my: "1rem",
          textAlign: "center",
          backgroundColor: backgroundColor,
          color: color,

          border: `3px solid ${theme.palette.primary.main}`,
          borderRadius: 3,
          textTransform: "none",
          fontSize: "1rem",
          fontWeight: "500",
          lineHeight: "normal",
          // Puedes añadir más valores en sx si los necesitas
        }}
      >
        {text}
      </Button>
    </Box>
  );
}
