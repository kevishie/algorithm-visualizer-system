import React from "react";
import Sketch from "react-p5";
import App from './App';
import { styled } from '@mui/material/styles';

import PersistentDrawerLeft from "./sidedrawer";
export default (props) => {

    
    var vertices = [];
	const setup = (p5, App) => {
        
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)

        //width is window width minus (drawer width + editor width)
		p5.createCanvas(p5.windowWidth-(795), 500).parent(App);

        for(var i = 0; i < 20; i++){
            var v = p5.createVector(p5.random(p5.width),p5.random(p5.height));
            vertices.push(v);
        }

	};
     const mousePressed = (p5) => {
        vertices.splice(0,1);
        var b = p5.createVector(p5.mouseX, p5.mouseY);
        vertices.push(b);
    };

    const draw = (p5) => {
        p5.background(50);
        var reached = [];
        var unreached = [];
        for(var i = 0; i < vertices.length; i++){
            unreached.push(vertices[i]);
        }

        reached.push(unreached[0]);
        unreached.splice(0,1);
        while(unreached.length > 0) {
            var record = 100000;
            var rIndex;
            var uIndex;
            for (var i = 0; i < reached.length; i++) {
                for (var j = 0; j < unreached.length; j++) {
                    var v1 = reached[i];
                    var v2 = unreached[j];
                    var d = p5.dist(v1.x, v1.y, v2.x, v2.y);
                    if (d < record) {
                        record = d;
                        rIndex = i;
                        uIndex = j;
                    }
                }
            }
            p5.stroke(255);
            p5.strokeWeight(2);
            p5.line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x, unreached[uIndex].y);
		    reached.push(unreached[uIndex]);
		    unreached.splice(uIndex, 1);
            for (var i = 0; i < vertices.length; i++) {
                p5.fill(255);
                p5.stroke(255);
                p5.ellipse(vertices[i].x, vertices[i].y, 16, 16);
            }
        }

    };

	return <Sketch setup={setup} draw={draw} mousePressed={mousePressed} />;
};