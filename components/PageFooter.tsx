import LinkOut from "components/common/LinkOut";

interface Props {
  lastUpdatedAtTicks: number;
}

const PageFooter = ({ lastUpdatedAtTicks }: Props) => (
  <div className="pt-1 pb-2 mt-32 border-t border-zinc-400">
    Designed by <LinkOut url="https://github.com/BodyCopy">BodyCopy</LinkOut>{" "}
    and developed by{" "}
    <LinkOut url="https://github.com/youssefm">youssefm</LinkOut> using{" "}
    <LinkOut url="https://nextjs.org/">Next.js</LinkOut>
    <br />
    Made possible thanks to{" "}
    <LinkOut url="https://www.17lands.com">17Lands</LinkOut>,{" "}
    <LinkOut url="https://scryfall.com">Scryfall</LinkOut>,{" "}
    <LinkOut url="https://www.flaticon.com/authors/freepik">Freepik</LinkOut>,{" "}
    <LinkOut url="https://keyrune.andrewgioia.com">Keyrune</LinkOut>, and{" "}
    <LinkOut url="https://mana.andrewgioia.com">Mana</LinkOut>
    <br />
    <em>Last updated at: {new Date(lastUpdatedAtTicks).toLocaleString()}</em>
  </div>
);

export default PageFooter;
