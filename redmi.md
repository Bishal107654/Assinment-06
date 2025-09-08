1) var, let, আর const এর পার্থক্য:

var: শুধু function-এর ভেতর সীমাবদ্ধ থাকে। এটা আবার declare করা যায় এবং value change করা যায়। শুরুতেই undefined হিসেবে উঠে আসে (hoisting হয়)।

let: block ( { } ) এর ভেতর সীমাবদ্ধ থাকে। value change করা যায় কিন্তু একই জায়গায় আবার declare করা যায় না। hoisting হয় কিন্তু শুরুতে কোনো মান পায় না।

const: block এর ভেতর সীমাবদ্ধ। একবার declare করলে value change করা যায় না (object/array এর ভিতরের মান ছাড়া)। hoisting হয় কিন্তু মান পায় না।

2) map(), forEach(), আর filter() এর পার্থক্য:

map(): প্রতিটা উপাদান থেকে নতুন একটা array বানায় যেটা return করে।

forEach(): শুধু প্রতিটা উপাদান ঘুরে দেখে, নতুন কিছু return করে না।

filter(): শর্ত মেনে যেসব উপাদান true হয় তাদের নিয়ে নতুন একটা array বানায়।

3) ES6 এর Arrow Function কী?

Function লেখার ছোট আর সহজ পদ্ধতি।

নিজের this, arguments, বা prototype থাকে না।

সাধারণত ছোট function বা callback লেখার জন্য ব্যবহার হয়।

4) ES6 এর Destructuring Assignment কীভাবে কাজ করে?

Array বা Object থেকে সরাসরি মান আলাদা করে variable-এ রাখা হয়।

কোড ছোট আর পরিষ্কার হয়।

5) ES6 এর Template Literals (String Concatenation থেকে পার্থক্য):

Backtick (`) ব্যবহার হয়।

${} দিয়ে সরাসরি variable বা expression বসানো যায়।

Multi-line লেখা সম্ভব।

আগের + দিয়ে জোড়া লাগানোর চাইতে অনেক সহজ আর পরিষ্কার।