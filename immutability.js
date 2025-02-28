// Muatation

let rooms = ["R1","R2","R4","R4"]
rooms[2] = "Y2"
console.log(rooms)


// Non_Mutation

let rooms = ["R1","R2","R4","R4"]

const newRooms = rooms.map(room => room === "R3" ? "C2" : room)

console.log(rooms)
console.log(newRooms)