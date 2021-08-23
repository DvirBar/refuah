import { Request } from "express";

enum Method {
    GET = "GET",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    TRACE = "TRACE",
    CONNECT = "CONNECT",
    PATCH = "PATCH"
}

export interface RequestMeta {
    url: string;
    method: Method;
    timestamp?: Date
}

export interface IError {
    title: string;
    request?: Request;
    content: string;
}

export interface HTTPMessage {
    message: {
        he: string;
        en: string;
    };
    status: number;
}
