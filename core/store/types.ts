import CommandListenerMeta from 'types/CommandListenerMeta';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface AccessToken {
  token: string;
  expireIn: number;
  clientToken: string;
}

/**
 * States
 */

export type ApplicationActions = ActionType<typeof actions>;

export interface UserCooldownState {
  [command: string]: number;
}

export interface CooldownState {
  [userId: string]: UserCooldownState;
}

export interface CommandMetaState {
  [key: string]: CommandListenerMeta;
}

export interface MetaDataState {
  commands: CommandMetaState;
  defaultPrefix: string;
  ownerId: string;
}

export interface AccessTokenState {
  [clientId: string]: AccessToken;
}

export interface ApplicationRootState {
  meta: MetaDataState;
  cooldown: CooldownState;
  accessToken: AccessTokenState;
}
