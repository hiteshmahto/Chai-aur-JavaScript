const sentence = "JavaScript is a versatile programming language";

// slice() - used to extract a section of a string and return it as a new string, without modifying the original string. It takes 2 parameters:

// startIndex: index at which to begin extraction. If -ve, treated as (string.length + startIndex)

// endIndex (optional): index before which to end extraction. The character at this index is not included. If omitted, it extracts to the end of the string. If -ve, treated as string.length + endIndex.

console.log(sentence.slice(11, 25));
console.log(sentence.slice(11));
console.log(sentence.slice(-20, -1));

// trim() - used to remove whitespace from both ends of a string. Whitespace - includes spaces, tabs, and newline characters
const string1 = "         hitesh        ";
console.log(string1.trim());

// trimStart() or trimLeft(): Removes whitespace from the beginning of a string
console.log(string1.trimStart());

// trimEnd() or trimRight(): Removes whitespace from the end of a string
console.log(string1.trimEnd());

// replace() - used to replace part of a string with another string. It can be used to replace the first occurrence of a substring, or if a regular expression is used, it can replace multiple occurrences

const url = "https://www.hitesh.com/hitesh%20mahto%20about%20me";
