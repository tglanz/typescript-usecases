import * as vec from 'Second/vec';
import { Vec } from 'Second/vec';

import setTimeoutAsync from 'Second/setTimeoutAsync';

async function main(){
    const u = {
        coords: [ 1, 1, 1 ]
    };
    
    const v = {
        coords: [ 1, 1, 1 ]
    };
    
    console.log({
        u,
        v,
        sum: vec.add(u, v),
        sub: vec.sub(u, v)
    })
}

main();