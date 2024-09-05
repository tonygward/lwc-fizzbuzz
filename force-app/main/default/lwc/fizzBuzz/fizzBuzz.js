import { LightningElement, api } from 'lwc';

export default class FizzBuzz extends LightningElement {

    _input;
    @api
    get input() {
        return this._input;
    }
    set input(value) {
        this._input = value;
        this.result = this.getResult(value);
    }

    result;
    getResult(value) {
        if (this.isUnknown(value)) {
            return '';
        }

        if (this.isFizz(value) && this.isBuzz(value)) {
            return 'FizzBuzz';
        }

        if (this.isBuzz(value)) {
            return 'Buzz';
        }

        if (this.isFizz(value)) {
            return 'Fizz';
        }

        return value;
    }

    // #region Helpers

    isUnknown(value) {
        if (value === undefined) {
            return true;
        }
        if (Number.isNaN(value)) {
            return true;
        }
        return false;
    }

    isFizz(value) {
        if ((value % 3) === 0) {
            return true;
        }
        return false;
    }

    isBuzz(value) {
        if ((value % 5) === 0) {
            return true;
        }
        return false;
    }

    // #endregion
}