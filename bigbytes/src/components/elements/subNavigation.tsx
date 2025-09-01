import clsx from 'clsx';
import { FaHome } from 'react-icons/fa';
import { SubNavNode } from '@/types';
import Link from 'next/link';

type SubNavigationProps = {
  classList?: string[];
  base_node: SubNavNode;
  mid_nodes?: SubNavNode[];
  end_node?: SubNavNode;
  expander?: boolean;
};

export default function SubNavigation({ classList, base_node, mid_nodes, end_node, expander }: SubNavigationProps) {
  const cls = clsx("sub_nav_tab", classList);

  return <div className={cls}>
    <Link href={`/`} className="root_node">
      <FaHome className="sub_nav_icon" />
      <span className="context">Home</span>
    </Link>
    <Link href={`/${base_node.nav_url}`} className="base_node">
      <span className="context"></span>
    </Link>
    {(mid_nodes) && mid_nodes.map(((mn,idx) => <Link 
      key={`mid_node_${idx+1}`}
      href={`/${mn.nav_url}`} className={`mid_nav mid_nav_${idx+1}`}
      >
      <span className="context">{mn.nav_for}</span>
    </Link>))}
    {(expander) && <span className="expander">&nbsp;</span>}
    {(end_node) &&<Link href={`/${end_node.nav_url}`} className="end_node">
      <span className="context">{end_node.nav_for}</span>
    </Link>}
  </div>
}