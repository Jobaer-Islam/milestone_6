const products = [
    { id: 1, name: "iphone", color: "black", price: 1200, brand: "apple" },
    { id: 2, name: "xiaomi", color: "gold", price: 100, brand: "xiaomi" },
    { id: 3, name: "samsung", color: "gold", price: 1500, brand: "sam" },
    { id: 4, name: "iphone", color: "gold", price: 1000, brand: "apple" },
    { id: 5, name: "xiaomi", color: "black", price: 1100, brand: "xiaomi" }
];


// forEach() এর কোনো return type নেই
// products.forEach(product => {
//     if (product.color === "gold") {
//         console.log(product);
//     }
// });

// // filter() শর্ত সাপেক্ষে এরে থেকে ইলেমেন্ট আলাদা করে নতুন এরে তে স্টোর করে
// const newProducts = products.filter(product => product.price > 1000);
// console.log(newProducts)

const newProducts = products.filter(p => p.id != 3);
console.log(newProducts)


// find() শুধু একটা ভ্যালু ই রিটার্ন করবে, তাও আবার object এর ভিতর,
// প্রথম যেটা পাবে শুধু সেটাই রিটার্ন করবে
const product = products.find(p => p.color === "gold");
console.log(product)