import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";



const ExerciseCard = ({ exercise }) => (
    // Each card is a link which points to a a certain id which we have routed in the App.js and it redirects there.
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    {/* Loading lazy will optimize the performance  */}
    <Stack direction="row">
      <Button
        sx={{
          ml: "21px",
          color: "#fff",
          background: "#FFA9A9",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {/* Mentioning bodypart involved */}
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: "21px",
          color: "#fff",
          background: "#FCC757",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {/* Mentioning bodypart involved */}

        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: "24px", xs: "20px" } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
        {/* Name of the Exercises */}
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
