function createGrid(no_boxes){
    container.textContent = '';
    const box_width = CT_WIDTH/no_boxes;
    console.log(`${box_width}`);

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
    a_box.addEventListener('mousemove', (e)=>{
    a_box.classList.add('drew');

            
        })
    return a_box;
}

const container = document.querySelector('.container');
const container_style = window.getComputedStyle(container);
const CT_WIDTH = parseInt(container_style.getPropertyValue('width'));

createGrid(10);
var no_boxes = 10;


const bx_inpt = document.querySelector('.bx_inpt');
const bx_inpt_bt = document.querySelector('.bx_inpt_bt');

bx_inpt_bt.addEventListener('click', (e) =>{
    if(!(bx_inpt.value <= 100 && bx_inpt.value >= 0)) return;
    no_boxes = bx_inpt.value
    createGrid(no_boxes);
    bx_inpt.value = ``;
});

const erase = document.querySelector('.erase');
erase.addEventListener('click', () =>{
    createGrid(no_boxes);
});

