import React, { FC, useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import './sideBar.scss';
import privateIcon from '../../img/private.svg';
import instrumentIcon from '../../img/instrument.svg';
import commercialIcon from '../../img/commercial.svg';
import crewIcon from '../../img/crew.svg';
import cfiIcon from '../../img/cfi.svg';
import cfiiIcon from '../../img/cfii.svg';
import multiIcon from '../../img/multi.svg';
import meiIcon from '../../img/mei.svg';
import atpLogo from '../../img/atp.svg';

interface SideMenuProps {
	open: boolean;
	state: any;
	setState: any;
	setUnit: any;
	unit: number;
	resetLesson: any;
}
const SideMenu: FC<SideMenuProps> = (props: any): JSX.Element => {
	const [displayText, setDisplayText] = useState<boolean>(false);
	useEffect(() => {
		setTimeout(() => setDisplayText(props.open), 100);
	}, [props.open]);

	const handleClick = (unit: number) => {
		props.resetLesson(0);
		props.setUnit(unit);
	};

	return (
		<div className={`side_menu  ${props.open ? 'open' : 'closed'}`}>
			<div className="hamburger">
				<Hamburger toggled={props.state} toggle={props.setState} rounded />
			</div>
			<div
				onClick={() => handleClick(0)}
				className={`item ${props.unit === 0 ? 'active' : 'inactive'}`}
			>
				<img className="icon" src={privateIcon} alt="private" />
				<div className={`${props.open ? 'text' : 'hideText'}`}>
					{displayText ? 'Private' : ''}
				</div>
			</div>
			<div
				onClick={() => handleClick(1)}
				className={`item ${props.unit === 1 ? 'active' : 'inactive'}`}
			>
				<img className="icon" src={instrumentIcon} alt="instrument" />
				<div className={`${props.open ? 'text' : 'hideText'}`}>
					{displayText ? 'Instrument' : ''}
				</div>
			</div>
			<div
				onClick={() => handleClick(3)}
				className={`item ${props.unit === 3 ? 'active' : 'inactive'}`}
			>
				<img className="icon" src={crewIcon} alt="crew" />
				<div className={`${props.open ? 'text' : 'hideText'}`}>
					{displayText ? 'Crew' : ''}
				</div>
			</div>
			<div
				onClick={() => handleClick(2)}
				className={`item ${props.unit === 2 ? 'active' : 'inactive'}`}
			>
				<img className="icon" src={commercialIcon} alt="commercial" />
				<div className={`${props.open ? 'text' : 'hideText'}`}>
					{displayText ? 'Commerical' : ''}
				</div>
			</div>

			<div
				onClick={() => handleClick(4)}
				className={`item ${props.unit === 4 ? 'active' : 'inactive'}`}
			>
				<img className="icon" src={cfiIcon} alt="cfi" />
				<div className={`${props.open ? 'text' : 'hideText'}`}>
					{displayText ? 'CFI' : ''}
				</div>
			</div>
			<div
				onClick={() => handleClick(5)}
				className={`item ${props.unit === 5 ? 'active' : 'inactive'}`}
			>
				<img className="icon" src={cfiiIcon} alt="cfii" />
				<div className={`${props.open ? 'text' : 'hideText'}`}>
					{displayText ? 'CFII' : ''}
				</div>
			</div>
			<div
				onClick={() => handleClick(6)}
				className={`item ${props.unit === 6 ? 'active' : 'inactive'}`}
			>
				<img className="icon" src={multiIcon} alt="multi" />
				<div className={`${props.open ? 'text' : 'hideText'}`}>
					{displayText ? 'Multi' : ''}
				</div>
			</div>
			<div
				onClick={() => handleClick(7)}
				className={`item ${props.unit === 7 ? 'active' : 'inactive'}`}
			>
				<img className="icon" src={meiIcon} alt="mei" />
				<div className={`${props.open ? 'text' : 'hideText'}`}>
					{displayText ? 'MEI' : ''}
				</div>
			</div>
			{displayText ? (
				<img
					className={` atp_logo ${props.open ? 'text' : 'hideImage'}`}
					src={atpLogo}
					alt="atp"
				/>
			) : (
				<></>
			)}
		</div>
	);
};

interface SideBarProps {
	setUnit: any;
	unit: number;
	resetLesson: any;
}

export const SideBar: FC<SideBarProps> = (props): JSX.Element => {
	const [menu, setMenu] = useState<boolean>(false);

	return (
		<div>
			<SideMenu
				resetLesson={props.resetLesson}
				unit={props.unit}
				open={menu}
				state={menu}
				setUnit={props.setUnit}
				setState={setMenu}
			/>
		</div>
	);
};
