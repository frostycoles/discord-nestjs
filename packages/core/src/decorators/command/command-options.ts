import { ApplicationCommandTypes } from 'discord.js/typings/enums';

import { TInclude } from '../../definitions/types/include.type';

/**
 * Describe base command options
 */
export interface CommandOptions {
  /**
   * Command name
   */
  name: string;

  /**
   * Command description (Must be a blank string for context menu commands)
   */
  description: string;

  /**
   * Include subgroups and subcommands
   */
  include?: TInclude[];

  /**
   * Set default permission
   */
  defaultPermission?: boolean;

  /**
   * Command Type (Slash or Context Menu)
   */
  type?: ApplicationCommandTypes;
}
