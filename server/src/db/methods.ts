import { Document, Model, Schema } from "mongoose";

// eslint-disable-next-line import/prefer-default-export
export async function getByIdOrFail(
  this: Model<Document>,
  id: string,
): Promise<Document<Schema>> {
  const doc = await this.findById(id);

  if (!doc) {
    throw new Error("Could not find id, action aborted");
  }

  return doc;
}
