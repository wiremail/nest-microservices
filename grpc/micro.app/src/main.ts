import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { Transport, MicroserviceOptions } from '@nestjs/microservices'
import { AppModule } from './app.module'
import { join } from 'path'

// Create a logger instance
const logger = new Logger('Main')

//Microcervice options object
const microserviceOptions: MicroserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    protoPath: join(__dirname, '../src/app.proto'),
    url: 'localhost:3321'
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions
  )

  await app.listen()

  logger.log('Microservice is listening...')
}

bootstrap()
