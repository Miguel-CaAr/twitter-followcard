import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        initialIsFollowing={true}
        formatUserName={formatUserName}
        userName={"MikaelKare"}
        name={"Mikael Kare"}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName={"finnTheHuman"}
        name={"finnTheHuman"}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName={"jakeAdventure"}
        name={"jakeTheDog"}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName={"goku"}
        name={"kakaroto"}
      />
    </section>
  );
}
