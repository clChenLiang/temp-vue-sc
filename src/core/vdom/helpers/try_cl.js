function mockFun(k){return function(){console.log(k)}}
function mockFuns(n){
  return [...new Array(n)].map((_, i) => mockFun(i))
}
let fns = mockFuns(4)
fns = fns.map( fn =>{
  let cloned = [fn].slice()
  return function(){
    console.log('新的')
    cloned[0].apply(null, arguments)
  }
})