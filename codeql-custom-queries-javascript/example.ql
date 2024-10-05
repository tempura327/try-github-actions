/**
 * This is an automatically generated file
 * @name Hello world
 * @kind problem
 * @problem.severity warning
 * @id javascript/example/hello-world
 */

import javascript

from Function f, Expr e
// 找有side effect的部分
where f.getName() = "foo" and e.getParent() = f
select f, "This foo funtion."

// predicate sideEffectExpr(Expr e) {
//   not e.isPure() // 判斷是否有 side effect
// }

// -------------------------------------

// import javascript

// /**
//  * 判斷函數是否有副作用
//  * 副作用：修改了外部變數或全局狀態
//  */
// predicate hasSideEffect(Function f) {
//   // exists (AssignmentExpr assign | assign.getEnclosingCallable() = f)
//   f.isAsync()
// }
// /**
//  * 查找參數名為 'n' 且在第 0 位的函數
//  */
// predicate hasParameterNamedN(FunctionExpr func) {
//   // exists(
//     // Parameter param |
//     // param.getIndex() = 0 and
//     // param.getName() = "value" and
//     // param = func.getParameter(0)
//   // )

//   func.getName() = "foo"
// }

// // 查找同時滿足兩個條件的函數：第 0 個參數名為 n，且有副作用
// from FunctionExpr func
// where hasParameterNamedN(func) 
// select func, "This function has a side effect and its first parameter is named 'n'."