export class expense {
    constructor(
        public date: Date,
        public value: Number,
        public notes: string,
        public isPaid: boolean,
        public account_id: number,
        public category_id: number
    ){}
}