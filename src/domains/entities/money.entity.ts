import {BigNumber} from 'bignumber.js'
import { threadId } from 'worker_threads';

export class MoneyEntity {
    constructor(private readonly _amount: BigNumber) {}

    static ZERO() {
        return new MoneyEntity(new BigNumber(0));
    }

    static of(value: number) {
        return new MoneyEntity(new BigNumber(value));
    }

    get amount(): BigNumber {
        return this._amount;
    }

    static add(a: MoneyEntity, b: MoneyEntity): MoneyEntity {
        return new MoneyEntity(a.amount.plus(b.amount));
    }

    negative(): MoneyEntity {
        return new MoneyEntity(this.amount.negative())
    }

    isPositiveOrZero() {
        return this.amount.compratedTo(0) >= 0;
    }
}