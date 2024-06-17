import { Injectable } from '@nestjs/common'
import { UserEntity } from '@root/modules/users/entities/user.entity'
import { UserRepository } from '@root/modules/users/repositories/user.repository'
import { Request, SubjectBeforeFilterHook } from 'nest-casl'

@Injectable()
export class UserHook implements SubjectBeforeFilterHook<UserEntity, Request> {
  constructor(private readonly userRepository: UserRepository) {}
  async run({ params }: Request) {
    return this.userRepository.create({
      id: params.id,
    })
  }
}
