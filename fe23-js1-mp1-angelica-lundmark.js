let ulEl = document.createElement('ul');
ulEl.style.listStyle = 'none';
ulEl.style.margin = '0';
ulEl.style.padding = '0';
document.body.appendChild(ulEl);

var colors = ['#B0FFB0', '#00FF80', 'orange', 'brown', 'black'];

for (let i = 0; i < 5; i++) {
document.body.style.maxWidth = '50%';
document.body.style.margin = 'auto';

let li = document.createElement('li');
li.style.backgroundColor = `rgb(0,${200-i*3}, ${100+i*30})`;
li.innerText = `rad ${i+1}`;
li.style.textAlign = 'center';
li.style.fontSize = `${(i + 1)*15}px`;
li.style.marginTop = `${(i + 1)*6}px`;
li.style.color = 'white';
ulEl.appendChild (li);
}

let box = document.createElement('div');
document.body.appendChild(box);
box.style.border = 'solid black 2px';
box.style.marginTop = '30px';
box.style.display = 'flex';
box.style.justifyContent = 'space-around';

for (let ul = 0; ul < 3; ul++) {
    let boxen = document.createElement('div');
    box.appendChild(boxen);
    let list = document.createElement('ul');
    list.style.textAlign = 'center';
    list.style.display = 'inline-block';
    list.style.listStyle = 'none';
    list.style.border = 'solid #B0B0FF 14px';
    list.style.fontSize = '30px';
    list.style.margin = '70px 0px';
    list.style.width = '100px';
    list.style.padding = '0';
    boxen.appendChild(list);
    
   
    for (let li = 0; li < 10; li++) {
        let liEl = document.createElement('li');
        if(ul === 0){
            liEl.innerText = li;
            liEl.style.background = 'white';
            liEl.style.textAlign = 'left';
            if(li % 2 == 0) { 
                liEl.style.background = 'black';
                liEl.style.color = 'white';
                    if (li === 4) {
                    liEl.style.background = '#B0B0FF';
                    }
            }
        }
        if(ul === 1){
            liEl.innerText = 9-li;
            liEl.style.background = 'black';
            liEl.style.color = 'white';
            if(li % 2 == 0 ) {
                liEl.style.background = 'white';
                liEl.style.color = 'black';
            }
                if (li === 1){
                    liEl.style.background = '#B0B0FF';
                }
        }

        if(ul === 2){
            let text = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio']
            liEl.innerText = text[li];
            liEl.style.background = 'white';
            liEl.style.textAlign = 'right';
            if(li % 2 == 0 ) {
                liEl.style.background = 'black';
                liEl.style.color = 'white';
            }
                if (li === 6){
                    liEl.style.background = '#B0B0FF';
                }
        }
        list.appendChild(liEl);
        
    }
} 
