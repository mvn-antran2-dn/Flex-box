// Phương thức map () tạo một mảng mới được điền với các kết quả của việc gọi một hàm được cung cấp trên mọi phần tử trong mảng đang gọi.
const array1 = [1, 2, 3, 4, 5];

const map1 = array1.map(x => x * 2);

console.log(map1);

//Phương thức filter () tạo một mảng mới với tất cả các phần tử vượt qua kiểm tra được thực hiện bởi hàm được cung cấp.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

console.log(result);

//reduceconst 

const initialValue = 0;

const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);

console.log(sumWithInitial);

//Phương thức find () trả về phần tử đầu tiên trong mảng được cung cấp đáp ứng chức năng kiểm tra được cung cấp. Nếu không có giá trị nào đáp ứng chức năng kiểm tra, thì không xác định được trả về.

const found = array1.find(element => element > 3);

console.log(found);

//some
const even = (element) => element % 2 === 0;

console.log(array1.some(even));

//Thêm phần tử vào mảng ở vị trí đầu
array1.push(6);

console.log(array1);

//Thêm phần tử vào mảng ở vị trí cuối

array1.unshift(6);

console.log(array1);

//xóa phần tử khỏi mảng

array1.splice(6, 1);

console.log(array1);

//Bài Tập 1

var a = 5;
var b = 5;
var sum;
if (a == b) {
    sum = (a + b) * 3;
} else {
    sum = a + b;
}

console.log(sum); // =>30

// Bài tập 2

var number1 = 22;
var diff;
if (typeof number1 == typeof 19 && number1 > 19) {
    diff = (number1 - 19) * 3;
} else {
    diff = 19 - number1;
}

console.log(diff); //=> 9

// Bài tập 3

digit3("1*9");

function digit3(input) {
    var number2 = input.indexOf("*");
    var count = 0;
    var result = [];
    if (number2 >= 0) {
        for (var i = 0; i <= 9; i++) {
            reInput = input.replace("*", i);
            if (parseInt(reInput) % 3 == 0) {
                result[count] = input.replace("*", i);
                count++;
            }
        }
    } else {
        console.log("error");
    }

    console.log(result); //['129', '159', '189']
}

// Bài tập 4

digit4("1234567890*");

function digit4(input) {
    var number3 = input.indexOf("*");
    var count = 0;
    var result = [];

    if (number3 >= 0) {
        for (var i = 0; i <= 9; i++) {
            reInput = input.replace("*", i);
            if (parseInt(reInput) % 6 == 0) {
                result[count] = input.replace("*", i);
                count++;
            }
        }
    } else {
        console.log("err");
    }

    console.log(result); // ['12345678900', '12345678906']
}