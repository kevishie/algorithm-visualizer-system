import React from "react";
import Sketch from "react-p5";
import App from './App';
import { styled } from '@mui/material/styles';
import { selectionSort } from './Algorithms/selection-sort'

import PersistentDrawerLeft from "./sidedrawer";

let frames = [];
let lastFrame = 0;
let values = [];
let i = 0;
let j = 0;
let k = 255;
let frame = 0;
let algos;

/*
function selectionSort(frame) {
    let f = 0;
    let tempValues = [...values];
    if(frame === tempValues.length){
        return tempValues;
    }
    for (let i = 0; i < tempValues.length - 1; i++) {

        let minIndex = i;

        for (let j = i + 1; j < tempValues.length; j++) {
            if (tempValues[j] < tempValues[minIndex]) {
                minIndex = j;
            }
        }

        let tmp = tempValues[minIndex];
        tempValues[minIndex] = tempValues[i];
        tempValues[i] = tmp;

        frames.push(tempValues);
        if(f === frame){
            return tempValues;
        }
        f++;
        
    }
}
*/
export default (props) => {

    

	const setup = (p5, App) => {
        
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)

        //width is window width minus (drawer width + editor width)
		p5.createCanvas(p5.windowWidth-(795), 500).parent(App);
        p5.background(25);
        p5.frameRate(25);

        generateRandomArray(p5);
        frame = 0;

       frames = selectionSort(values);

	};

    const generateRandomArray = (p5) => {
        for(let i = 0; i < p5.width/8; i++){
            values.push(p5.random(p5.height));
            }
    };

    const drawArray = (p5) => {
        let thisFrame;
        p5.background(25);
        if(frame !== values.length){
            thisFrame = frames[frame];
            frame++;

        }
        else{
            thisFrame = frames[frame-2];

        }
       console.log(thisFrame);

        for(let i = 0; i< frames.length; i++){
            p5.stroke("0");
            p5.fill(k);
            k += 10;
            p5.rect(i*8 , p5.height, 8, -thisFrame[i]);
            }

    };

    const draw = (p5) => {
        drawArray(p5);

    };

	return <Sketch setup={setup} draw={draw} />;
};