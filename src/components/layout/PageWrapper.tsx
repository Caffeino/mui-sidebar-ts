import { ReactNode } from 'react';

type Props = {
	state?: string;
	children: ReactNode;
};

const PageWrapper = ({ state, children }: Props) => {
	return <>{children}</>;
};

export default PageWrapper;
