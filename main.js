const samsungTv = {
    number:"1",
    imgUrl:"",
    storeName:"Samsung",
    address:"XXXXX",
    city:"Tel-Aviv",
    price:"2499",
    storeUrl:"",
    rating:"4/5"
}

const lgTv = {
    number:"2",
    imgUrl:"",
    storeName:"LG",
    address:"XXXXX",
    city:"Jerusalem",
    price:"6798",
    storeUrl:"",
    rating:"5/5"
}

const haierTv = {
    number:"3",
    imgUrl:"",
    storeName:"Haier",
    address:"XXXXX",
    city:"Haifa",
    price:"1699",
    storeUrl:"",
    rating:"2/5"
}

const toshibaTv = {
    number:"4",
    imgUrl:"",
    storeName:"Toshiba",
    address:"XXXXX",
    city:"Natanya",
    price:"2222",
    storeUrl:"",
    rating:"3/5"
}


let tableArray = [samsungTv,lgTv,haierTv,toshibaTv]


function createSumArray(array) {
    let sumArray = []
    let tvPrice ;
        for (let i = 0; i < array.length; i++) {
            if (array[i].price > 0) {
                tvPrice = array[i].price
                sumArray.push(tvPrice)
            }
            
        }
        return sumArray
}

console.log(createSumArray(tableArray));

function calculateSum(array) {
    let sum ;
    array.forEach(n =>{
        
    })
}