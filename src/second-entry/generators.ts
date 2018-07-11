export function * range(count){
    for (let idx = 0; idx < count; ++idx){
        yield idx;
    }
}