import quickSort from "../sort/quickFunction"

const missingInteger = (A: number[]) => {
    let sortedArray = quickSort(A);

    console.log("sortedArray::::::", sortedArray);

    let arrayWithOutDuplicates: number[] = [ ...new Set(sortedArray) ] as number[];
    let missingInteger = 0;
    for (let i = 0; i < arrayWithOutDuplicates.length; i++) {
        const element = arrayWithOutDuplicates[ i ];
        if (element + 1 !== arrayWithOutDuplicates[ i + 1 ] || arrayWithOutDuplicates[ i + 1 ] === null) {
            missingInteger = element + 1;
            break
        }
    }
    return missingInteger < 0 ? 1 : missingInteger;
}

export const missingSimple = (A: number[]) => {
    const map: any = {}
    let number: number = 0
    for (let i = 0; i < A.length; i++) {
        map[ A[ i ] ] = A[ i ]
    }

    console.log("::::::::; map", map);
    
    for (let i = 1; i < 1_000_002; i++){
        if(!map[i]){
            number = i;
            console.log("::::::: number", i);
            
            break
        }
    }
    return number
}



export default missingInteger;
