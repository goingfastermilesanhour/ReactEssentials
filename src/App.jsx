import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  //destructure array in 2 separate constants. To manage state. Always useState returns an array containing 2 values.
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selected button 'components, 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic, "This is the initial state, but check UI");
  }
  console.log('APP COMPONENT EXECUTING')
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
     {/*Output an array of jsx elements. So you take the array of objects and make it an array of JSX elements WITH MAP  */}
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} /> )}
           
            {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            */}
          </ul>
        </section>

        {/* check TabButton component, props.children refers to the text within the <tabButton> */}
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* You "configure" the execution of an event-dependent function (e.g., define which arguments get passed to it)           */}
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* Dynamic content - the arrow function gets exectued gets passed as a value to the TabButton and when the function inside TabButton gets executed, it will execute this handleSelect inside*/}

{/* if selectedTopic is undefined (hasn't got values), it means it's true and it will still write "Please select a topic" */}
          {!selectedTopic && <p>Please select a topic</p> } 
          {selectedTopic && (
            <div id="tab-content">
              {/* the property accessed in that object is stored in selectedTopic */}
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>)} 

        </section>
      </main>
    </div>
  );
}

export default App;
