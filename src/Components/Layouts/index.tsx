import { ReactNode } from 'react';
import Header from './NavigationBar';

type LayoutProps = {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  );
}

export default Layout;