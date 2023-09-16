import React, { useState } from 'react';

import './index.css';
import { Render } from './hooks/render';
import { SideBar } from './componentes/sideBar/sideBar';
import Display from './componentes/display/display';
import { TitleBar } from './componentes/titlebar/titlebar';

const Index = () => {
	const [unit, setUnit] = useState(0);
	const [lesson, setLesson] = useState(1);

	const handleResetLesson = (resetTo: number) => {
		setLesson(0);
	};

	const handleSetUnit = (unit: number) => {
		setUnit(unit);
	};
	const handleSetLesson = (setTo: number) => {
		setLesson(setTo);
	};

	return (
		<div className="root">
			<TitleBar />
			<SideBar
				unit={unit}
				resetLesson={handleResetLesson}
				setUnit={handleSetUnit}
			/>
			<Display
				setLesson={handleSetLesson}
				currentLesson={lesson}
				unit={unit}
			/>
			<div></div>
		</div>
	);
};

Render(<Index />);
