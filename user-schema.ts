/* eslint-disable @typescript-eslint/no-inferrable-types */
// We need to explicitly set the types because `typescript-rest-swager` doesn't do inference

import { IsString } from 'Service-core';

export class ICreateUser {
  /** Name of the User */
  @IsString()
  name: string = '';

  /** Description for the User */
  @IsString({optional: true})
  description?: string = undefined;
}


export interface IUserDTO {
  /** UUID of the User */
  id: string;

  /** Name of the User */
  name: string;

  /** Description for the User */
  description: string;
}