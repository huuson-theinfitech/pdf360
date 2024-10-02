import { Breakpoint, Collapse, Stack, useMediaQuery, useTheme } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';

import { ChevronDownSvg, ChevronRightSvg } from '@/assets/icons';
import { StyledMenuList, StyledSidebarNavItem, StyledSubNavHead } from './SubNav.styles';

interface ISubNavProps {
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
  dropdown: {
    title: string;
    url: string;
    counter?: string;
    colorCounter?: string;
  }[];
  onClick?: () => void;
  foldBreakpoint?: Breakpoint;
}

const SubNav: React.FC<ISubNavProps> = ({
  title,
  icon,
  dropdown,
  isActive,
  onClick,
  foldBreakpoint,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = React.useState(isActive);

  const isFolded = useMediaQuery(theme.breakpoints.down(foldBreakpoint ?? 'xs'));

  const handleHeaderClick = () => {
    if (!isFolded && !isActive) {
      setIsExpanded((prev) => !prev);
    } else {
      onClick?.();
    }
  };

  return (
    <Stack direction='column'>
      <StyledSubNavHead
        title={title}
        startIcon={icon}
        className={cn({
          expanded: isExpanded,
          active: isFolded && foldBreakpoint && isActive,
        })}
        endIcon={<ChevronDownSvg />}
        onClick={handleHeaderClick}
        foldBreakpoint={foldBreakpoint}
        disableRipple
      />

      <Collapse in={!isFolded && isExpanded} timeout='auto' unmountOnExit>
        <StyledMenuList>
          {dropdown.map(({ title, url, counter }) => (
            <StyledSidebarNavItem
              key={title}
              url={url}
              title={title}
              badge={counter}
              foldBreakpoint={foldBreakpoint}
              endIcon={<ChevronRightSvg />}
            />
          ))}
        </StyledMenuList>
      </Collapse>
    </Stack>
  );
};

export default SubNav;
