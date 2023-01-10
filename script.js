function createGrid(no_boxes){
    container.textContent = '';
    const box_width = CT_WIDTH/no_boxes;
    for(let i = 0; i< no_boxes; i++){
        const row = document.createElement('div');
        row.style.display = 'flex';

        for(let j = 0; j < no_boxes; j++){
            row.appendChild(createBox(box_width));
        }

        container.append(row);
    }
}

function createBox(box_width){
    const a_box = document.createElement('div');
    a_box.classList.add('box');
    a_box.style.width = `${box_width}px`;
    a_box.style.height = `${box_width}px`;

    return a_box;
}

function addColor(event){
    const a_box = event.target;
    if(document.querySelector('#rainbow').checked){
        color_usd = "#" + Math.floor(Math.random()* 256).toString(16).padStart(2,'0')
        + Math.floor(Math.random()* 256).toString(16).padStart(2,'0')
        + Math.floor(Math.random()* 256).toString(16).padStart(2,'0');
    }
    a_box.style['background-color'] = color_usd;
}

function clickAndMove(event){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((a_box) =>{
        a_box.addEventListener('mouseenter', addColor);
    });
}

function removeClickAndMove(event){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((a_box) =>{
        a_box.removeEventListener('mouseenter', addColor);
    });
}

const container = document.querySelector('.container');
const container_style = window.getComputedStyle(container);
const CT_WIDTH = parseInt(container_style.getPropertyValue('width'));

container.addEventListener('mousedown', clickAndMove);
container.addEventListener('mouseup', removeClickAndMove);
container.addEventListener('mouseleave', removeClickAndMove);

//global variables
var color_usd = document.querySelector('#color').value;
var no_boxes = 10;

createGrid(10);

//color input
const color_selection = document.querySelector('input[type="color"]');
color_selection.addEventListener("change", (event)=>{
    const color_button = document.querySelector('#color');
    color_button.value = `${event.target.value}`;
    if(color_button.checked) color_usd = color_button.value;
});

//radio buttons
const options = document.querySelectorAll('.hide_bx');
const color = document.querySelector('.color');
const eraser = document.querySelector('.eraser');

options.forEach((option)=>{
    option.addEventListener("change", (event)=>{
        color_usd = event.target.value;
    });
});


//clear Button
const clear_bt = document.querySelector('.clear');
clear_bt.addEventListener('click', () =>{
    createGrid(no_boxes);
});

//Submitting no of boxes
const bx_inpt = document.querySelector('.bx_inpt');
const bx_inpt_bt = document.querySelector('.bx_inpt_bt');

bx_inpt_bt.addEventListener('click', (e) =>{
    if(!(bx_inpt.value <= 100 && bx_inpt.value > 0)) return;
    no_boxes = bx_inpt.value
    createGrid(no_boxes);
    bx_inpt.value = ``;
});



