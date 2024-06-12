import { Providers } from './providers';
import './style.scss';
import { Routing } from './routing';

export const App: React.FC = () => {
  return (
    <Providers>
      <main className="dark text-foreground bg-background w-full h-[100vh]">
        <Routing />
      </main>
    </Providers>
  );
};
