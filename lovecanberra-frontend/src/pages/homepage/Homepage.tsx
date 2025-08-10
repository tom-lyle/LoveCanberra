import './homepage.css';
import titleImage from '../../assets/icons/most basic logo-black-text.png';

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
        day: 'Sun',
        date: 'Oct 26',
        events: [
            { name: 'Opening Gathering', details: 'Kick-off meeting at 9 AM' },
            { name: 'City Tour', details: 'Explore Canberra landmarks' }
        ],
    },
    {
        day: 'Mon',
        date: 'Oct 27',
        events: [
            { name: 'Workshop', details: 'Morning workshop on community building' },
            { name: 'Picnic', details: 'Afternoon picnic in the park' }
        ],
    },
    {
        day: 'Tue',
        date: 'Oct 28',
        events: [
            { name: 'Networking Lunch', details: 'Meet local leaders at noon' }
        ],
    },
    {
        day: 'Wed',
        date: 'Oct 29',
        events: [
            { name: 'Volunteer Day', details: 'Community service projects all day' }
        ],
    },
    {
        day: 'Thu',
        date: 'Oct 30',
        events: [
            { name: 'Free Day', details: 'Explore the city on your own' }
        ],
    },
    {
        day: 'Fri',
        date: 'Oct 31',
        events: [
            { name: 'Halloween Party', details: 'Costume party at 7 PM' }
        ],
    },
    {
        day: 'Sat',
        date: 'Nov 1',
        events: [
            { name: 'Closing Ceremony', details: 'Wrap-up event and dinner' }
        ],
    },
    {
        day: 'Sun',
        date: 'Nov 2',
        events: [
            { name: 'Departure', details: 'Farewell breakfast and goodbyes' }
        ],
    },
];

export default function Homepage() {
    return (
        <>
            <Navbar />
            <main className="home-main">
                <img src={titleImage} alt="title" className="title-image" />
                <h2 className="subheading">a city wide outreach</h2>
                <div className="week-container">
                    {week.map(({ day, date, events }) => (
                        <div className="day" key={date}>
                            <h3>{`${day} ${date}`}</h3>
                            {events.map((event, index) => (
                                <div className="event" key={index}>
                                    <span className="event-name">{event.name}</span>
                                    <div className="event-details">{event.details}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
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
