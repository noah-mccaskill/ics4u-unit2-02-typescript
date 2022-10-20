/**
 * The program uses the NoahStack
 *
 * By:      Noah McCaskill
 * Version: 1.0
 * Since:   2022-10-12
 */

import NoahStack from './noahStack'
import promptSync from 'prompt-sync'

// this function uses the NoahStack
const prompt = promptSync()
const stackNumber = new NoahStack()

const userInput = Number(prompt('Enter a number: '))
stackNumber.Push(userInput)

let poppedStack = stackNumber.StackArray()
stackNumber.Pop()
poppedStack = stackNumber.StackArray()
console.log(poppedStack)

console.log('\nDone.')
