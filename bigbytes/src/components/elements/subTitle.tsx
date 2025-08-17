import clsx from 'clsx';

type SubTitleProps = {
  classList?: string[];
  elm_for: string;
  expander?: boolean;
};

export default function SubTitle({ classList, elm_for, expander }: SubTitleProps) {
  const cls = clsx("sub_title", classList);

  return <h2 className={cls}>
    <span className="context">{elm_for}</span>
    {(expander) && <span className="expander">&nbsp;</span>}
  </h2>
}