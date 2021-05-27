// React
import { useState, useEffect, cloneElement, Fragment, ReactChild } from 'react';

// Components
import Navbar from '@/components/0-layout/Navbar';

// Contract ABIs
import ElectionAbi from '@/contract-json-abi/Election.json';

// Web3 Helpers
import { loadWeb3 } from '@/web3/loadWeb3';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setAccountAddress } from '@/redux/slices/CurrentAccountAddressSlice';
import { setCandidates } from '@/redux/slices/CandidatesSlice';

// React Types
import { ReactNode, FC } from 'react';

// Redux Types
import { AppState } from '@/redux/store';

// Component Level Types
interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  const [electionState, setElectionState] = useState();

  const [loading, setLoading] = useState(true);

  const {
    CurrentAccountAddress: { currentAccountAddress },
  } = useSelector<AppState, AppState>((state) => state);

  const dispatch = useDispatch();

  const loadBlockchainData = async () => {
    setLoading(true);
    // @ts-ignore
    // Get Web3 Instance
    const web3 = window.web3;
    // Asynchronously get accounts
    const accounts = await web3.eth.getAccounts();
    // Target first account
    const account = accounts[0];
    // Dispatch first account to redux store
    dispatch(setAccountAddress({ currentAccountAddress: account }));

    // Asynchronously get network ID
    const networkId = await web3.eth.net.getId();
    // @ts-ignore
    const networkData = ElectionAbi.networks[networkId];
    if (networkData) {
      const election = new web3.eth.Contract(
        ElectionAbi.abi,
        networkData.address
      );
      const candidate1 = await election.methods.candidates(1).call();
      const candidate2 = await election.methods.candidates(2).call();
      dispatch(
        setCandidates({
          candidates: [
            {
              id: candidate1.id,
              name: candidate1.name,
              voteCount: candidate1.voteCount,
            },
            {
              id: candidate2.id,
              name: candidate2.name,
              voteCount: candidate2.voteCount,
            },
          ],
        })
      );
      setElectionState(election);
      setLoading(false);
    } else {
      window.alert('The Smart Contract is not deployed to the current network');
    }
  };

  const voteCandidate = async (candidateid: number) => {
    setLoading(true);
    await (electionState as any).methods
      .Vote(candidateid)
      .send({ from: currentAccountAddress })
      .on('transactionhash', () => {
        console.log('Vote Successful');
      });
    loadBlockchainData();
    setLoading(false);
  };

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  return (
    <Fragment>
      <Navbar currentAccountAddress={currentAccountAddress} />
      {loading ? (
        <div className="fixed inset-0 h-full max-w-full">
          <div className="flex justify-center items-center container mx-auto h-full">
            <div>please wait while we load account data</div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 h-full max-w-full">
          <div className="flex justify-center items-center container mx-auto h-full">
            {cloneElement(children as any, {
              voteCandidate: voteCandidate,
            })}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Layout;
