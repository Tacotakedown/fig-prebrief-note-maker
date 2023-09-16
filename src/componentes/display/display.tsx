import React, { FC, useState } from 'react';
import FIG from '../../json/fig_parsed.json';
import './display.scss';
import { useIsSim } from '../../hooks/getIsSim';

interface LessonContentProps {
	unit: number;
	currentLesson: number;
}
const LessonContent: FC<LessonContentProps> = (props: any): JSX.Element => {
	let lesson;
	switch (props.unit) {
		case 0:
			lesson = FIG.private.Lessons[props.currentLesson].content.map(
				(n, index) => <li key={index}>{n}</li>
			);
			break;
		case 1:
			lesson = FIG.instrument.Lessons[props.currentLesson].content.map(
				(n, index) => <li key={index}>{n}</li>
			);
			break;
		case 2:
			lesson = FIG.commercial.Lessons[props.currentLesson].content.map(
				(n, index) => <li key={index}>{n}</li>
			);
			break;
		default:
			lesson = <div></div>;
			break;
	}
	return (
		<ul className="content">
			<div style={{ fontSize: '21px' }}>Lesson Content:</div>
			{lesson}
		</ul>
	);
};

interface LessonCompletionStandardsProps {
	unit: number;
	currentLesson: number;
}

const LessonCompletionStandards: FC<LessonCompletionStandardsProps> = (
	props: any
) => {
	let lesson;
	switch (props.unit) {
		case 0:
			lesson = FIG.private.Lessons[
				props.currentLesson
			].completionStandards.map((n, index) => <li key={index}>{n}</li>);
			break;
		case 1:
			lesson = FIG.instrument.Lessons[
				props.currentLesson
			].completionStandards.map((n, index) => <li key={index}>{n}</li>);
			break;
		case 2:
			lesson = FIG.commercial.Lessons[
				props.currentLesson
			].completionStandards.map((n, index) => <li key={index}>{n}</li>);
			break;
		default:
			lesson = <div></div>;
			break;
	}
	return (
		<ul className="completionStandards">
			<div style={{ fontSize: '21px' }}>Completion Standards:</div>
			{lesson}
		</ul>
	);
};

interface LessonPrebriefNotesProps {
	unit: number;
	currentLesson: number;
}
const LessonPrebriefNotes: FC<LessonPrebriefNotesProps> = (props: any) => {
	let lesson;
	switch (props.unit) {
		case 0:
			lesson = FIG.private.Lessons[props.currentLesson].content.toString();
			break;
		case 1:
			lesson =
				FIG.instrument.Lessons[props.currentLesson].content.toString();
			break;
		case 2:
			lesson =
				FIG.commercial.Lessons[props.currentLesson].content.toString();
			break;
		default:
			lesson = 'No Lesson Data';
			break;
	}
	let dutiesOfPic = false;
	if (
		(props.unit === 2 && props.currentLesson === 3) ||
		(props.unit === 2 && props.currentLesson === 4) ||
		(props.unit === 1 && props.currentLesson === 27)
	) {
		dutiesOfPic = true;
	} else {
		dutiesOfPic = false;
	}
	let sim = useIsSim(props.unit, props.currentLesson);
	return (
		<ul className="briefNotes">
			<div style={{ fontSize: '21px' }}>
				Prebrief Notes:
				<ul style={{ fontSize: '14px' }}>
					{dutiesOfPic ? (
						<li>{FIG.snippets.dutiesOfPic}</li>
					) : (
						<li>Plan on working on: {lesson}</li>
					)}
					<li>{FIG.snippets.readViewDo}</li>
					{!sim ? <li>{FIG.snippets.meet}</li> : ''}
					{!sim ? <li>{FIG.snippets.weight}</li> : ''}
					<li>{FIG.snippets.questions}</li>
				</ul>
			</div>
		</ul>
	);
};

interface LessonsProps {
	unit: number;
	handleClick: (number: number) => void;
}

const Lessons: FC<LessonsProps> = (props: any) => {
	let lessons;
	switch (props.unit) {
		case 0:
			lessons = FIG.private.Lessons.map((pvt, index) => (
				<div onClick={() => props.handleClick(index)} key={index}>
					{pvt.name}
				</div>
			));
			break;
		case 1:
			lessons = FIG.instrument.Lessons.map((inst, index) => (
				<div onClick={() => props.handleClick(index)} key={index}>
					{inst.name}
				</div>
			));
			break;
		case 2:
			lessons = FIG.commercial.Lessons.map((com, index) => (
				<div onClick={() => props.handleClick(index)} key={index}>
					{com.name}
				</div>
			));
			break;
		default:
			lessons = <div>No Lessons for Selected Stage</div>;
			break;
	}

	return <header className="dropDown">{lessons}</header>;
};

interface DisplayProps {
	currentLesson: number;
	unit: number;
	setLesson: any;
}

const Display: FC<DisplayProps> = (props: any): JSX.Element => {
	const [lessonSelect, setLessonSelect] = useState(false);
	const handleClick = (number: number) => {
		props.setLesson(number);
	};
	let unitName;
	switch (props.unit) {
		case 0:
			unitName = 'Private Pilot:';
			break;
		case 1:
			unitName = 'Instrument Rating:';
			break;
		case 2:
			unitName = 'Commercial Single Engine:';
			break;
		case 3:
			unitName = 'Crew Style Cross Contries:';
			break;
		case 4:
			unitName = 'Certified Flight Instructor:';
			break;
		case 5:
			unitName = 'Certified Flight Instructor Instrument:';
			break;
		case 6:
			unitName = 'Commercial Multi Engine:';
			break;
		case 7:
			unitName = 'Certified Flight Instructor Multi Engine:';
			break;
	}

	let currentLesson = 'shit';

	switch (props.unit) {
		case 0:
			currentLesson = FIG.private.Lessons[props.currentLesson].name;
			break;
		case 1:
			currentLesson = FIG.instrument.Lessons[props.currentLesson].name;
			break;
		case 2:
			currentLesson = FIG.commercial.Lessons[props.currentLesson].name;
			break;
		default:
			currentLesson = 'No Lessons for Given Unit';
			break;
	}

	return (
		<div className="displayContainer">
			<div className="left">
				<div className="dropdownGroup">
					<div className="header"> {unitName}</div>
					<div
						onClick={() => setLessonSelect(!lessonSelect)}
						style={{ fontSize: '25px' }}
						className={`lessonSelect ${lessonSelect ? 'show' : 'hide'}`}
					>
						<div
							style={{
								paddingBottom: '20px',
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<div>{currentLesson}</div>
							<div
								className={`${
									lessonSelect ? 'dropDownOpen' : 'dropDownClosed'
								}`}
							>
								&gt;
							</div>
						</div>
						<Lessons unit={props.unit} handleClick={props.setLesson} />
					</div>
				</div>

				<LessonContent
					unit={props.unit}
					currentLesson={props.currentLesson}
				/>
			</div>
			<div className="right">
				<LessonCompletionStandards
					unit={props.unit}
					currentLesson={props.currentLesson}
				/>
				<LessonPrebriefNotes
					unit={props.unit}
					currentLesson={props.currentLesson}
				/>
			</div>
		</div>
	);
};

export default Display;
