/* _____________ Your Code Here _____________ */


type ArrLength<Arr extends any[]> = Arr['length'] extends number ? Arr['length'] : never
type CreateArray<Length extends number, PrevArray extends number[] = []> = PrevArray['length'] extends Length ? PrevArray : CreateArray<Length, [any, ...PrevArray]>
type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

type PowerOf2<N extends number, acc extends number[] = [2]> = N extends 0 ? 1 : ArrLength<acc> extends N ? First<acc> : PowerOf2<N, [ArrLength<[...CreateArray<First<acc>>, ... CreateArray<First<acc>>]>, ...acc]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<PowerOf2<0>, 1>>,
  Expect<Equal<PowerOf2<1>, 2>>,
  Expect<Equal<PowerOf2<2>, 4>>,
  Expect<Equal<PowerOf2<3>, 8>>,
  Expect<Equal<PowerOf2<4>, 16>>,
  Expect<Equal<PowerOf2<5>, 32>>,
  Expect<Equal<PowerOf2<6>, 64>>,
  Expect<Equal<PowerOf2<7>, 128>>,
  Expect<Equal<PowerOf2<8>, 256>>,
  Expect<Equal<PowerOf2<9>, 512>>,
  Expect<Equal<PowerOf2<10>, 1024>>,
  // Expect<Equal<PowerOf2<11>, 2048>>,
  // Expect<Equal<PowerOf2<12>, 4096>>,
  // Expect<Equal<PowerOf2<13>, 8192>>,
]
