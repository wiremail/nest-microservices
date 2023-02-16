import { Injectable } from '@nestjs/common'
import { Transport, ClientProxyFactory, ClientProxy } from '@nestjs/microservices'

@Injectable()
export class AppService {

  private client: ClientProxy


  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3500
      }
    })
  }

  public accumulate(data: number[]) {
    const pattern = { cmd: 'sum' }
    return this.client.send<number, number[]>(pattern, data)
  }
}
