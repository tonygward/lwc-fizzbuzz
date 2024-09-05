# FizzBuzz - Salesforce Lightning Web Component

Useful code examples:

1. **Jest it.each** - property based testing
*multiple inputs for the same unit test*

```
    it.each([
        ['1', '1'],
        ['2', '2'],
        ['4', '4'],
    ])("returns a number for '%s'", async (input, expected) => {
        const element = newComponent(input);
        expect(getResult(element)).toBe(expected);
    });
```

2. **@api property**
*get and set example for an @api variable*

```
    _input;
    @api
    get input() {
        return this._input;
    }
    set input(value) {
        this._input = value;
        this.result = this.getResult(value);
    }
```