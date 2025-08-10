import { useState, type MouseEvent } from 'react';
import './homepage.css';
import titleImageBlack from '../../assets/icons/most basic logo-black-text.png';
import titleImageWhite from '../../assets/icons/most basic logo-white-text.png';

interface Event {
    name: string;
    details: string;
}

interface DayPlan {
    day: string;
    date: string;
    events: Event[];
}

const week: DayPlan[] = [
    {
        day: 'SUN',
        date: '26',
        events: [
            { name: 'Opening Gathering', details: 'Kick-off meeting at 9 AM' },
            { name: 'City Tour', details: 'Explore Canberra landmarks' }
        ],
    },
    {
        day: 'MON',
        date: '27',
        events: [
            { name: 'Workshop', details: 'Morning workshop on community building' },
            { name: 'Picnic', details: 'Afternoon picnic in the park' }
        ],
    },
    {
        day: 'TUE',
        date: '28',
        events: [
            { name: 'Networking Lunch', details: 'Meet local leaders at noon' }
        ],
    },
    {
        day: 'WED',
        date: '29',
        events: [
            { name: 'Volunteer Day', details: 'Community service projects all day' }
        ],
    },
    {
        day: 'THU',
        date: '30',
        events: [
            { name: 'Free Day', details: 'Explore the city on your own' }
        ],
    },
    {
        day: 'FRI',
        date: '31',
        events: [
            { name: 'Halloween Party', details: 'Costume party at 7 PM' }
        ],
    },
    {
        day: 'SAT',
        date: '1',
        events: [
            { name: 'Closing Ceremony', details: 'Wrap-up event and dinner' }
        ],
    },
    {
        day: 'SUN',
        date: '2',
        events: [
            { name: 'Departure', details: 'Farewell breakfast and goodbyes' }
        ],
    },
];

export default function Homepage() {
    const [tooltip, setTooltip] = useState<{
        text: string;
        x: number;
        y: number;
    } | null>(null);

    const showTooltip = (
        e: MouseEvent<HTMLDivElement>,
        text: string,
    ) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip({ text, x: rect.left + rect.width / 2, y: rect.bottom });
    };

    const hideTooltip = () => setTooltip(null);

    return (
        <>
            <Navbar />
            <main className="home-main">
                <picture>
                    <source srcSet={titleImageWhite} media="(prefers-color-scheme: dark)" />
                    <img src={titleImageBlack} alt="title" className="title-image" />
                </picture>
                <h2 className="subheading">a city wide outreach</h2>
                <div className="week-container">
                    {week.map(({ day, date, events }) => (
                        <div className="day" key={date}>
                            <h3 className='day-header'><span className='day-of-week'>{`${day}`}</span> <span className='date-of-day'>{` ${date}`}</span></h3>
                            <div className='event-collection'>
                                {events.map((event, index) => (
                                    <div
                                        className="event"
                                        key={index}
                                        onMouseEnter={(e) => showTooltip(e, event.details)}
                                        onMouseLeave={hideTooltip}
                                    >
                                        <span className="event-name">{event.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                {tooltip && (
                    <div
                        className="event-tooltip"
                        style={{ top: tooltip.y, left: tooltip.x }}
                    >
                        {tooltip.text}
                    </div>
                )}
            </main>
        </>
    );
}

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">october 26 - november 2</div>
            <div className="nav-links">
                <a href="#vision">vision</a>
                <a href="#invite">invite</a>
                <a href="#register">register</a>
            </div>
        </nav>
    );
}
