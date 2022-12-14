import { Box } from "@mui/material";
import { MovieAutocomplete, Navbar } from "../components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Box padding="32px">
        <MovieAutocomplete />
      </Box>
    </div>
  );
}
