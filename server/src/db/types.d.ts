import { Model, Schema, Document } from "mongoose";

type StaticMethod = (...any) => any;

export interface StaticMethodsOptions {
    customStaticMethods?: {
        [key: string]: StaticMethod
    }
}

export interface EnhancedModel<T> extends Model<T> {
    getByIdOrFail: (this: Model<Schema>, id: string) => Promise<Document<T>>
}
