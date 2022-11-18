import { React, useRef, useState, useLayoutEffect } from "react";
import AceEditor from "react-ace";
import classes from "./styles";
import PersistentDrawerLeft from "./sidedrawer";
import Sketch1 from "./sketch";
import Sketch2 from "./Algorithms/algos";


import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import {
  Box,
  Paper,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Drawer,
  styled,
  useTheme,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  
} from "@mui/material";
import { Margin } from "@mui/icons-material";
import { ThemeProvider, createTheme } from '@mui/material/styles';


function onChange(newValue) {
  console.log("change", newValue);
}
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
const App = () => {
    const editorRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
  
    useLayoutEffect(() => {
      setWidth(editorRef.current.offsetWidth);
      setHeight(editorRef.current.offsetHeight);
    }, []);
  return (
    <>
        <ThemeProvider theme={darkTheme}>

      <CssBaseline />
        <PersistentDrawerLeft/>
      <main>
        <div style={classes.root}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Sketch1 style={classes.canvas}/>
              </Grid>
              <Grid item xs={4}>
                <Paper >
                  <AceEditor 
                   ref={editorRef}
                    mode="javascript"
                    theme="monokai"
                    onChange={onChange}
                    height='500px'
                    width='98%'
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                      enableBasicAutocompletion: true,
                      enableLiveAutocompletion: true,
                      enableSnippets: true,
                    }}
                  />

                </Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper> </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper style={classes.runtime}> Runtime </Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper> </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper style={classes.algoinfo} > Algorithm info </Paper>
              </Grid>
            </Grid>
          </Box>
        </div>
      </main>
      </ThemeProvider>
    </>
  );
};

export default App;
