import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('Member') private memberTable: Model<any>){}
  
  async getItems() {
    return await this.memberTable.find();
  }

  createItem() {
    this.memberTable.create([
      {
        fistname: `firstname ${Math.random()}`,
        lastname: `lastname ${Math.random()}`,
        email: `email_${Math.random()}@gmail.com`,
        password: 12345,
        id: 1,
        position: 'post',
        image: 'img',
        role: 2
      }
    ])
  }
}
