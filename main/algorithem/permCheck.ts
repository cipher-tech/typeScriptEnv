const permCheck = (A: number[]) => {
    if(A.length < 1) return 0;

    const map:any = {};
    let result = 0;
    let count = 1;
    for (let i = 0; i < A.length; i++) {
        const element = A[i];
        if(map[element] === undefined) map[element] = true
    }

    if(map[1] === undefined) return result;

    for (let j = 0; j < A.length; j++) {
        const element = A[j];
        console.log("MAP 333", map[count])
        console.log("MAP 444", map)
        if(map[count]){
            count++;
            console.log("MAP 555", count)
        }else{
            console.log("MAP 222", count)
            return 0
        }
    }
    return 1;
}


export default permCheck;