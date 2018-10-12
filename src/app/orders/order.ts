export class order {
    id: string;
    RSSNumber: string
    OrderNumber: string;
    PINumber: string;
    Type: string;
    Packer: string;
    Buyer: string;
    PackDate: Date;
    DeliveryDate: Date;
    Status: string;

    public constructor(id: string, RSSNumber:string,OrderNumber: string, PINumber: string, Type: string, Packer: string,Buyer: string,PackDate: Date,DeliveryDate: Date, Status: string)   {
        this.id=id;
        this.RSSNumber=RSSNumber;
        this.OrderNumber=OrderNumber;
        this.PINumber = PINumber;
        this.Type=Type;
        this.Packer=Packer;
        this.Buyer=Buyer;
        this.PackDate=PackDate;
        this.DeliveryDate=DeliveryDate;
        this.Status = Status;
    }
}

