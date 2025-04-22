interface student {
    name: string,
    age: number,
    is_alive?: boolean
}
let std: student = {
    name: 'dara',
    age: 12
}

let std1: student = {
    name: 'dara',
    age: 12,
    is_alive: false,
}

console.log(std)
console.log(std1)