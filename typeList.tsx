/* eslint-disable @typescript-eslint/no-unused-vars */

// boolean
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = "A";

// Array 配列　map関数と合わせてよく使う。
let arr1: Array<number> = [0, 1, 2];


// tuple
let tuple: [number, string] = [0, "A"];

// any
let any1: any = false;

// void
const funcA = () => {
  const test = "TEST";
}

// null
let null1: null = null;

// undefined
let undefind1: undefined = undefined

// object
let obj1: object = {};
let obj2: { id: number, name: string } = { id: 0, name: "AAA" };

/* tsconfigで設定可能 strictモードの解除など */
