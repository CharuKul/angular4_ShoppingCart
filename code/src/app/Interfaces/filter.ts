export class Filter {
    name: string;
    values: FilterItem[]

    constructor() {
        this.values = [];
    }
}

export class FilterItem {
    name: string;
    checked: boolean
}