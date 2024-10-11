import { TestBed } from '@angular/core/testing'
import { CalulatorService } from './calulator.service'
import { LoggerService } from './logger.service'

/*

//true objet spying specific methods
const loggerReal = new LoggerService();
spyOn(loggerReal, 'log');

//mock object with only spy methods.
const loggerMock = jasmine.createSpyObj('LoggerService', ["log","return"]);
loggerMock.return.and.returnValue(2)

*/

fdescribe('CalculatorService', () => {
  let calculator: CalulatorService
  let loggerSpy: any

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log', 'return'])
    loggerSpy.return.and.returnValue(2)
    
    //mock services for unit test (not for integration)
    TestBed.configureTestingModule({
      providers: [
        CalulatorService,
        LoggerService,
        {
          provide: LoggerService,
          useValue: loggerSpy,
        },
      ],
    })

    //calculator = new CalulatorService(loggerSpy)
    calculator = TestBed.get(CalulatorService);
  })

  xit('should not be executed', () => {
    let result = calculator.return(2)
    expect(result).toBe(2)
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)
    expect(loggerSpy.return).toHaveBeenCalledTimes(1)
  })

  it('should add number', () => {
    let result = calculator.add(2, 2)
    expect(result).toBe(4)
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)

    result = calculator.return(2)
    expect(result).toBe(2)
    expect(loggerSpy.return).toHaveBeenCalledTimes(1)
  })

  it('should substract number', () => {
    let result = calculator.substract(2, 2)
    expect(result).toBe(0)
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)

    result = calculator.return(2)
    expect(result).toBe(2)
    expect(loggerSpy.return).toHaveBeenCalledTimes(1)
  })

  it('should return number', () => {
    let result = calculator.return(2)
    expect(result).toBe(2)
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)
    expect(loggerSpy.return).toHaveBeenCalledTimes(1)
  })
})
