function checkPairElem (A) {
    let qtd = A.length;
    // let count = 0;
    let tmp = [];
    for (e of A) {
        tmp.push(e);
    }
    
    if (qtd === 1) return true;
    
    console.log(tmp, "tmp");

    while (qtd--) {
        //console.log(qtd);
        let positionArr = [];
        console.log(positionArr, "posArr");
        for (let i = 0; i < tmp.length; i++) {
            if (A[qtd] == tmp[i]) {
                positionArr.push(tmp[i]);
            }
        }

        if (positionArr.length % 2 == 0)  {
            for (let i = 0; i < positionArr.length; i++) {
                tmp.splice(tmp.indexOf(positionArr[i]), 1);
            }
        }

        console.log(tmp , "array");

        if (tmp.length == 1) break;
    }

    if (tmp.length == 1) return true; 

    return false;
}

function solution (A) {
    if (A.length % 2 !== 1) return 'This array does not have an odd number of elements';
    let result = '';
    let qtd = A.length;
    let tmp = A;

    if (!checkPairElem(A)) return 'There is not any pair element';

//A =  [9, 3, 9, 3, 9, 7, 9]
    while (qtd--) {
        //console.log(qtd);
        let count = 0;
        for (let i = 0; i < tmp.length; i++) {
            if (A[qtd] == tmp[i]) {
                count++;
            }
        }
        //console.log(count, "o contador");
        if (count == 1)  {
            result = A[qtd];
            break;
        }
    }

    return result;

}