export class order {
    id: string;
    OrderNumber: string;
    Type: string;
    Packer: string;
    Buyer: string;
    PackDate: Date;
    DeliveryDate: Date;

    public constructor(id: string,OrderNumber: string,Type: string,Packer: string,Buyer: string,PackDate: Date,DeliveryDate: Date)   {
        this.id=id;
        this.OrderNumber=OrderNumber;
        this.Type=Type;
        this.Packer=Packer;
        this.Buyer=Buyer;
        this.PackDate=PackDate;
        this.DeliveryDate=DeliveryDate;
    }
}

