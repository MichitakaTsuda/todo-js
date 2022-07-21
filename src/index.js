/**
 * テンプレート文字列``の使い方、分割代入{}
 */
// const myProfile = {
//   name: "michitaka",
//   age: 25
// };

// const { name, age } = myProfile;

// const message = `名前は${name}です。年齢は${age}です`;
// console.log(message)

/**
 * Mapの使い方
 */

// const nameArr = ["田中", "津田", "岩本"];

// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }
// nameArr.map((name, id) => console.log(`${id + 1} 番目は${name}です`));

/**
 * Filterの使い方
 */

// const numArr = [1, 2, 3, 4, 5];
// const odds = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(odds);

/**
 * 三項演算子　関数のReturn部分でよく使う
 */

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "<100" : "OK";
// };

// console.log(checkSum(50, 69));

/**
 * || と　&&の本当の意味
 */

//||は「または」ではなく、||の左がfalseなら右を返すという意味が本来正しい
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

//&&は「かつ」ではなく、&&の左がtrueなら右を返すという意味が本来正しい
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
