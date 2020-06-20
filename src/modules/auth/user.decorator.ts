import { createParamDecorator } from '@nestjs/common';
import { UserDto } from '../user/tdo/user.dto';

export const GetUser = createParamDecorator(
  (data, req): UserDto => {
    return req.user;
  },
);
