"use client";
import { useTheme } from '../components/theme-provider';
import { ClientSideFunction } from '../utils/client-utils';

export default function ClientRoutePage() {
  const theme = useTheme()
  const result = ClientSideFunction()
  return (
    <h1 style={{
      color: theme.colors.secondry
    }}>
      Client Route {result}
    </h1>
  );
}