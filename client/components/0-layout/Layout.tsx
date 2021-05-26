// React Types
import { ReactNode, FC } from 'react';

// Component Level Types
interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 h-full max-w-full">
      <div className="flex justify-center items-center container mx-auto h-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;
