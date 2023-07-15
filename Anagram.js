// String Anagram
// ANAGRAM MEANS LETTERS ARE SAME BUT ARRANGEMENT ARE DIFFERENT BETWEEN 2 STRINGS.
// 'hello' -> 'llheo'

// Conditions
//1]Checking length (for both Strings)
// String 'hello'
// Mapping-Identifying {h:1,e:1,l:2,o:1} 
// Now Comparing with String 2 and putting 0 in Map {h:0,e:0,l:0,o:0}

function isAnagram(string1,string2){
    if(string1.length != string2.length){
        return false;
    }
    let counter={}
    for (let letter of string1){
        //console.log(letter);
        counter[letter]=(counter[letter] || 0) +1;
        console.log(counter[letter])
    }
    console.log(counter)

    for (let items of string2){
        if(!counter[items]){
            return false;
        }
        counter[items]-=1.
    }
    return true;
}
const check =isAnagram('hello','llheo');
console.log(check);

//o(n) linear time complexity