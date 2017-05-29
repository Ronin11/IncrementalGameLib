import { Resource } from '../Resource'

describe(`Resource`, () => {

  let resource: Resource

  beforeEach(() => {
    resource = new Resource('World')
  })

  it(`should greet`, () => {

    const actual = resource.getName()
    const expected = 'Name: World'

    expect(actual).toBe(expected)

  })

})
