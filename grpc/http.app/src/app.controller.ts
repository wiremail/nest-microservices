import { Body, Controller, Logger, Post, OnModuleInit } from '@nestjs/common'
import { Client, ClientGrpc } from '@nestjs/microservices'
import { IGrpcService } from './grpc.interface'
import { microserviceOptions } from './grpc.options'

@Controller()
export class AppController implements OnModuleInit {
  // Create a logger instance
  private logger = new Logger('AppController')

  @Client(microserviceOptions)

  private client: ClientGrpc
  private grpcService: IGrpcService

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController')
  }

  // Map the 'POST /add' route to the method
  @Post('/add')
  // Define the logic to be execute
  accumulate(@Body('data') data: number[]) {
    this.logger.log(`Adding ${data.toString()}`)

    // Use app service to calc result & return
    return this.grpcService.accumulate({ data })
  }

}
