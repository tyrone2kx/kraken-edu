import logo from './logo.svg';
import './styles/styles.scss';
import Card from './components/Card';
import Tags from './components/Tags';
import RoadMaps from './components/RoadMaps';
import TopBar from './components/TopBar';
import MainItem from './components/MainItem';
import RoadMap from './components/RoadMap';



function App() {

  return (
    <div className="App">

      <div className="App__wrapper">

        <div className="App__left">

          <Card />

          <div className="tagContainer">
            <Tags title="All" isActive />
            <Tags title="UI" />
            <Tags title="UX" />
            <Tags title="Enhancement" />
            <Tags title="Bug" />
            <Tags title="Feature" />
          </div>


          <RoadMap />


        </div>

        <div className="App__right">

          <TopBar />

          <MainItem
            comments={2}
            title="Add tags for solutions"
            subtitle="Easier to search for solutions based on a specific stack."
            tags={['Enhancement']}
            votes={21}
          />

          <MainItem
            comments={2}
            title="Add a dark theme option."
            subtitle="It will help people with light sensitivities and who prefer dark mode."
            tags={['Feature']}
            votes={21}
          />

          <MainItem
            comments={1}
            title="Q&A within the challenge hubs."
            subtitle="Challenge specific Q & A will make for easy reference."
            tags={['Feature']}
            votes={65}
          />

          <MainItem
            comments={2}
            title="Allow image/video upload to feedback."
            subtitle="Images and screencasts can enhance comments on Solutions."
            tags={['Enhancement']}
            votes={51}
          />

          <MainItem
            comments={3}
            title="Ability to follow others."
            subtitle="Stay updated on comments and solutions other people post.."
            tags={['Feature']}
            votes={42}
          />

          <MainItem
            comments={0}
            title="Preview images not loading."
            subtitle="Challenge preview images are missing when you apply a filter."
            tags={['Bug']}
            votes={3}
          />



        </div>

      </div>


    </div>
  );
}

export default App;
