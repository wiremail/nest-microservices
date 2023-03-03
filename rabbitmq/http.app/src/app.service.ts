import { Injectable } from '@nestjs/common'
import { Transport, ClientProxyFactory, ClientProxy } from '@nestjs/microservices'

@Injectable()
export class AppService {

  private client: ClientProxy

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://user:password@localhost:5672'],
        queue: 'calc_queue',
        queueOptions: {
          durable: false
        },
      }
    })
  }

  public accumulate(data: number[]) {
    const pattern = { cmd: 'sum' }
    return this.client.send<number, number[]>(pattern, data)
  }
}