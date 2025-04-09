
import { validate as isValidUUID } from 'uuid';
import {ParsingError} from "./parsering-error";
import {UUID} from "../identity/id";

const VALIDATION_MESSAGE = 'Value is not a valid UUID!';

/**
 * Utility class for parsing and validating UUIDs.
 */
export class UUIDParser {

  /**
   * Parses a value to a UUID.
   *
   * @param value The value to parse
   * @param errorMessage The error message to throw if the value cannot be parsed to a valid UUID
   *
   * @throws ParsingError If the value cannot be parsed to a valid UUID
   * @returns The parsed UUID
   */
  public static parse(value: unknown, errorMessage: string = VALIDATION_MESSAGE): UUID {
    if (value === undefined || value === null || typeof value !== 'string') {
      throw new ParsingError(errorMessage);
    }

    if (isValidUUID(value)) {
      return value as UUID;
    }

    throw new ParsingError(errorMessage);
  }

  private constructor() {
    throw new Error('This class cannot be instantiated');
  }
}
