import {ValidationError} from "./validation-error";

/**
 * Represents an error that occurs during parsing.
 */
export class ParsingError extends ValidationError {
  /**
   * Constructor for ParsingError.
   * @param message An error message.
   */
  public constructor(message: string) {
    super(message);
    this.name = 'ParsingError';
  }
}
