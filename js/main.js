/*let man = {
  name: "Adam",
  surName: "Girzishev",
  height: "173",
  login: "black",
  password: "12345",
  score: "700",
};
man.address = "Chechen republick , Crozny";
console.log(man);
let password1 = prompt("Введите пароль");
if (password1 === man.password) {
  console.log(`Добро пожаловать , ${man.name}, Ваш логин ${man.login}`);
} else {
  console.log(
    `Ошибка, указанный пароль ${password1} неверный.Попробуйте еще раз `
  );
}*/

let a = ["lorem", 123, true, "ipsum"];

console.log(a.length);
//a[1] = 555;
//a.pop()удаляет элементы с конца
//a.push("444");добавляет элементы в конец
//a.unshift(333);добавляет элементы спереди
//a.shift();удаляет элемент спреди
//delete a[3]
//.concat делает слияние массивов
//console.log(a.concat(a1, 000000));
//let mut = a.concat(a1);
//a.splice(1, 3);удаляет массивы по середине
//slice копирует кусок из массива

console.log(a[0]);
console.log(a[a.length - 1]);

let em = ["input", 11, 77, "apple", 999];
em.unshift(333, 3, "lorem");
em.shift();
em.pop();
em.pop();
console.log(em);
let number = [1, 3, 5, 7, 9];
number = [2, 4, 6, 8, 10];
number.splice(1, 3);
number = ["lorem ", "input", 11];
console.log(number);
