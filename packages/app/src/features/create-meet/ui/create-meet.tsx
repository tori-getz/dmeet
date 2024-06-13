import { Button, Input } from '@nextui-org/react';
import { BiUser, BiEditAlt } from 'react-icons/bi';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createRoomFx } from '../model';
import { useNavigate } from '@tanstack/react-router';
import { useUnit } from 'effector-react';
import { $contract } from '~/shared/blockchain';
import { useState } from 'react';
import { ethers } from 'ethers';

export const ValidationSchema = z.object({
  username: z.string().min(1, { message: 'Please, enter your name' }),
  meetName: z.string().min(1, { message: 'Please, enter your name' }),
});

export type ValidationSchema = z.infer<typeof ValidationSchema>;

export const CreateMeet: React.FC = () => {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState<boolean>(false);
  const contract = useUnit($contract);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(ValidationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (form) => {
    try {
      setLoading(true);
      await createRoomFx(form);

      const listener = (id: string) => {
        setLoading(false);
        // console.log('room created');
        // contract!.removeListener('RoomCreated', listener);
        navigate({ to: '/room/$roomId', params: { roomId: id } });
      };

      const wsProvider = new ethers.WebSocketProvider(
        import.meta.env.VITE_WSS_PROVIDER
      );
      const wsContract = contract!.connect(wsProvider);

      wsContract.on('RoomCreated', listener);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl">Create a new meet</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('username')}
          isInvalid={errors.username !== undefined}
          errorMessage={errors.username?.message ?? ''}
          startContent={<BiUser size={20} />}
          placeholder="Your name"
        />
        <Input
          {...register('meetName')}
          isInvalid={errors.meetName !== undefined}
          errorMessage={errors.meetName?.message ?? ''}
          startContent={<BiEditAlt size={20} />}
          placeholder="Meet name"
        />
        <Button
          isLoading={isLoading}
          onClick={handleSubmit(onSubmit)}
          color="secondary"
        >
          Create meet
        </Button>
      </form>
    </div>
  );
};
