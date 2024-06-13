import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/room/$roomId')({
  component: () => <div>Hello /room/index/$roomId!</div>,
});
