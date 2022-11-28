console.log((232).toString(2));

const BinaryGap = (number: number): number => {
    const numberToBinary = number.toString(2);
    let longestCount = 0;
    let count = 0;
    for (let i = 0; i < numberToBinary.length; i++){
        let element = numberToBinary[i];
        if(i > 0 && Number(element) !== 1 ){
            count ++
        }else if(i > 0 && Number(element) === 1){
            longestCount = Math.max(count, longestCount);
            count = 0
        }
    }
    return longestCount;
}

console.log(BinaryGap(1041));