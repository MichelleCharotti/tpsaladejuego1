export class Cell {
    status: 'open' | 'clear' | 'flag' = 'open';
    mine = false;
    proximaMinas = 0;
    constructor(public row: number, public column: number) {}
}