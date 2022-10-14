interface Point {
    x: number ,
    name?: string,
}

let  newvr: Point = {
    x: 99,
}
console.log(newvr.x);

const recording: Record<string, number> = {
    "nazmul": 32,
    "hasan": 64
}
console.log(recording.nazmul);