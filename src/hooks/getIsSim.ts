import React from 'react';

export const useIsSim = (unit: number, lesson: number) => {
	const [isSim, setIsSim] = React.useState(false);

	React.useEffect(() => {
		if (
			(unit === 1 && lesson === 0) ||
			(unit === 1 && lesson === 2) ||
			(unit === 1 && lesson === 3) ||
			(unit === 1 && lesson === 5) ||
			(unit === 1 && lesson === 6) ||
			(unit === 1 && lesson === 7) ||
			(unit === 1 && lesson === 9) ||
			(unit === 1 && lesson === 11) ||
			(unit === 1 && lesson === 12) ||
			(unit === 1 && lesson === 14) ||
			(unit === 1 && lesson === 15) ||
			(unit === 1 && lesson === 17) ||
			(unit === 1 && lesson === 18) ||
			(unit === 1 && lesson === 19) ||
			(unit === 1 && lesson === 20) ||
			(unit === 1 && lesson === 21) ||
			(unit === 1 && lesson === 22) ||
			(unit === 1 && lesson === 23) ||
			(unit === 1 && lesson === 29) ||
			(unit === 0 && lesson === 0) ||
			(unit === 0 && lesson === 1) ||
			(unit === 0 && lesson === 3) ||
			(unit === 0 && lesson === 4) ||
			(unit === 0 && lesson === 5) ||
			(unit === 0 && lesson === 6) ||
			(unit === 0 && lesson === 8) ||
			(unit === 0 && lesson === 9) ||
			(unit === 0 && lesson === 10) ||
			(unit === 0 && lesson === 37) ||
			(unit === 2 && lesson === 0) ||
			(unit === 2 && lesson === 1) ||
			(unit === 2 && lesson === 2)
		) {
			setIsSim(true);
		} else {
			setIsSim(false);
		}
	}, [unit, lesson]);

	return isSim;
};
