const forks = [true,true,true,true,true];
const dining = true;
const output = [];

const philosophers = [{
    id: 4,
    lf: false,
    rf: false,
    hungry: true,
    idl: 0,
    idr: 0
},{
    id: 0,
    lf: false,
    rf: false,
    hungry: true,
    idl: 0,
    idr: 0
},{
    id: 1,
    lf: false,
    rf: false,
    hungry: true,
    idl: 0,
    idr: 0
},{
    id: 2,
    lf: false,
    rf: false,
    hungry: true,
    idl: 0,
    idr: 0
},{
    id: 3,
    lf: false,
    rf: false,
    hungry: true,
    idl: 0,
    idr: 0
}]

async function wantsToEat(id,idl,idr,index){
    let arr = [id];

    if(forks[id+1] == true){
        idl = id+1;
        forks[idl] = false;
        philosophers[id].lf = true;
        arr.push(1,1);
        if(arr.length === 3){
            output.push(arr);
            arr = [id];
        }
    }
    if(forks[id-1] == true){
        idr = id-1;
        forks[idr] = false;
        philosophers[id].rf = true;
        arr.push(2,1);
        if(arr.length === 3){
            output.push(arr);
            arr = [id];
        }
    }
    if(id == 4){
        if(forks[0] == true){
            idl = 0;
            forks[idl] = false;
            philosophers[id].lf = true;
            arr.push(1,1);
            if(arr.length === 3){
                output.push(arr);
                arr = [id];
            }
        }
    }
    if(id == 0){
        if(forks[4] == true){
            idr = 4;
            forks[idr] = false;
            philosophers[id].rf = true;
            arr.push(2,1);
            if(arr.length === 3){
                output.push(arr);
                arr = [id];
            }
        }
    }

    if(philosophers[id].lf && philosophers[id].rf){
        arr.push(0);
        philosophers[index].hungry = false;
        arr.push(3);
        if(arr.length === 3){
            output.push(arr);
            arr = [id];
        }
        forks[idl] = true;
        arr.push(1,2);

        if(arr.length === 3){
            output.push(arr);
            arr = [id];
        }

        forks[idr] = true;
        arr.push(2,2);
        if(arr.length === 3){
            output.push(arr);
            arr = [id];
        }
    }
}


while(dining == true){
    for(let index in philosophers){
        if(philosophers[index].hungry == false) continue;
        wantsToEat(philosophers[index].id,philosophers[index].idl,philosophers[index].idr,index);
    }
    dining = false;
    for(let ind in philosophers){
        if(philosophers[ind].hungry == true){
            dining = true;
            break;
        }
    }
}

console.log(output);