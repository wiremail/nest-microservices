import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { Transport, MicroserviceOptions } from '@nestjs/microservices'
import { AppModule } from './app.module'

// Create a logger instance
const logger = new Logger('Main')

// Microcervice options object
const microserviceOptions: MicroserviceOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://user:password@localhost:5672'],
    queue: 'calc_queue',
    queueOptions: {
      durable: false
    },
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
