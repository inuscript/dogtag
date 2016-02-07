import test from "ava"
import tags, {primary} from "../index"
import util from "util"

test("tags()" ,t => {
  let result = tags()
  result.then( tg => {
    console.log(tg)
    t.ok(util.isArray(result))    
  }).catch(e => {
    t.fail("promise failed")
  })
})

test("primary", t => {
  t.ok(util.isArray(primary))    
})