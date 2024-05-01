import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" sx={{ fontSize: { lg: "53px" }, xs: "48px" }}>
        RepRanger
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px" }, xs: "40px" }}
        mb="23px" mt="30px"
      >
        Sweat,Smile <br /> and Repeat.
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the Most Efficient Exercises.
      </Typography>

      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor:"#ff2625",p:"10px"}} className="hover-button">
        Explore Exercises
      </Button>
      {/* Here you can't able to custom set the color property da 
      Also we cant give bc and p without sx object */}
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>

      <img
        src={HeroBannerImage}
        alt="HeroBannerImage"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
