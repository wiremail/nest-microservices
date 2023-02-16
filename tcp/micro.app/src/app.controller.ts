
import { Controller, Logger } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'
import { AppService } from './app.service'

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController')

  // Inject the app service
  constructor(private appService: AppService) { }

  // Define the message pattern
  @MessagePattern({ cmd: 'sum' })
  // Define the logic to be executed
  async accumulate(data: number[]): Promise<number> {
    this.logger.log(`Adding ${data.toString()}`)

    return this.appService.accumulate(data)
  }
}
