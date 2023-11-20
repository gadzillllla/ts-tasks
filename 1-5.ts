
// 1 - Given an array, transform it into an object type and the key/value must be in the provided array.
type TupleToObject<T extends readonly string[]> = {
   [Key in T[number]]: T[number]
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type result = TupleToObject<typeof tuple> 
const obj: result = { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

// 2 - Implement a generic First<T> that takes an Array T and returns its first element's type.
type First<T extends any[]> = T[0]

type TArr = [1, 2, 3]
const first: First<TArr> = 1

// 3 -  For given a tuple, you need create a generic Length, pick the length of the tuple
type Length<T extends any[]> = T['length']

type TArr3 = [1, 2, 3, 4, 5]
const len: Length<TArr3> = 5

// 4 - Implement the util type If<C, T, F> which accepts condition C, a truthy value T, and a falsy value F. C is expected to be either true or false while T and F can be any type.
type Falsy = false | 0 | '' | null | undefined
type If<C, T, F> = C extends Falsy ? F : T

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<undefined, 'a', 'b'> // expected to be 'b'

const a: A = 'a'
const b: B = 'b'

// 5 - Implement the JavaScript Array.concat function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order
type Concat<A extends any[], B extends any[]> = [...A, ...B]
type Result = Concat<[1], [2, 3]>

const concated: Result = [1, 2, 3] 