export interface User {
    id:number;
    name:string;
    username:string;
    email:string;
    address?:UserAddress;
    phone:string;
    website:string;
    company?:Company
}

export interface UserAddress {
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:Geo
}

export interface Geo {
    lat:string;
    lng:string;
}

export interface Company {
    name:string;
    catchPhrase:string;
    bs:string;
}



