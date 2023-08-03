import { HelloWorldService } from "../../src/services/HelloWorldService"

describe('getHelloWorldString', () => {
  test('should return a hello world string', () => {
    const service = new HelloWorldService()
    expect(service.getHelloWorldString()).toBe('Hello, world!')
  })
})