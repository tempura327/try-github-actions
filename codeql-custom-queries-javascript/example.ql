/**
 * This is an automatically generated file
 * @name Hello world
 * @kind problem
 * @problem.severity warning
 * @id javascript/example/hello-world
 */

import javascript

from Expr e, File f
// 找有side effect的部分
where not e.isPure()
select e, "This expression has side effect."

// predicate sideEffectExpr(Expr e) {
//   not e.isPure() // 判斷是否有 side effect
// }

// -------------------------------------