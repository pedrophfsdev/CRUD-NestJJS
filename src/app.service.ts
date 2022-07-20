import { Body, Injectable } from '@nestjs/common';
import { CreateHelloDTO } from './dto/CreateHello.dto';
import { UpdateHelloDTO } from './dto/UpdateHello.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Pelo Sport Tudo!';
  }
  createHello(data: CreateHelloDTO) : string {
    
    return `Hello ${data.name.toUpperCase()}`;
  }
  updateHello(id: number, data: UpdateHelloDTO) : string {
  
    return `Hello ${data.name.toUpperCase()}`;
  }
}
