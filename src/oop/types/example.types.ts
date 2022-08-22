import { ExampleEnum } from "../enums/example.enums"

type ExampleType = keyof typeof ExampleEnum

export { ExampleType }