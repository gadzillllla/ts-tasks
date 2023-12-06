type ArrLength<Arr extends any[]> = Arr['length'] extends number ? Arr['length'] : never
type CreateArray<L extends number, PrevArray extends number[] = []> = ArrLength<PrevArray> extends L ? PrevArray : CreateArray<L, [any, ...PrevArray]> 
type Plus1<N extends number> = ArrLength<[any, ...CreateArray<N>]>
type DublicateArr<Arr extends any[]> = [...Arr, ...Arr]

type PowerOf2<N extends number, acc extends any[] = [any], step extends number = 0> = step extends N ? ArrLength<acc> : PowerOf2<N, DublicateArr<acc>, Plus1<step>>

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
  Expect<Equal<PowerOf2<11>, 2048>>,
  Expect<Equal<PowerOf2<12>, 4096>>,
  Expect<Equal<PowerOf2<13>, 8192>>,
  Expect<Equal<PowerOf2<14>, 16384>>,
]
