import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CheckBox } from "@mui/icons-material";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          square
          sx={{ padding: "100px 20px 20px 20px" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Avatar sx={{ bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>

            <Box
              component="form"
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 1,
                mb: 1,
                gap: "25px 0",
                width: "100%",
              }}
            >
              <TextField
                required
                fullWidth
                id="email"
                label="email address"
                name="email"
                autoFocus
                autoComplete="email"
              />
              <TextField
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoFocus
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<CheckBox value="remember" color="primary" />}
                label="Remember Me"
                sx={{ alignSelf: "flex-start" }}
              />
              <Button fullWidth type="submit" variant="contained">
                Sign In
              </Button>
              <Grid container justifyContent={"space-between"}>
                <Grid item>
                  <Link href="#" variant="body2">
                    Forgot Password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Don not have an account Sin Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Typography variant="body2" mt={1}>
              Copyright &copy; <Link href="#">Your Website</Link>{" "}
              {new Date().getFullYear()}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
