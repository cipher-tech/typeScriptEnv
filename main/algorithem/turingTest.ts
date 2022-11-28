let turingTest = (A: string[]) => {
    if(A.length <= 0) return 1
    if(A.length === 1 && !isNaN(Number(A[0]))) return A[0]
    let total: number = 0
    let queue: number[] = []

    for(let i = 0; i < A.length; i++){
        let item = A[i];
        if(!isNaN(Number(item))){
            queue.push((Number(item)));
            console.log("QUEUE:1", queue);
        }else if(item === "+" && queue.length > 1){
            let value = Number(queue[queue.length - 1]) + Number(queue[queue.length - 2])
            queue.push((Number(value)));
            console.log("QUEUE: +", queue);
        }else if(item === "D" && queue.length > 0){
            let value = Number(queue[queue.length - 1]) * 2;
            queue.push((Number(value)));
            console.log("QUEUE: D", queue);
        }else if(item === "C" && queue.length > 0){
            queue.pop();
            console.log("QUEUE: C ", queue);
        }
    }

    for (let i = 0; i < queue.length; i++) {
        const element = queue[i];
        total += element
    }
    return total
}


export const validInput = (A) => {
    if(A.length % 2 !==0) return 'invalid';
    let map: any = {
        "(": ["(", ")"],
        "[": ["[", "]"],
        "{": ["{", "}"]
    }
    let result = "invalid";
    let count = 0

    while(count < A.length-1 ){
       let item = A[count]
       let nextItem = A[count + 1]
       
       console.log("ount 34", count);
       if(map[A[count]] && map[A[count]][1] === nextItem ){
           console.log("map", map[A[count]]);
           count + 1;
           count ++
           console.log("ount", count);
        }else{
            return result;
        }
    }

    result = "valid";
    return result
}
export default turingTest