import {useState} from "react";
import {Box} from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
const Home = () => {
  // We are keepig this exercises in the home bcoz this changes are gonna be applied to the whole page and not only to one component.
  const[bodyPart,setBodyPart]=useState("all");
  const[exercises,setExercises]=useState([]);
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises  exercises={exercises} setExercises={setExercises}  bodyPart={bodyPart} />
      {/* can be donw with react context but it is only two components so go with the flow  */}
    </Box>
  )
}

export default Home