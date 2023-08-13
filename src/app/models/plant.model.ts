export class Plant {

    id: string;
    commonname: string;
    scientificname: string;
    price: number = 0;
    des: string;
    uses: string;
    bloomtime: string;
    season: string;
    soilreqmnt: string;
    enviroment: string;
    watering: string;
    img1: string;
    img2: string;
    img3: string;
    light?: string;
    cat?: string = "";
    quantity?: number = 1;
    totalPrice?: number = 1;

    constructor() {
        this.id = "";
        this.commonname = "";
        this.scientificname = "";
        this.price = 0;
        this.des = "";
        this.uses = "";
        this.bloomtime = "";
        this.season = "";
        this.soilreqmnt = "";
        this.enviroment = "";
        this.watering = "";
        this.img1 = "";
        this.img2 = "";
        this.img3 = "";
    }
}