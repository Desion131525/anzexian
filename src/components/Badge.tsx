import type { FC, ReactNode } from 'react';
import '../styles/badge.css';

type BadgeProps = {
  tone?: 'default' | 'success' | 'warning' | 'danger';
  children: ReactNode;
};

const toneClassMap = {
  default: 'badge--default',
  success: 'badge--success',
  warning: 'badge--warning',
  danger: 'badge--danger'
} as const;

const Badge: FC<BadgeProps> = ({ tone = 'default', children }) => {
  return <span className={`badge ${toneClassMap[tone]}`}>{children}</span>;
};

export default Badge;
