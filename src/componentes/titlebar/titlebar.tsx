import React from 'react';
import { appWindow } from '@tauri-apps/api/window';
import './titlebar.scss';
import closeIcon from './img/close.svg';
import minimizeIcon from './img/minimize.svg';

export const TitleBar = () => {
	return (
		<div data-tauri-drag-region className="titlebar">
			<div className="titlebar-button" onClick={() => appWindow.minimize()}>
				<img className="titleIcon" src={minimizeIcon} alt="minimize" />
			</div>
			<div className="titlebar-button" onClick={() => appWindow.close()}>
				<img className="titleIcon" src={closeIcon} alt="close" />
			</div>
		</div>
	);
};
