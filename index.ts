import { of } from 'rxjs';
import { takeWhile, filter } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/takewhile
// Example 2: (v6.4+) takeWhile with inclusive flag
const source$ = of(1, 2, 3, 9);

source$
  // with inclusive flag, the value causing the predicate to return false will also be emitted
  .pipe(takeWhile((val) => val <= 3, true))
  .subscribe(console.log);
// log: 3, 3, 3, 9
