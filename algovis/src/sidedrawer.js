import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";
import { selectionSort } from "./Algorithms/selectionSort";
import { bubblesort } from "./Algorithms/bubblesort";
import { insertionSort } from "./Algorithms/insertionsort";
import { oddevensort } from "./Algorithms/oddevensort";
import { quickSort } from "./Algorithms/quicksort";
import { bogoSort } from "./Algorithms/bogosort";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
let selection;

const sendData = () => {
  this.props.parentCallback(selection);
};

function CustomizedAccordions({ childToParent }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Sorting Algorithms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={() => childToParent(["selectionSort", selectionSort])}
            >
              <ListItemText primary="Selection Sort" />
            </ListItemButton>
            <ListItemButton
              onClick={() => childToParent(["bubblesort", bubblesort])}
            >
              <ListItemText primary="Bubble Sort" />
            </ListItemButton>
            <ListItemButton
              onClick={() => childToParent(["insertionSort", insertionSort])}
            >
              <ListItemText primary="Insertion Sort" />
            </ListItemButton>
            <ListItemButton
              onClick={() => childToParent(["oddevensort", oddevensort])}
            >
              <ListItemText primary="Odd even sort" />
            </ListItemButton>
            <ListItemButton
              onClick={() => childToParent(["quickSort", quickSort])}
            >
              <ListItemText primary="Quicksort" />
            </ListItemButton>
            <ListItemButton
              onClick={() => childToParent(["bogoSort", bogoSort])}
            >
              <ListItemText primary="Bogo sort" />
            </ListItemButton>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Graph Algorithms</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItemButton
              onClick={() => childToParent(["primsAlgorithm"])}

          >
            <ListItemText primary="Prim's Algorithm" />
          </ListItemButton>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}

const Main = styled("main")(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(1),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));
const drawerWidth = 210;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "left",
  position: "relative",
  padding: theme.spacing(1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft({ selectAlgo }) {
  const [data, setData] = useState("");

  const childToParent = (childdata) => {
    setData(childdata);
    selectAlgo(childdata);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Algorithm Visualizer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <DrawerHeader>
          <TextField
            id="standard-basic"
            label="Search library"
            variant="standard"
          />
        </DrawerHeader>
        <Divider />
        <CustomizedAccordions childToParent={childToParent} />
        <Divider />
      </Drawer>
      <Main>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
