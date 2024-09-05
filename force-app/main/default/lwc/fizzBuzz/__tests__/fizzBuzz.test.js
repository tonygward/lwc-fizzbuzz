import { createElement } from 'lwc';
import FizzBuzz from 'c/fizzBuzz';

describe('c-fizz-buzz', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        jest.clearAllMocks();
    });

    it('defaults to empty string', async () => {
        const element = newComponent();
        expect(getResult(element)).toBe('');
    });

    it.each([
        ['1', '1'],
        ['2', '2'],
        ['4', '4'],
    ])("returns a number for '%s'", async (input, expected) => {
        const element = newComponent(input);
        expect(getResult(element)).toBe(expected);
    });

    it.each([
        ['3'],
        ['6']
    ])("returns fizz for '%s'", async (input) => {
        const element = newComponent(input);
        expect(getResult(element)).toBe('Fizz');
    })

    it.each([
        ['5'],
        ['10']
    ])("returns buzz for '%s'", async (input) => {
        const element = newComponent(input);
        expect(getResult(element)).toBe('Buzz');
    })

    it('returns fizzbuzz', async () => {
        const element = newComponent();
        await setInput(element, '15');
        expect(getResult(element)).toBe('FizzBuzz');
    });
});

// #region Helpers

async function setInput(element, input) {
    element.input = input;
    await flushPromises();
}

function newComponent(input) {
    const element = createElement('c-fizz-buzz', {
        is: FizzBuzz
    });
    element.input = input;
    document.body.appendChild(element);
    return element;
}

function getResult(element) {
    const div = element.shadowRoot.querySelector('div[data-id="result"]');
    return div.textContent;
}

async function flushPromises() {
    return Promise.resolve();
}

// #endregion