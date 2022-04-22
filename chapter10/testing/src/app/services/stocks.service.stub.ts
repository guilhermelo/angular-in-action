import { HttpClient } from "@angular/common/http";
import { StocksService } from "./stocks.service";
import { Observable } from "rxjs/Rx";
import { MockStocksResponse, MockNewsResponse } from "./stocks.mock";

export class StubStocksService extends StocksService {
    constructor() {
        super({} as HttpClient);
    }

    load(symbols: string[]) {
        return Observable.of(MockStocksResponse);
    }

    getNewsSnapshot(source: string) {
        return Observable.of(MockNewsResponse);
    }
}
