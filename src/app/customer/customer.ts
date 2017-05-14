export class Customer {

    constructor(
        public FirstName = '',
        public LastName = '',
        public Email = '',
        public ID?: number,
        public UserNameId?: number,
        public UserName01Id?: number,
        public UserName02Id?: number,
       // public sendCatalog = false,
        public addressType = 'home',
        public street1?: string,
        public street2?: string,
        public city?: string,
        public state = '',
        public zip?: string) { }
}