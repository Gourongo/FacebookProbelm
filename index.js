// given the mapping  a=1,b=2,c=3,....z=26 and an encoded message, count the 
// number of ways it can be decoded
// example 111 would give 3 since it could be decoded as aaa,ka,ak
// 001 is not allowed


// letterMap={a:1,b:2,c:3,...z:26}
// encodedMessage=111 //(1,1,1), (11,1), (1,11) //2611 


function numberofDecodedMessage(letterMap,encodedMessage){
    let str=encodedMessage.toString()
    const combinations=[]
    function generateCombination(start,currentCombination){
        if (start>=str.length){
            combinations.push(currentCombination)
        }
        for (let i=start;i<str.length;i++){
            const newCombination=currentCombination.slice()
            newCombination.push(str.substring(start,i+1))
            generateCombination(i+1,newCombination)
        }
    }
    generateCombination(0,[])
    console.log(combinations)
    function filterFunction(value,index,array){
        function elemetChecker(elem){
            if (Number(elem)<=26 && elem[0]!=0){
                return true
            }
            else return false
        }
        if (value.every(elemetChecker)){
            return value
        }
    }
    const eligibleCombination=combinations.filter(filterFunction)
    console.log(eligibleCombination)
    return eligibleCombination.length
}

const letterMap={a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
let encodedMessage="0001"
numberofDecodedMessage(letterMap,encodedMessage)