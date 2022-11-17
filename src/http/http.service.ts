import { Injectable, Optional, Inject } from '@nestjs/common';

@Injectable()
export class HttpService <T>{
    // constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient : T){}            // Optional
    @Inject('HTTP_OPTIONS')                                                                 // Inject    
    private readonly httpClient:T;
}
