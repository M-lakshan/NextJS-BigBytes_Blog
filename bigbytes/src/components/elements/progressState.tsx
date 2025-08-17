import { FaSpinner } from 'react-icons/fa';
import clsx from 'clsx';

type ProgressStateProps = {
  classList?: {
    cs?: string[];
  }
  state?: string
};

export default function ProgressState({ classList, state }: ProgressStateProps) {
  const cls = clsx("progression", classList?.cs);

  return <h5 className={cls}>
    <FaSpinner className="state_icon"/>
    <em>{(state) ? state : "Loading"}...</em>
  </h5>
}