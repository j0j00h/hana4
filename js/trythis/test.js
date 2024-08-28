globalThis.id = "Golobal_ID";
this.id = "Module_ID";

const obj = {
  id: 123,
  f: function () {
    console.log("obj > f =", this.id);
  },
  af: () => console.log("obj > af =", this.id),
  subObj: {
    id: 999,
    f: function () {
      console.log("obj > subObj > f =", this.id);
    },
    af: () => console.log("obj > subObj > af =", this.id),
  },
};

obj.f();
obj.af();
console.log("------------");
obj.subObj.f();
obj.subObj.af();
