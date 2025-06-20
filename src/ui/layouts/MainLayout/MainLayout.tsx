import { Flex } from '@/ui/components/Flex/Flex';

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <Flex asChild justify="center">
    <main className="min-h-screen bg-lightBlue">
      <div className="w-full">{children}</div>
    </main>
  </Flex>
);

export default MainLayout;
