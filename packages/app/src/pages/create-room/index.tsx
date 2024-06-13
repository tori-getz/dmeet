import { createFileRoute } from '@tanstack/react-router';
import { DevicesSelect } from '~/entities/devices';
import { CreateMeet } from '~/features/create-meet';
import { UserPreview } from '~/features/user-preview';
import { Header } from '~/shared/ui/header';

const CreateRoomPage: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center h-full gap-8">
      <Header />
      <div className="flex flex-col gap-4">
        <UserPreview />
        <DevicesSelect />
      </div>
      <div>
        <CreateMeet />
      </div>
    </div>
  );
};

export const Route = createFileRoute('/create-room/')({
  component: CreateRoomPage,
});
