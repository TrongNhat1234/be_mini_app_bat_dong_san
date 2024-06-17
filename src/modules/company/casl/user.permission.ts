import { Subject } from '@casl/ability'
import { Roles } from '@common/enum/role.enum'
import { UserEntity } from '@root/modules/users/entities/user.entity'
import { Actions, Permissions } from 'nest-casl'

export const permissions: Permissions<Roles, Subject, Actions> = {
  everyone({ can }) {
    can(Actions.read, UserEntity)
    can(Actions.create, UserEntity)
  },
  admin({ can }) {
    can(Actions.manage, UserEntity)
  },
  user({ can, cannot, user }) {
    can(Actions.update, UserEntity, {
      id: user.id,
    })
    cannot(Actions.delete, UserEntity)
  },
}
