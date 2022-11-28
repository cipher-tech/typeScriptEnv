import quickSort from "./sort/quickFunction"

const missingInteger = (A: number[]) => {
    let sortedArray = quickSort(A);

    console.log("sortedArray::::::", sortedArray);
    
    let arrayWithOutDuplicates: number[] = [...new Set(sortedArray)] as number[];
    let missingInteger = 0;
    for (let i = 0; i < arrayWithOutDuplicates.length; i++) {
        const element = arrayWithOutDuplicates[ i ];
        if(element + 1 !== arrayWithOutDuplicates[i + 1] || arrayWithOutDuplicates[ i + 1 ] === null ) {
            missingInteger = element + 1;
            break
        }
    }
    return missingInteger < 0? 1 : missingInteger;
}


export default missingInteger;