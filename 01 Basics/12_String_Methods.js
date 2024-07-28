const sentence = "JavaScript is a versatile programming language";

// slice() - used to extract a section of a string and return it as a new string, without modifying the original string. It takes 2 parameters:

// startIndex: index at which to begin extraction. If -ve, treated as (string.length + startIndex)

// endIndex (optional): index before which to end extraction. The character at this index is not included. If omitted, it extracts to the end of the string. If -ve, treated as (string.length + endIndex)

console.log(sentence.slice(11, 25));
console.log(sentence.slice(11));
console.log(sentence.slice(-20, -1));

// trim() - used to remove whitespace from both ends of a string. Whitespace - includes spaces, tabs and newline characters
const string1 = "         hitesh        ";
console.log(string1.trim());

// trimStart() or trimLeft(): Removes whitespace from the beginning of a string
console.log(string1.trimStart());

// trimEnd() or trimRight(): Removes whitespace from the end of a string
console.log(string1.trimEnd());

// replace() - used to replace part of a string with another string. It can be used to replace the first occurrence of a substring, or if a regular expression is used, it can replace multiple occurrences

const url = "https://www.hitesh.com/hitesh%20mahto%20about%20me";
console.log(url.replace("%20", "-"));

// To replace all occurrences of "%20" with "-", we use regular expression
console.log(url.replace(/%20/g, "-"));

// replacing all occurrences of "/" with "X", we use regular expression

// The backslash \ is escape character in regular expressions. It tells the regular expression engine to treat the following character / as a literal character, rather than a special character
console.log(url.replace(/\//g, "X"));

/*
includes() method - used to determine whether one string can be found within another string, returning true or false as appropriate

SYNTAX - string.includes(searchString, position)

- searchString: The string to search for within the main string

- position (optional): The position in the string at which to begin searching. The default is 0
*/
console.log(url.includes("hitesh"));
console.log(url.includes("hitesh", 33));

/*
split() method - used to split a string into an array of substrings, based on a specified separator string

SYNTAX - string.split(separator, limit);

- separator: Specifies the character, or the regular expression, to use for splitting the string. If an empty string ("") is used as the separator, the string is split between each character

- limit (optional): An integer that specifies the maximum number of splits. Items after the limit are not included in the array
*/

const str = "I am enjoying learning JavaScript from Chai aur JavaScript";
const arr = str.split(" ");
console.log(arr);

console.log(str.split(""));

console.log(str.split("", 3));
