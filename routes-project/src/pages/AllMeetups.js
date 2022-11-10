import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
      {
        id: 'm2',
        title: 'This is a second meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/1024px-Stonehenge2007_07_30.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
      {
        id: 'm3',
        title: 'This is a third meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg/1920px-Palace_of_Westminster%2C_London_-_Feb_2007.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a third, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      }      
];
function AllMeetupsPage(){
    return <section>
        <h1>All Meetups Page</h1>
        <MeetupList meetups={DUMMY_DATA} />
        {/* <ul>
            {DUMMY_DATA.map( (meetup) => {
                return <li key={meetup.id}>{meetup.title}</li>;
            } )}
        </ul> */}
    </section>;
    
    
    
}

export default AllMeetupsPage;