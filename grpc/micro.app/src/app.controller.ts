import { Controller, Logger } from '@nestjs/common'
import { AppService } from './app.service'
import { GrpcMethod } from '@nestjs/microservices'
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js'

interface INumberArray {
  data: number[]
}

interface ISumOfNumberArray {
  sum: number
}

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController')

  // Inject the app service
  constructor(private appService: AppService) { }

  @GrpcMethod()//'AppController', 'Accumulate'
  // Define the logic to be executed
  accumulate(numberArray: INumberArray, metadata: Metadata, call: ServerUnaryCall<any, any>): ISumOfNumberArray {
    this.logger.log(`Adding ${numberArray.data.toString()}`)

    return { sum: this.appService.accumulate(numberArray.data) }
  }
}
