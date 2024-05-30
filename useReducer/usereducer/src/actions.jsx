export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const increment = (id) =>({
    type : INCREMENT,
    payload : id
})

export const decrement = (id)=>({
    type : DECREMENT,
    payload : id
})