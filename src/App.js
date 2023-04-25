import PersonCard from "./components/PersonCard";
home=PersonCard
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
        <PersonCard
          key={index}
          obj={personObj}
        />
      ))}
      
    </div>
  );
}

export default App;