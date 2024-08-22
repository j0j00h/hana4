//1.
function f1(user) {
  console.log(user.id, user.name);
}

function f2({ id, name }) {
  console.log(id, name);
}

const f3 = ({ id, name }) => {
  console.log(id, name);
};

const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };
//2.
// const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
// const { id, name, addr } = user;
// const userInfo = { id, name, addr };
// console.log(userInfo);

//3.
const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const { id: id1 } = arr[0][0];
const { id: id2 } = arr[1][0];
const { id: id3 } = arr[1][1];
console.log(id1, id2, id3);

//4.
const user = { name: "Hong", passwd: "xyz", addr: "Seoul" };

function getValueExceptInitial(k) {
  const { [k]: val } = user;
  const [, ...ret] = val;
  return ret.join("");
}

console.log(getValueExceptInitial("name")); // 'ong'
console.log(getValueExceptInitial("passwd")); // 'yz'
console.log(getValueExceptInitial("addr")); // 'eoul'

//5.
("제공하신 코드는 올바르지 않습니다. getTime 메서드는 Date 객체의 메서드이기 때문에, 구조 분해 할당을 사용하여 변수에 할당할 수 없습니다. 대신 getTime 메서드를 직접 호출해야 합니다.");
