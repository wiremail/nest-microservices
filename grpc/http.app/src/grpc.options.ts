import { Transport, ClientOptions } from '@nestjs/microservices'
import { join } from 'path'

// Microcervice options object
export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    protoPath: join(__dirname, '../src/app.proto'),
    url: 'localhost:3321'
  }
}