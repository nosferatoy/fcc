import { Request, Response } from "express";
import { getWhoAmI } from '../utils/headerParser';

export default class Api {
    constructor() {
    }
    
   getCallHederData(req: Request, res: Response ): void {
        res.json(getWhoAmI(req));
    }
}