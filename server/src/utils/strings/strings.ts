/* eslint-disable import/prefer-default-export */
import { NoBlankWhitespace } from "./errors.json";

export function splitSentence(sentence: string): string[] {
  if (!sentence.replace(/\s/g, "").length) {
    throw new Error(NoBlankWhitespace);
  }

  return sentence.split(" ").filter((value) => value !== "");
}
