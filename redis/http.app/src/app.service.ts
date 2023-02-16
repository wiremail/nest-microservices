import { Injectable } from '@nestjs/common'
import { Transport, ClientProxyFactory, ClientProxy } from '@nestjs/microservices'

@Injectable()
export class AppService {

  private client: ClientProxy

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379
      }
    })
  }

  public accumulate(data: number[]) {
    const pattern = { cmd: 'sum' }
    return this.client.send<number, number[]>(pattern, data)
  }
}
