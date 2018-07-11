export interface Vec {
    readonly coords: number[]
}

const validateLengths = (...vectors: Vec[]) => {
    if (vectors.length > 0){
        if (vectors.some(vec => vec.coords.length !== vectors[0].coords.length)){
            throw new Error("All vectors must have the same size");
        }
    }
}

const operateElementwise = (operator: (a: number, b: number) => number) => (u: Vec, v: Vec): Vec => {
    validateLengths(u, v);
    return {
        coords: u.coords.map((coord, idx) => operator(coord, v.coords[idx]))
    }
}

export const add = operateElementwise((a, b) => a + b);
export const sub = operateElementwise((a, b) => a - b);