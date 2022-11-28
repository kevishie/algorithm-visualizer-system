import { React, useRef, useState, useLayoutEffect } from "react";
import AceEditor from "react-ace";
import classes from "./styles";
import PersistentDrawerLeft from "./sidedrawer";
import Sketch1 from "./sketch";
import Sketch from "./primSketch";
import { information, runtime } from "./info";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { Box, Paper, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';

function onChange(newValue) {
  console.log("change", newValue);
}
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const editorRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [value, setValue] = useState();
  const [data, setData] = useState("");
  const [clicked, setClicked] = useState();
  const handleButton = (clicked) => {
    setClicked(clicked);
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const selectAlgo = (algo) => {
    setData(algo);
  };
  useLayoutEffect(() => {
    setWidth(editorRef.current.offsetWidth);
    setHeight(editorRef.current.offsetHeight);
  }, []);
  console.log(clicked);
  let stuff = "placeholder";
  let sketch;
  if(data[0] === "primsAlgorithm"){
  sketch = <Sketch style={classes.canvas} framerate={value}/>;
  }else{
    //stuff = data[0]+'.js?raw';
    stuff = data[1];
    sketch = <Sketch1 style={classes.canvas} selection={data[0]} framerate={value} button = {clicked} />;

  }
  console.log('Algorithms/'+data[0]+'.js');
  let test = window.fetch('/src/Algorithms/'+data[0]+'.js')
  .then(response => response.text())
  .then(text => console.log(text));
  // outputs the content of the text file

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <PersistentDrawerLeft selectAlgo={selectAlgo} />
        <main>
          <div style={classes.root}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs={8}>
                  {sketch}
                </Grid>
                <Grid item xs={4}>
                  <Paper>
                    <AceEditor
                      ref={editorRef}
                      mode="javascript"
                      theme="monokai"
                      onChange={onChange}
                      value={String(test)}
                      height="560px"
                      width="98%"
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
                  <Paper> Framerate<Slider defaultValue={0} value={value} aria-label="Default" valueLabelDisplay="auto"  onChange={handleChange}/> 
                  <Paper> <FastRewindIcon onClick={() => setClicked("<<")}></FastRewindIcon><PlayArrowIcon onClick={() => setClicked(">")}></PlayArrowIcon><PauseIcon onClick={() => setClicked("=")}></PauseIcon><FastForwardIcon onClick={() => setClicked(">>")}></FastForwardIcon></Paper>

                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper style={classes.runtime}> {runtime(data[1])} </Paper>
                </Grid>
                <Grid item xs={8}>
                  <Paper></Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper style={classes.algoinfo}> {information(data[1])}</Paper>
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
