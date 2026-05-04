import Footer from "@/components/pages/footer";
import { Cursor } from "@/components/ui/cursor";
import NavigationBar from "@/components/ui/nav-bar";
import LenisProvider from "@/providers/lenis.provider";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Cursor />
      <LenisProvider>
        <NavigationBar />
        <main className="**:data-[block=contain]:container **:data-[block=contain]:mx-auto">
          {children}
        </main>
        <Footer />
      </LenisProvider>
    </div>
  );
}
