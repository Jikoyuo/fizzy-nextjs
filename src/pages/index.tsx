import { Button } from "~/components/ui/button";
import { api } from "~/utils/api";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Home() {
  const [themeChanged, setThemeChanged] = useState<string>('dark');
  const hello = api.post.hello.useQuery({ message: 2 });

  const handleChangeTheme = () => {
    if (themeChanged === 'dark') {
      setThemeChanged('light');
    } else {
      setThemeChanged('dark');
    }
    setTheme(themeChanged);
  }

  const { setTheme } = useTheme();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-3xl text-primary" >
          Hello World
        </h1>
        <Button>
          Click Me !
        </Button>
        <Button size={'icon'} onClick={handleChangeTheme} >
          {themeChanged === 'dark' ? <Moon /> : <Sun />}
        </Button>
      </main>
    </>
  );
}
