import url from 'url';

const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(myURL);
console.log(myURL.searchParams.get('query'));

// const parseURL =
//   url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
// console.log(parseURL);
