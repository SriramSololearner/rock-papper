import { Box, Stack, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { DarkMode, LightMode, Loop } from "@mui/icons-material";
import {
  equalPoints,
  handlerPlayer1Score,
  handlerPlayer2Score,
  player1Choices,
  player2Choices,
} from "../redux/reducers/slice";
import Rock from "../assets/rock.png";
import Paper from "../assets/paper.png";
import Scissor from "../assets/scissor.png";
import questionMark from "../assets/question1.png";
import { handlerAdd, handlerReset } from "../redux/reducers/slice";
import { useState } from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#e7e5e4",
      paper: "#fff",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1b1b1f",
    },
  },
});
const LandingPage = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  const dispatch = useDispatch();
  const { player1Win, player2Win, equal, round, player1Data, player2Data } =
    useSelector((state: RootState) => state.rock);
  const [booleanValue, setBooleanValue] = useState(false);
  const handlerClick = (player1: string, choice: string) => {
    setBooleanValue(true);

    const timerId = setTimeout(() => {
      setBooleanValue(false);
      const player2 =
        player2Choices[Math.floor(Math.random() * player2Choices.length)];
      const playerChoice1 = choice;
      const playerChoice2 = player2.name;
      if (playerChoice1 === playerChoice2) {
        dispatch(equalPoints());
      } else if (
        (playerChoice1 === "rock" && playerChoice2 === "scissors") ||
        (playerChoice1 === "paper" && playerChoice2 === "rock") ||
        (playerChoice1 === "scissors" && playerChoice2 === "paper")
      ) {
        dispatch(handlerPlayer1Score());
      } else if (
        (playerChoice1 === "rock" && playerChoice2 === "paper") ||
        (playerChoice1 === "scissors" && playerChoice2 === "rock") ||
        (playerChoice1 === "paper" && playerChoice2 === "scissors")
      ) {
        dispatch(handlerPlayer2Score());
      }
      dispatch(handlerAdd({ player1, player2 }));
    }, 1000);

    return () => clearTimeout(timerId);
  };

  const handleReset = () => {
    dispatch(handlerReset());
  };

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Box sx={styles.root}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={styles.headerContainer}
        >
          <Box sx={styles.loopIconBox} onClick={handleReset}>
            <Loop sx={styles.loopIcon} />
          </Box>
          <Stack
            direction={"column"}
            gap={2}
            sx={styles.headerContainer_scoreBoardContainer}
          >
            <Stack
              direction={"row"}
              gap={14}
              sx={styles.headerContainer_scoreBoardContainer_innerContainer}
            >
              <Box sx={styles.scoreBox}>
                <Box sx={styles.scoreBox_header}>Win</Box>
                <Box
                  sx={
                    player1Win > player2Win
                      ? { ...styles.scoreBox_body_player1, color: "green" }
                      : player1Win < player2Win
                      ? { ...styles.scoreBox_body_player1, color: "red" }
                      : { ...styles.scoreBox_body_player1 }
                  }
                >
                  {player1Win}
                </Box>
              </Box>
              <Box sx={styles.scoreBox}>
                <Box sx={styles.scoreBox_header}>Equal</Box>
                <Box sx={styles.scoreBox_Equal}>{equal}</Box>
              </Box>
              <Box sx={styles.scoreBox}>
                <Box sx={styles.scoreBox_header}>Win</Box>
                <Box
                  sx={
                    player1Win < player2Win
                      ? { ...styles.scoreBox_body_player1, color: "green" }
                      : player1Win > player2Win
                      ? { ...styles.scoreBox_body_player1, color: "red" }
                      : { ...styles.scoreBox_body_player1 }
                  }
                >
                  {player2Win}
                </Box>
              </Box>
            </Stack>
            <Stack>
              <Box sx={styles.roound}>Round</Box>
              <Box sx={styles.scoreBox_round}> {round}</Box>
            </Stack>
          </Stack>
          <Box sx={styles.modeContainer} onClick={toggleMode}>
            {mode === "light" && <LightMode sx={styles.loopIcon} />}
            {mode === "dark" && <DarkMode sx={styles.loopIcon} />}
          </Box>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"cenetr"}
          justifyContent={"space-between"}
          sx={styles.handImgContainer}
        >
          <Box>
            {booleanValue ? (
              <Box component={"img"} src={questionMark} alt="not-available" />
            ) : (
              <Box
                component={"img"}
                src={player1Data === "" ? player1Choices[0] : player1Data}
                alt="player1"
                sx={styles.handImg}
              />
            )}
          </Box>
          <Box>
            {booleanValue ? (
              <Box component={"img"} src={questionMark} alt="not-availabale" />
            ) : (
              <Box
                component={"img"}
                src={player2Data === "" ? player2Choices[0].image : player2Data}
                alt="player2"
                sx={styles.handImg}
              />
            )}
          </Box>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={5}
          justifyContent={"center"}
          sx={styles.actionsContainer}
        >
          <Box
            component={"img"}
            src={Rock}
            alt="no-image"
            sx={styles.actionsContainerImg}
            onClick={() => handlerClick(player1Choices[0], "rock")}
          />
          <Box
            component={"img"}
            src={Paper}
            alt="no-image"
            sx={styles.actionsContainerImg}
            onClick={() => handlerClick(player1Choices[1], "paper")}
          />
          <Box
            component={"img"}
            src={Scissor}
            alt="no-image"
            sx={styles.actionsContainerImg}
            onClick={() => handlerClick(player1Choices[2], "scissors")}
          />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
