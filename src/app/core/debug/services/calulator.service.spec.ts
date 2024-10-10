import { CalulatorService } from "./calulator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {
  it('should add number', () => {
    const calculator=new CalulatorService(new LoggerService())
    const result = calculator.add(2,2);
    expect(result).toBe(4);
  });
});
