/* eslint-disable import/prefer-default-export */
import { Schema, Document } from "mongoose";
import * as staticMethods from "./methods";
import { StaticMethodsOptions } from "./types";

export function ConstructStaticMethods(
  schema: Schema<Document>,
  options?: StaticMethodsOptions,
): void {
  const {
    customStaticMethods = {},
  } = options || {};

  schema.statics = {
    ...staticMethods,
    ...customStaticMethods,
  };
}
