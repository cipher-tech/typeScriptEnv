const frequencyCounter = (array1: number[], array2: number[]): boolean => {
    if(array1.length !== array2.length) false;

    type FreqObj = {
        [key: number]: number;
    }
    const array1Freq: FreqObj = {};
    const array2Freq: FreqObj = {};

    for(let value of array1){
        array1Freq[value] = (array1Freq[value] || 0) +1;
    }
    for(let value of array2){
        array2Freq[value] = (array2Freq[value] || 0) +1;
    }

    console.log(array1Freq, array2Freq);
    
    for(let key in array1Freq){
        if(!(Number(key)**2 in array2Freq)){
            return false;
        };

        if((array2Freq[Number(key)**2] !== array1Freq[key])) {
            return false;
        };
    }
    return true
}

export default frequencyCounter;