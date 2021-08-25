import { Document, Model, Schema } from "mongoose";

// eslint-disable-next-line import/prefer-default-export
export async function getByIdOrFail<T>(
    this: Model<T>,
    id: string,
): Promise<Document<T>> {
    const doc = await this.findById(id);

    if (!doc) {
        throw new Error("Could not find id, action aborted");
    }

    return doc;
}
