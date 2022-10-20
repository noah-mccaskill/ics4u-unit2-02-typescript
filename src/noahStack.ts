/**
 * This class creates an integer stack
 *
 * By:      Noah McCaskill
 * Version: 1.0
 * Since:   2022-10-12
 */

class NoahStack {
  private readonly stackAsList: number[] = []

  public Push(pushedNumber: number): void {
    this.stackAsList.push(pushedNumber)
  }

  public Pop(): any {
    return this.stackAsList.pop()
  }

  StackArray(): void {
    console.log(this.stackAsList)
  }
}

export = NoahStack
