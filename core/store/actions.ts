import { Message } from 'discord.js';
import { action } from 'typesafe-actions';
import { CommandHandler, CommandListenerMeta } from 'types';
import ActionTypes from './actionTypes';

export const initApplication = () => action(ActionTypes.INIT_APPLICATION);

export const initApplicationSuccess = () =>
  action(ActionTypes.INIT_APPLICATION_SUCCESS);

export const verifyCommand = (message: Message) =>
  action(ActionTypes.VERIFY_COMMAND, { message });

export const processAsyncCommand = (
  name: string,
  commandHandler: CommandHandler,
  message: Message,
  params: string[]
) =>
  action(ActionTypes.RUN_ASYNC_COMMAND, {
    name,
    commandHandler,
    message,
    params
  });

export const processQueuedCommand = (
  name: string,
  commandHandler: CommandHandler,
  message: Message,
  params: string[]
) =>
  action(ActionTypes.RUN_QUEUED_COMMAND, {
    name,
    commandHandler,
    message,
    params
  });

export const addCommandMeta = (
  depthArray: string[],
  meta: CommandListenerMeta
) => action(ActionTypes.ADD_COMMAND_META, { depthArray, meta });

export const addCooldown = (
  userId: string,
  command: string,
  lastCommandTime: number
) => action(ActionTypes.ADD_COOLDOWN, { userId, command, lastCommandTime });

export const updateAccessToken = (
  clientId: string,
  clientToken: string,
  expireIn: number,
  token: string
) =>
  action(ActionTypes.UPDATE_ACCESS_TOKEN, {
    clientId,
    clientToken,
    token,
    expireIn
  });
