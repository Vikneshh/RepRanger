import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        {/* Watch name exercise videos is generated below */}
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
      >
        {/* Choosing only 3 videos to be showcased here */}
        {exerciseVideos?.slice(0, 4)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            //rel="noreferrer" is recommended practice when using the  target blank IMPORTANT
          >
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                fontWeight={600}
                color="#000"
              >
                {item.video.title}
                {/* Title of tat particular utube video */}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
                {/* Creator of video */}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
