import { React, useRef, useState, useLayoutEffect } from "react";
import AceEditor from "react-ace";
import classes from "./styles";
import PersistentDrawerLeft from "./sidedrawer";
import Sketch1 from "./sketch";
import { information, runtime } from "./info";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { Box, Paper, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

  const [data, setData] = useState("");

  const selectAlgo = (algo) => {
    setData(algo);
  };
  useLayoutEffect(() => {
    setWidth(editorRef.current.offsetWidth);
    setHeight(editorRef.current.offsetHeight);
  }, []);
  console.log(data);
  let stuff = data[1];
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
                  <Sketch1 style={classes.canvas} selection={data[0]} />
                </Grid>
                <Grid item xs={4}>
                  <Paper>
                    <AceEditor
                      ref={editorRef}
                      mode="javascript"
                      theme="monokai"
                      onChange={onChange}
                      value={String(stuff)}
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
                  <Paper> </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper style={classes.runtime}> {runtime(data[1])} </Paper>
                </Grid>
                <Grid item xs={8}>
                  <Paper> </Paper>
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
