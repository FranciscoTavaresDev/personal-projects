import { LCache } from "./l-cache";

export default class CPU {

    name: string;
    maker: string;
    model: string;
    socketType: string;
    clockSpeed: number;
    hostBusSpeed: number;
    Lcache: LCache;
    processSize: number;
    energyConsumption: number;
    price: number;

    constructor(name: string, maker: string, model: string, socketType: string, clockSpeed: number, hostBusSpeed: number, Lcache: LCache, processSize: number, energyConsumption: number, price: number) {
        this.name = name;
        this.maker = maker;
        this.model = model;
        this.socketType = socketType;
        this.clockSpeed = clockSpeed;
        this.hostBusSpeed = hostBusSpeed;
        this.Lcache = Lcache;
        this.processSize = processSize;
        this.energyConsumption = energyConsumption;
        this.price = price;
    }
}