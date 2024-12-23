import { IconInterface } from './icon.model';
import outlineIconsLiteral from './outilineIcons';
import solidIconsLiteral from './solidIcons';

export const Icon = ({ icon, type }: IconInterface) => {
  return type === 'outline'
    ? outlineIconsLiteral[icon]
    : solidIconsLiteral[icon];
};

Icon.displayName = 'Icon';
