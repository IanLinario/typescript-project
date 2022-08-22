import { Example } from "../oop/classes/example.classes"
import { ExampleInterface } from "../oop/interfaces/example.interfaces"

const arg : ExampleInterface = {
    option: "a"
}
const example = new Example(arg)