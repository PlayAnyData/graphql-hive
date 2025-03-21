import { ReactElement } from 'react';
import clsx from 'clsx';
import { Item, RadioGroupItemProps, RadioGroupProps, Root } from '@radix-ui/react-radio-group';

export const RadioGroup = ({ children, className, ...props }: RadioGroupProps): ReactElement => {
  return (
    <Root className={clsx('flex flex-col justify-items-stretch gap-4', className)} {...props}>
      {children}
    </Root>
  );
};

export const Radio = ({ children, className, ...props }: RadioGroupItemProps): ReactElement => {
  return (
    <Item
      className={clsx(
        'relative overflow-hidden rounded-sm border text-left hover:border-orange-500/50 focus:ring data-[state=checked]:border-orange-500',
        className,
      )}
      {...props}
    >
      {children}
    </Item>
  );
};
