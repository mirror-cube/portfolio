let rects = []; 
let numRects = 5; 
let rectWidth = 50;
let rectHeight = 50;
let gravity = 0.1; 
let colors; 
let currentColors = []; 

function setup() {
    const canvasParent = document.getElementById('canvas-parent');
    const canvasWidth = canvasParent.offsetWidth;
    const sketchCanvas = createCanvas(canvasWidth, 450);
    sketchCanvas.parent('canvas-parent');
    

    for (let i = 0; i < numRects; i++) {
        rects.push({
            x: random(width),
            y: random(-500, -50), 
            velocity: 0,
            color: random(colors),
            hasBounced: false 
        });
    }

    colors = ['red', 'blue', 'green', 'white', 'yellow', 'orange'];

    for (let i = 0; i < numRects; i++) {
        currentColors.push(random(colors));
    }
}

function draw() {
    background(220);
    
    for (let i = 0; i < numRects; i++) {
        //noStroke();
        stroke(0, 20);
        fill(currentColors[i]);
        rect(rects[i].x, rects[i].y, rectWidth, rectHeight);
        
        
        rects[i].velocity += gravity;
        
        rects[i].y += rects[i].velocity;
        
        
        if (rects[i].y + rectHeight > height && !rects[i].hasBounced) {
            rects[i].velocity *= -0.6; 
            rects[i].hasBounced = true; 
            rects[i].y = height - rectHeight;

        }else if(rects[i].y > height && rects[i].hasBounced){
            rects[i].y = random(-500, -50); 
            rects[i].x = random(width); 
            currentColors[i] = random(colors);
            rects[i].hasBounced = false;
        }
    }
}
