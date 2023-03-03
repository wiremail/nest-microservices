import { Body, Controller, Logger, Post } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController')

  // Inject the app service
  constructor(private appService: AppService) { }

  // Map the 'POST /add' route to the method
  @Post('/add')
  // Define the logic to be execute
  accumulate(@Body('data') data: number[]) {
    this.logger.log(`Adding ${data.toString()}`)

    // Use app service to calc result & return
    return this.appService.accumulate(data)
  }

}
