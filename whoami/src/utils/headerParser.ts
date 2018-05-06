import WhoAmI from '../types/types';
import { Request, Response } from "express";


export function getWhoAmI (req: Request): WhoAmI {

    let userAgent = req.headers["user-agent"] || "";
    let languageHeader = req.headers["accept-language"] || "";

    let ipaddress = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || "" ;
    let language = languageHeader.slice(0, languageHeader.indexOf(","));
    let software = userAgent.slice(userAgent.indexOf("(") + 1, userAgent.indexOf(")"));
    
    let result = {
        ipaddress: ipaddress,
        language: language,
        software: software
    };

    return result;
};