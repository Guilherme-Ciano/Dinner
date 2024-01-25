import { ReactNode } from "react";
import { MainContent, MainContentWrapper, Wrapper } from "./styles";
import Sidebar from "../sidebar";
import Navbar from "../navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Navbar />
      <MainContentWrapper>
        <Sidebar />
        <MainContent>{children}</MainContent>
      </MainContentWrapper>
    </Wrapper>
  );
}
