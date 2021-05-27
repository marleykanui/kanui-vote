// React
import { useEffect, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '@/redux/store';

// Component Level Props
interface VoteHomeProps {
  voteCandidate: (candidateid: number) => void;
}

const VoteHome: FC<VoteHomeProps> = ({ voteCandidate }) => {
  const {
    Candidates: { candidates },
  } = useSelector<AppState, AppState>((state) => state);

  const [selectedCandidate, setSelectedCandidate] = useState('');

  const handleChange = (e: any) => {
    setSelectedCandidate(e.target.value);
  };

  const handleVote = (e: any) => {
    e.preventDefault();
    if (Number(selectedCandidate) !== 0) {
      voteCandidate(Number(selectedCandidate));
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        {candidates.map((candidate) => {
          return (
            <div className="p-8" key={candidate.id}>
              <h1>{`Candidate: ${candidate.id}`}</h1>
              <h2>{candidate.name}</h2>
              <h3>{candidate.voteCount}</h3>
            </div>
          );
        })}
      </div>
      <div className="voteform">
        <form onSubmit={handleVote}>
          <select
            name="candidate"
            className="form-control"
            onChange={handleChange}
          >
            <option value={selectedCandidate}>Select</option>
            {candidates.map((candidateVote) => {
              return (
                <option key={candidateVote.id} value={candidateVote.id}>
                  {candidateVote.name}
                </option>
              );
            })}
          </select>
          <button className="btn btn-primary mt-2 btn-md w-180">
            Vote {selectedCandidate}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VoteHome;
