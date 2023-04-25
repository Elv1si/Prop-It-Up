import PersonCard from "./components/PersonCard";
import PetCard from "./components/Pet";
const peopleArr = [
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 45,
    hairColor: "black",
  },
  {
    firstName: "John",
    lastName: "Smith",
    age: 88,
    hairColor: "brown",
  }
];

function App() {
  return (
    <div className="App">
      {peopleArr.map((personObj, index) => (
        <PetCard
          key={index}
          firstName={personObj.firstName}
          lastName={personObj.lastName}
        />
      ))}
      
    </div>
  );
}

export default App;