import Navbar from "./components/Navbar";
import FeedCard from "./components/FeedCard"
import { ThemeProvider } from "./components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <main className="">
        <Navbar />
        <div>
          <FeedCard />
        </div>

      </main>
    </ThemeProvider>

  )
    ;
}
