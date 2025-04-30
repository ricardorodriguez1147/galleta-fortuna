export function getItemRandom(arr){
    const randonNum = Math.floor(Math.random()*arr.length);
    return arr[randonNum];
}