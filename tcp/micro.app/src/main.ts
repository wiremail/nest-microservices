import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { Transport, MicroserviceOptions } from '@nestjs/microservices'
import { AppModule } from './app.module'

// Create a logger instance
const logger = new Logger('Main')

// Microcervice options object
const microserviceOptions: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 3500
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
