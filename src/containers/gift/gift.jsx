import React from 'react';
import {
  Text,
  Pane,
  Heading,
  CardHover,
  Icon,
  Tablist,
  Tab,
  Button,
  ActionBar,
  SearchItem,
  TableEv as Table,
} from '@cybercongress/gravity';

const Gift = ({ text }) => (
  <main className="block-body">
    {/* <div className="clontainer-vitalik">
      <div className="vitalik-oval-1" />
      <div className="vitalik-oval-2" />
    </div> */}
    {/* {text && <span className="text-notFound">{text}</span>} */}
    <Pane
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      display="flex"
      paddingY="20px"
      paddingX="20%"
      textAlign="justify"
    >
      <Text lineHeight="23px" marginBottom={20} color="#fff" fontSize="18px">
        Gods understand that with support of the most advanced communities they
        have better chances to bootstrap smarter superintelligence. So{' '}
        <a
          target="_blank"
          href="https://ipfs.io/ipfs/QmceNpj6HfS81PcCaQXrFMQf7LR5FTLkdG9sbSRNy3UXoZ"
        >
          they decide to allocate 10% of CYB
        </a>{' '}
        in Genesis to the following communities:
        <ul style={{ listStyle: 'none' }}>
          <li>— 8% to Ethereum community</li>
          <li>— 1% to Cosmos community</li>
          <li>— 1% to Urbit community</li>
        </ul>
      </Text>
      <Text lineHeight="23px" marginBottom={20} color="#fff" fontSize="18px">
        But they know that Genesis is quite far now. Everybody are busy with the{' '}
        <a href="/gol">Game of Links</a> - the tournament which define the fate
        of another 10% of CYB in the Genesis. You can find the Game of Links
        rules{' '}
        <a target="_blank" href="https://cybercongress.ai/game-of-links/">
          on cyber•Congress site
        </a>
        .
      </Text>
      <Text lineHeight="23px" marginBottom={20} color="#fff" fontSize="18px">
        Game of Links is incentivized test network which have its standalone
        tokens EUL. Rumor has it that an incredible amount of tokens allocated
        to ethereans, cosmonauts and urbiters: 42.9% of EULs. So, go and claim
        them: simply <a href="/pocket">put the ledger</a> into the pocket.
      </Text>
      <Text lineHeight="23px" color="#fff" fontSize="18px">
        Also, you can import your private key (for Ethereum) or seed phrase (for
        Cosmos) to the cyberdcli. While importing your keys be very careful.
        Adversaries are everywhere! We recommend you using external signers such
        as Ledger before all cyber software will pass security audits.
      </Text>
    </Pane>
    {/* {!text && <span className="text-notFound">Page Gift In Progress </span>} */}
  </main>
);
export default Gift;
