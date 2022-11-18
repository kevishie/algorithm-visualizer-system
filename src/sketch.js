import React from "react";
import Sketch from "react-p5";
import App from './App';
import { styled } from '@mui/material/styles';
//import AlgosImport, { Algos } from './Algorithms/algos'
import PersistentDrawerLeft from "./sidedrawer";



export default (props) => {
    let frames = [];
    let lastFrame = 0;
    let values = [];
    let i = 0;
    let j = 0;
    let k = 255;
    let frame = 0;
    let algos;
    
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
        //console.log(frames[f]);
        if(f === frame){
            return tempValues;
        }
        f++;
        
    }
}
	const setup = (p5, App) => {
        
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)

        //width is window width minus (drawer width + editor width)
		p5.createCanvas(p5.windowWidth-(795), 500).parent(App);
        p5.background(25);
        //console.log(PersistentDrawerLeft.);
        p5.frameRate(15);

        generateRandomArray(p5);
        frame = 0;

        //algos = new Algos(1, values, frames);
        selectionSort(values);
        //frames = algos._frames;
        //console.log(frames[139]);
	};

    const generateRandomArray = (p5) => {
        for(let i = 0; i < p5.width/8; i++){
            values.push(p5.random(p5.height));
            }
    };

    const drawArray = (p5) => {
        p5.background(25);
        let thisFrame = selectionSort(frame);
        if(thisFrame === -1){
            thisFrame = selectionSort(frame-2);
        }
       console.log(thisFrame);

        frame++;
        for(let i = 0; i< thisFrame.length; i++){
            p5.stroke("0");
            p5.fill(k);
            k += 10;
            p5.rect(i*8 , p5.height, 8, -thisFrame[i]);
            }

    };

    const draw = (p5) => {
        if(frames != values.length) drawArray(p5);

    };

	return <Sketch setup={setup} draw={draw} />;
};