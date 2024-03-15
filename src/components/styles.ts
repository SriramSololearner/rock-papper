import { SxProps } from "@mui/material";

export const styles = {
    root: {
        width: "100%",
        height: "90vh",
        transition: "all 0.5s  ease-in-out",
    },
    headerContainer: {
        p: 2.5,
    },

    scoreBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "white",
        width: "90px",
        height: "7em",
        boxShadow: "0px 2px 5px grey",
    },
    scoreBox_header: {
        width: "100%",
        height: "30%",
        background: '#3f3f46',
        fontWeight: 500,
        fontSize: "1em",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    scoreBox_body_player1: {
        width: "100%",
        height: "70%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 400,
        fontSize: "4em",
        color: "#3b82f6"
    },
    scoreBox_body_player2: {
        width: "100%",
        height: "70%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 400,
        fontSize: "4em",
        color: "#3b82f6"
    },


    scoreBox_Equal: {
        width: "100%",
        height: "70%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 400,
        fontSize: "4em",
        color: 'black'
    },
    scoreBox_round: {
        fontWeight: 400,
        fontSize: "4em",
    },
    roound: {
        fontSize: "1.3em"
    },
    loopIconBox: {
        height: "100%",
        transform: "rotate(5deg)",
        background: "#52525b",
        borderRadius: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 1,
        alignSelf: { xs: 'flex-end', md: "flex-start" }
    },
    loopIcon: {
        fontSize: { xs: "1.5em", sm: "1.7em", md: "2em" },
        color: "white",
        cursor: "pointer",
        transition: "linear 0.5s all",
    },
    modeContainer: {
        background: "#52525b",
        borderRadius: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', p: 1,
        alignSelf: { xs: 'flex-end', md: "flex-start" },
        mt: { xs: 5, md: 0 },
    },

    headerContainer_scoreBoardContainer: {
        display: 'flex',
        flexDirection: "column",
        gap: { xs: 2, sm: 2, md: 5 },
    },
    headerContainer_scoreBoardContainer_innerContainer: {
        display: 'flex',
        gap: { xs: 2, sm: 2, md: 10, lg: 15 },
    },
    handImgContainer: {
        height: "20%"
    },
    handImg: {
        width: { xs: 160, sm: 220, md: 250, lg: 380 },
        mt: { xs: 5, md: 0 },
    },
    actionsContainer: {
        height: "37%"
    },
    actionsContainerImg: {
        width: { xs: "5em", sm: "6em", lg: "7em" }, height: { xs: "5em", sm: "6em", lg: "7em" },
        cursor: "pointer"
    },
} satisfies Record<string, SxProps>;