import React from "react";
import Sketch from "react-p5";
import { runAlgorithm } from "./runAlgo";

let frames = [];
let values = [];
let k = 255;
let frame = 0;
let oldSelection;
let lastPressed = "";
const drawArray = (p5, b) => {
  let thisFrame;
  p5.background(25);
  if (frame !== frames.length && typeof frames[frame] !== 'undefined' && b !== "=") {    
    thisFrame = frames[frame];
    frame++;
  } else {
    thisFrame = frames[frame - 1];
  }
  for (let i = 0; i < frames.length; i++) {
    p5.stroke("0");
    p5.fill(k);
    k += 10;
    p5.rect(i * 8, p5.height, 8, -thisFrame[i]);
  }
};

const generateRandomArray = (p5, selection) => {
  frame = 0;
  values = [];
  for (let i = 0; i < p5.width / 8; i++) {
    values.push(p5.random(p5.height));
  }
  frames = runAlgorithm(selection, values);
};

export default (props) => {
  let selection = props.selection;
  let fr = props.framerate;
  let b = props.button;
  const setup = (p5, App) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)

    //width is window width minus (drawer width + editor width)
    p5.createCanvas(p5.windowWidth - 795, 500).parent(App);
    p5.background(25);
    p5.frameRate(25);
  };
  const draw = (p5) => {
    p5.resizeCanvas(p5.windowWidth * 0.59, p5.windowHeight * 0.6);

    if (selection !== oldSelection) {
      console.log(selection, " ", oldSelection);
      p5.setup();
      generateRandomArray(p5, selection);
      oldSelection = selection;

    }
    if(b !== lastPressed){
      switch(b){
        case "=":
          drawArray(p5, b);
        case ">>":
          frames = frames.reverse();
          frame = frames.length - frame;
          drawArray(p5, b);
    
        case "<<":
          frames = frames.reverse();
          frame = frames.length - frame;
          drawArray(p5, b);
    
        case ">":
          drawArray(p5);
    
      }
      lastPressed = b;
    }
    console.log(b);
        drawArray(p5, b);
    p5.frameRate(fr);
  };

  return <Sketch setup={setup} draw={draw} />;
};
