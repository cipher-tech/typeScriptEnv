// const CyclicRotation = (A: Array<number | any>, k: number) => {
//     if (!A || A.length === 0 || !Array.isArray(A)) return "invalid"
//     let result: Array<number | any> = A;
//     let positionToMove;
//     for (let i = 0; i < k; i++) {
//         positionToMove = result && result.pop();
//         console.log("::::: A1", A);
//         console.log("::::: A2", result);
//         console.log("::::: A3", positionToMove);

//         result = [ positionToMove, ...result ]
//         console.log("::::: A4", result);
//         console.log(":::::_______________________", );
//     }
//     return result
// }
// let A = [ 3, 8, 9, 7, 6 ]
// let K = 3
// console.log("::::: CyclicRotation", CyclicRotation(A, K));



const test = async () => {
    const order: number[] = []
    const map: any = {};
    let c = 0
    const myPromises = [
        new Promise((resolve) => setTimeout(() => {
            resolve('A (slow)'); console.log('A (slow)')
            order.push(0)
            map[0] = c;
            c += 1
        }, 1000)),
        new Promise((resolve) => setTimeout(() => {
            resolve('B (slower)'); console.log('B (slower)')
            order.push(1)
            map[1] = c;
            c += 1
        }, 2000)),
        new Promise((resolve) => setTimeout(() => {
            resolve('C (fast)'); console.log('C (fast)')
            order.push(2)
            map[2] = c;
            c += 1
        }, 10))
    ];

    const values: void | number[] = await Promise.all(myPromises)
    // console.log(":::::", values);
    const res = values!.map((value, index) =>{
        let counter = 0
        while(counter <= index && index > 0){
            console.log(":::::: index", index);
            console.log(";;;;;;; in map", map[counter]);

            if(map[counter] > map[index]){
                console.log("::::: greater");
                return -1
            }
            counter++
        }
        if(index == 0) return 0
        return 1
    })
    return {order, c, map, res}

}
test()
    .then(val => {
        console.log(val);
    })
