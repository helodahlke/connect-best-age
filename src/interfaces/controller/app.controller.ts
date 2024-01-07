import { Controller, Get, Post } from '@nestjs/common'
import { AppService } from '../../app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('/profile')
  getProfile(): string {
    return 'this url will show user profile'
  }

  @Post('/message')
  sendMessage(): string {
    return 'this url will send message';
  }
  @Post('/profile')
  saveProfile(): string {
    return 'this url will save profile';
  }

  @Get('/users')
  allUsers() {
    return 'this url will return all the users';
  }

  @Get('/friends')
  showFriends(){
    return 'this method will return all the friends that the user has';
  }

  @Get('/listTalks')
  showTalks(){
    return 'this method will return all the talks that happened between the user and its friend';
  }

  @Post('/startFriendship')
  startFriendship(){
    return 'this method will connect users to make them friends';
  }

  @Post('/saveFavoriteAction')
  saveAction(){
    return 'this method will save the user favorite action';
  }
  @Get('/favoriteAction')
  returnAction(){
    return 'this method will return the users favorite action';
  }

}
